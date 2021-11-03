/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  PermissionsAndroid,
  Platform,
} from 'react-native'
import PDFView from 'react-native-view-pdf'
import Modal from 'react-native-modal'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import DocumentPicker from 'react-native-document-picker'
import { launchImageLibrary } from 'react-native-image-picker'
import { AccordionSubCategory, Button } from '@/Components'
import newId from '../Utils/newid'
var { height, width } = Dimensions.get('window')

export default class AccordionCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props,
      expanded: props.contentList.expand,
      resource: '',
      isPdfView: false,
      filename: 'No File Attach',
      file: null,
    }
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      )
    }
  }

  toggleExpand = () => {
    let newData = this.state.data
    newData.contentList.expand = !this.state.expanded
    this.props.onExpand(newData)
    this.setState({ expanded: !this.state.expanded, data: newData })
  }

  onExpand = data => {
    let newData = this.state.data
    this.props.onExpand(newData)
    this.setState({ data: newData })
  }

  selectOneFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      // const res = await DocumentPicker.pick({
      //   type: [DocumentPicker.types.allFiles],
      // })
      // this.setState({ filename: res.name, file: res })
      let options = {
        title: 'Select Video',
        mediaType: 'video',
      }

      launchImageLibrary(options, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker')
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorCode)
        } else if (response.errorMessage) {
          console.log('User tapped custom button: ', response.errorMessage)
        } else {
          const source = { uri: response.assets[0].uri }

          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          this.setState({
            filename: response.assets[0].fileName + '.mp4',
            file: {
              name: response.assets[0].fileName + '.mp4',
              uri: response.assets[0].uri,
              type: 'video/mp4',
            },
          })
        }
      })

      // console.log(res.uri)
      // console.log(res.type) // mime type
      // console.log(res.name)
      // console.log(res.size)
    } catch (err) {
      console.log(err)
      // if (DocumentPicker.isCancel(err)) {
      //   // User cancelled the picker, exit any dialogs or menus and move on
      // }
    }
  }

  renderPdfViewer = () => {
    return (
      <Modal
        style={{ margin: 0, paddingTop: 80 }}
        isVisible={this.state.isPdfView}
      >
        <View
          style={{
            backgroundColor: '#202020',
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <TouchableOpacity
            style={{ alignSelf: 'flex-end' }}
            onPress={() => this.setState({ isPdfView: false })}
          >
            <FontAwesome name="close" color="#CCCCCC" size={30} />
          </TouchableOpacity>
        </View>
        <PDFView
          fadeInDuration={250.0}
          style={{ flex: 1 }}
          resource={this.state.resource}
          resourceType={'url'}
          onLoad={() => console.log('')}
          onError={() => console.log('Cannot render PDF')}
        />
      </Modal>
    )
  }

  onViewPdf = pdfFile => {
    this.setState({ isPdfView: true, resource: pdfFile })
  }

  fileupload = () => {
    this.props.onUploadFile(this.state.file)
  }

  renderSubContent = () => {
    return (
      <View style={styles.subContainer}>
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={{}}>
            Add a personally recorded short video for your invite.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
            }}
          >
            <View style={[{ width: '50%' }]}>
              <TouchableOpacity
                activeOpacity={0.5}
                underlayColor="#042417"
                style={[styles.btnClickContain, { marginTop: 10 }]}
                onPress={() => this.selectOneFile()}
              >
                <Ionicons name="attach-outline" color="white" size={20}>
                  <Text
                    style={{ color: 'white', fontSize: 18, fontWeight: '500' }}
                  >
                    Attach File
                  </Text>
                </Ionicons>
              </TouchableOpacity>
            </View>
            <View
              style={[
                {
                  width: '50%',
                  flex: 1,
                  flexDirection: 'row',
                },
              ]}
            >
              <Text style={{ paddingTop: 25 }}>{this.state.filename}</Text>
            </View>
          </View>

          <Button
            type="primary"
            text="Add to invite"
            size="mid"
            buttonStyle={{ height: 40, marginTop: 10 }}
            onPress={() => {
              this.fileupload()
            }}
          />
        </View>
      </View>
    )
  }

  renderContent = subCategory => {
    return (
      <View style={{ paddingLeft: 10 }}>
        {subCategory &&
          subCategory.map((item, id) => {
            return (
              <AccordionSubCategory
                key={`${id}_parent_${item.id}`}
                title={item.title}
                content={item}
                hasSubCategory={
                  item.subCategory && item.subCategory.length > 0 ? 'naa' : 'wa'
                }
                onExpand={data => this.onExpand(data)}
                onPress={this.props.onPress}
              />
            )
          })}
      </View>
    )
  }

  render() {
    const { subCategory } = this.props.contentList
    return (
      <View>
        <View>
          <TouchableOpacity onPress={() => this.toggleExpand()}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 16, color: '#777' }}>
                {this.state.expanded ? ' - ' : ' + '}
              </Text>
              <Text style={styles.title}>{this.props.title}</Text>
            </View>
          </TouchableOpacity>
          <View />
          {subCategory === false
            ? this.state.expanded && this.renderSubContent()
            : this.state.expanded && this.renderContent(subCategory)}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderLeftWidth: 0.5,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
    marginBottom: 10,
    borderRadius: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#337ab7',
    paddingBottom: 8,
  },
  child: {
    borderTopWidth: 0.5,
    borderColor: '#ddd',
    borderStyle: 'solid',
    backgroundColor: '#fff',
    padding: 16,
  },
  subContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  btnClickContain: {
    backgroundColor: '#2b66aa',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 3,
    width: 150,
    height: 50,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
  btnText: {
    fontSize: 18,
    color: '#FAFAFA',
    marginLeft: 10,
    marginTop: 2,
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  //https://aboutreact.com/file-uploading-in-react-native/
})
