/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  TouchableHighlight,
  Alert,
  PermissionsAndroid,
  Platform,
  ScrollView,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  AppHeader,
  Card,
  Button,
  Input,
  FormInline,
  AccordionCategory,
} from '@/Components'
import Modal from 'react-native-modal'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Data from '../Data/categorylist.json'
import DropDownPicker from 'react-native-dropdown-picker'
import VideoPlayer from 'react-native-video-player'
import PDFView from 'react-native-view-pdf'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Toast from 'react-native-toast-message'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Contacts from 'react-native-contacts'
import Autocomplete from 'react-native-autocomplete-input'

var { height, width } = Dimensions.get('window')

import { sendInvite, uploadFileInvite } from '../Actions'

let order = []

class RowComponent extends Component {
  renderPdfView = data => {
    return (
      <View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.onPressArrow('up', data.id)}
            >
              <Ionicons name="caret-up-outline" color="black" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.onPressArrow('down', data.id)}
            >
              <Ionicons name="caret-down-outline" color="black" size={30} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginBottom: 15,
              marginTop: 5,
            }}
          >
            {data.title}
          </Text>
          <Image
            source={{ uri: data.content.thumbnail }}
            style={{ height: 150, width: 200, resizeMode: 'contain' }}
          />
        </View>

        <Button
          type="primary"
          text="View PDF"
          size="mid"
          buttonStyle={{ height: 35, marginBottom: 20, marginLeft: 0 }}
          onPress={() => {
            this.props.onViewPdf(data.content.url)
          }}
        />
        <TouchableOpacity
          style={{ position: 'absolute', top: -2, right: -10 }}
          onPress={() => this.props.onPressDelete(data.id)}
        >
          <Ionicons name="ios-close" color="black" size={30} />
        </TouchableOpacity>
      </View>
    )
  }

  renderVideoView = data => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.onPressArrow('up', data.id)}
          >
            <Ionicons name="caret-up-outline" color="black" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.onPressArrow('down', data.id)}
          >
            <Ionicons name="caret-down-outline" color="black" size={30} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 10,
            marginTop: 5,
          }}
        >
          {data.title}
        </Text>
        {data.content.isVimeo ? (
          <VideoPlayer
            key={data.id}
            endWithThumbnail
            thumbnail={{ uri: data.content.thumbnail }}
            video={{ uri: data.content.url }}
            videoWidth={750}
            videoHeight={380}
            ref={r => (this.player = r)}
          />
        ) : (
          <VideoPlayer
            key={data.id}
            endWithThumbnail
            thumbnail={{ uri: data.content.thumbnail }}
            video={{ uri: data.content.url }}
            videoWidth={750}
            videoHeight={380}
            ref={r => (this.player = r)}
          />
        )}
        <TouchableOpacity
          style={{ position: 'absolute', top: -2, right: -10 }}
          onPress={() => this.props.onPressDelete(data.id)}
        >
          <Ionicons name="ios-close" color="black" size={30} />
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    let data = this.props.data
    return (
      <TouchableHighlight
        underlayColor={'#eee'}
        style={{
          padding: 25,
          backgroundColor: '#F8F8F8',
          borderWidth: 1,
          borderColor: '#eee',
          top: 5,
        }}
        {...this.props.sortHandlers}
      >
        {data.content.isPdf
          ? this.renderPdfView(data)
          : this.renderVideoView(data)}
      </TouchableHighlight>
    )
  }
}

class SendInvites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      items: [
        {
          label: 'SMS Message',
          value: 'sms',
          icon: () => (
            <Ionicons name="ios-chatbubbles" size={18} color="black" />
          ),
        },
        {
          label: 'Email',
          value: 'email',
          icon: () => <Ionicons name="ios-mail" size={18} color="black" />,
        },
      ],
      type: 'sms',
      name: '',
      phone: '',
      message: '',
      subject: '',
      email: '',
      isNullName: false,
      isNullPhone: false,
      isNullMessage: false,
      isNullEmail: false,
      isValidEmail: true,
      isNullSubject: false,
      isCategoryVisible: false,
      isPreviewInvite: false,
      isPreviewPopup: false,
      inputPopup: '',
      scrollViewRef: '',
      inputType: '',
      listCategoryInvite: [],
      refreshing: false,
      synergy_id: '',
      userId: 0,
      purl: 'partners',
      contacts: [],
      filteredFilms: [],
      query: '',
      isPdfView: false,
      resource: '',
      loadingPreview: false,
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('profileInfo').then(res => {
      let $res = JSON.parse(res)
      this.setState({
        synergy_id: $res.synergy_id,
        userId: $res.id,
        purl: $res.purl,
        name: `${$res.first_name} ${$res.last_name}`,
      })
    })

    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
      }).then(() => {
        Contacts.getAll().then(contacts => {
          this.setState({ contacts: contacts })
        })
      })
    } else {
      Contacts.getAll().then(contacts => {
        this.setState({ contacts: contacts })
      })
    }
  }

  onSetParams = async () => {
    var SynergyFactSheet =
      "<div class='card-body'><div class='row'><div class='col-7 col-sm-6' id='pdfLeft'><img src='https://synergylegacynetwork.com//images/products/PopUpsWithAssets/ProArgi-9+/Screenshot%20ProArgi-9+%20Info%20Sheet.png' class='img-responsive'></div><div class='col-5 col-sm-6' id='pdfRight'><p><h4 style='font-size: 20px !important;'>Synergy Fact Sheet</h4><a href='https://synergylegacynetwork.com//images/products/PopUpsWithAssets/ProArgi-9+/ProArgi9_ScienceInfoSheet_USen.pdf' target='_blank'><button type='button' id='sharedbutton'>View PDF</button> </a></p></div></div></div>"
    var HistoryOfProArgi =
      "<div class='card-body'><div class='row'><div class='col-7 col-sm-6' id='pdfLeft'><img src='https://synergylegacynetwork.com//images/products/PopUpsWithAssets/ProArgi-9+/Screenshot%20The%20History%20of%20ProArgi-9+.png' class='img-responsive'></div><div class='col-5 col-sm-6' id='pdfRight'><p><h4 style='font-size: 20px !important;'>History of ProArgi-9+</h4><a href='https://synergylegacynetwork.com//images/products/PopUpsWithAssets/ProArgi-9+/The_history_of_ProArgi-9+.pdf' target='_blank'><button type='button' id='sharedbutton'>View PDF</button> </a></p></div></div></div>"
    var SynergyVideoBuyButton =
      "<div class='embed-responsive embed-responsive-16by9'><center><iframe src='https://player.vimeo.com/video/312618526' frameborder='0' allow='accelerometer; autoplay; gyroscope; picture-in-picture'allowfullscreen></iframe></center></div><br>"

    var ProgiBuyButton =
      "<div class='card-body'>\
    <div class='row'>\
    <div class='col-8 col-sm-6' id='productLeft'>\
      <p><h4 style='font-size: 21px !important;''>PROARGI-9+</h4> <br>\
          <a href='https://" +
      this.state.synergy_id +
      "synergyworldwide.com/en-us/shop/product/ProArgi-9%2B' target='_blank'><button type='button' id='sharedbuttonproduct' value='1'>Buy</button> </a></p>\
        </div>\
          <div class='col-4 col-sm-6' id='productRight'>\
          <img src='https://synergylegacynetwork.com//images/products/proargi9noflavor-ssp-us.png' class='img-responsive'>\
          </div>\
      </div>\
    </div>"

    var PurifyKitBuyButton =
      "<div class='card-body'>\
    <div class='row'>\
    <div class='col-8 col-sm-6' id='productLeft'>\
      <p><h4 style='font-size: 21px !important;'>PURIFY KIT</h4> <br>\
          <a href='https://" +
      this.state.synergy_id +
      "synergyworldwide.com/en-us/shop/product/Purify%20Kit' target='_blank'><button type='button' id='sharedbuttonproduct' value='1'>Buy</button> </a></p>\
        </div>\
          <div class='col-4 col-sm-6' id='productRight'>\
          <img src='https://synergylegacynetwork.com//images/products/purify_kit.png' class='img-responsive'>\
          </div>\
      </div>\
    </div>"

    var TrulumPackBuyButton =
      "<div class='card-body'>\
    <div class='row'>\
    <div class='col-8 col-sm-6' id='productLeft'>\
      <p><h4 style='font-size: 21px !important;'>TRULŪM PACK</h4> <br>\
          <a href='https://" +
      this.state.synergy_id +
      "synergyworldwide.com/en-us/shop/product/Trulūm%20Pack' target='_blank'><button type='button' id='sharedbuttonproduct' value='1'>Buy</button> </a></p>\
        </div>\
          <div class='col-4 col-sm-6' id='productRight'>\
          <img src='https://synergylegacynetwork.com//images/trulum-pack.png' class='img-responsive'>\
          </div>\
      </div>\
    </div>"

    let params = {
      user_id: this.state.userId,
      type: this.state.type,
      sender_name: this.state.name,
      purl: this.state.purl,
      name: this.state.message,
      video_invite: '',
    }

    if (this.state.type === 'sms') {
      params.phone = this.state.phone
    } else {
      params.email = this.state.email
      params.subject = this.state.subject
    }

    let $listCategory = this.state.listCategoryInvite

    order.map((keys, id) => {
      let data = $listCategory[keys]
      if (data.title === 'Synergy Fact Sheet') {
        params[`getVal${id + 1}`] = SynergyFactSheet
        params[`display${id + 1}`] = data.title
      } else if (data.title === 'History of ProArgi-9+') {
        params[`getVal${id + 1}`] = HistoryOfProArgi
        params[`display${id + 1}`] = data.title
      } else if (data.title === 'Synergy Video Buy Button') {
        params[`getVal${id + 1}`] = SynergyVideoBuyButton
        params[`display${id + 1}`] = data.title
      } else if (data.title === 'Link to PA9') {
        params[`getVal${id + 1}`] = ProgiBuyButton
        params[`display${id + 1}`] = data.title
      } else if (data.title === 'Link to EHC') {
        params[`getVal${id + 1}`] = PurifyKitBuyButton
        params[`display${id + 1}`] = data.title
      } else if (data.title === 'Link to Trulūm') {
        params[`getVal${id + 1}`] = TrulumPackBuyButton
        params[`display${id + 1}`] = data.title
      } else {
        params[`getVal${id + 1}`] = data.html
        params[`display${id + 1}`] = data.title
      }
    })

    return params
  }

  onSendCancel = () => {
    this.setState({ isPreviewPopup: false, inputPopup: '', inputType: '' })
  }

  onSendDone = () => {
    if (this.state.inputType === 'message') {
      this.setState({ message: this.state.inputPopup })
    }

    if (this.state.inputType === 'email') {
      this.setState({ email: this.state.inputPopup })
    }

    if (this.state.inputType === 'phone') {
      this.setState({ phone: this.state.inputPopup })
    }

    this.setState({ isPreviewPopup: false, inputPopup: '', inputType: '' })
  }

  onFocusInput = (inputType, value) => {
    this.setState({ inputType, inputPopup: value, isPreviewPopup: true })
  }

  onSendInvite = async () => {
    const params = await this.onSetParams()
    console.log('SEND INVITE DATA', params)
    Toast.show({
      position: 'bottom',
      type: 'info',
      text1: 'Sending processing!',
    })
    this.props.sendInvite(params).then(res => {
      if (res) {
        Alert.alert(
          'Invitation was sent!',
          'Successfully sent invite!',
          [
            {
              text: 'OK',
              onPress: () => {
                order = []
                this.setState({
                  listCategoryInvite: [],
                  inputPopup: '',
                  phone: '',
                  message: '',
                  subject: '',
                  email: '',
                })
                let self = this
                setTimeout(() => {
                  self.setState({ isPreviewInvite: false })
                }, 1000)
              },
            },
          ],
          { cancelable: false },
        )
      }
    })
  }

  onNextStep = () => {
    if (this.state.type === 'sms') {
      if (
        this.state.name === '' ||
        this.state.phone === '' ||
        this.state.message === ''
      ) {
        alert('Please fill out all required fields')
        this.setState({
          isNullName: this.state.name === '' ? true : false,
          isNullPhone: this.state.phone === '' ? true : false,
          isNullMessage: this.state.message === '' ? true : false,
        })
        // } else if (this.state.listCategoryInvite.length === 0) {
        // alert('Add atleast one preview')
        // this.$refs.preview.autoFocus()
        // this.scrollViewRef.scrollTo({ x: 0, y: 450, animated: true })
      } else {
        this.setState({
          isPreviewInvite: true,
          isNullName: false,
          isNullPhone: false,
          isNullMessage: false,
        })
        // this.onSendInvite()
      }
    } else {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
      if (
        this.state.name === '' ||
        this.state.message === '' ||
        this.state.subject === '' ||
        this.state.email === '' ||
        reg.test(this.state.email) === false
      ) {
        alert('Please fill out all required fields')
        this.setState({
          isNullName: this.state.name === '' ? true : false,
          isNullMessage: this.state.message === '' ? true : false,
          isNullEmail: this.state.email === '' ? true : false,
          isNullSubject: this.state.subject === '' ? true : false,
          isValidEmail: !(this.state.email === '' ? true : false)
            ? reg.test(this.state.email) === false
              ? false
              : true
            : true,
        })
        // } else if (this.state.listCategoryInvite.length === 0) {
        // lert('Add atleast one preview')
        // this.scrollViewRef.scrollTo({ x: 0, y: 450, animated: true })
        // this.$refs.preview.autoFocus()
      } else {
        this.setState({
          isPreviewInvite: true,
          isNullName: false,
          isNullMessage: false,
          isNullEmail: false,
          isValidEmail: true,
          isNullSubject: false,
        })
        // this.onSendInvite()
      }
    }
  }

  makeid = length => {
    var result = ''
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  uploadFileFunction = file => {
    this.setState({
      loadingPreview: true,
      isCategoryVisible: false,
    })
    Toast.show({
      position: 'bottom',
      type: 'info',
      text1: 'Upload processing!',
    })
    this.props.uploadFileInvite(file).then(res => {
      Toast.show({
        position: 'bottom',
        type: 'success',
        text1: 'Upload successfull!',
      })
      const video = 'https://synergylegacynetwork.com/video_invites/' + res.file
      let $listInvitePreview = this.state.listCategoryInvite
      const data = {
        title: '',
        html:
          "<div class='embed-responsive embed-responsive-16by9'><center><iframe src='" +
          video +
          "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'allowfullscreen></iframe></center></div><br>",
        content: {
          title: '',
          thumbnail: '',
          url: video,
          isYoutube: false,
          isPdf: false,
        },
      }
      data.id = order.length
      $listInvitePreview[order.length] = data
      order = Object.keys($listInvitePreview)
      this.setState({
        listCategoryInvite: $listInvitePreview,
        loadingPreview: false,
      })
      this.scrollViewRef.scrollTo({ x: 0, y: 450, animated: true })
    })
  }

  onAddInvite = async (data, id) => {
    if (data.content.isVimeo) {
      const VIMEO_ID = data.content.url
      // console.log(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
      await fetch(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
        .then(res => res.json())
        .then(res => {
          // console.log(res)
          data.content.url =
            res.request.files.hls.cdns[res.request.files.hls.default_cdn].url
        })
    }
    let $listInvitePreview = this.state.listCategoryInvite
    // let hashId = this.makeid(32)
    data.id = order.length
    $listInvitePreview[order.length] = data
    order = Object.keys($listInvitePreview)
    this.setState({
      listCategoryInvite: $listInvitePreview,
      refreshing: true,
      isCategoryVisible: false,
    })
    // this.wait(2000).then(() => {
    //   this.setState({
    //     refreshing: false,
    //   })
    // })
    // this.scrollViewRef.scrollTo({ x: 0, y: 450, animated: true })
  }

  wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout))
  }

  onDeleteItem = hashId => {
    // console.log(hashId)
    // console.log(order)
    let $listInvitePreview = this.state.listCategoryInvite
    // console.log($listInvitePreview)
    delete $listInvitePreview[hashId]
    order = Object.keys($listInvitePreview)
    this.setState({ listCategoryInvite: $listInvitePreview })
  }

  onReOrder = (direction, hashId) => {
    let $listInvitePreview = this.state.listCategoryInvite
    // let indexOfElement = order.indexOf(hashId)
    // order.splice(
    //   direction === 'down' ? indexOfElement + 1 : indexOfElement - 1,
    //   0,
    //   order.splice(indexOfElement, 1)[0],
    // )
    if (direction === 'down') {
      // console.log('hashid = ' + hashId)
      // console.log('length = ' + $listInvitePreview.length)
      if ($listInvitePreview.length > hashId + 1) {
        let tmp = $listInvitePreview[hashId]
        var indexPlus = hashId + 1
        $listInvitePreview[hashId] = $listInvitePreview[indexPlus]
        $listInvitePreview[hashId].id = tmp.id
        tmp.id = hashId + 1
        $listInvitePreview[indexPlus] = tmp
      }
    } else {
      // console.log('hashid = ' + hashId)
      // console.log('length = ' + $listInvitePreview.length)
      if (hashId !== 0) {
        var tmp = $listInvitePreview[hashId]
        var indexPlus = hashId - 1
        $listInvitePreview[hashId] = $listInvitePreview[indexPlus]
        $listInvitePreview[hashId].id = tmp.id
        tmp.id = hashId - 1
        $listInvitePreview[indexPlus] = tmp
      }
    }
    // console.log($listInvitePreview)
    this.setState({ listCategoryInvite: $listInvitePreview })
  }

  renderCategory = () => {
    return (
      <Modal
        deviceHeight={height}
        deviceWidth={width}
        style={styles.modalContainer}
        isVisible={this.state.isCategoryVisible}
        animationIn="fadeInUp"
        animationOut="fadeOutDown"
        hasBackdrop={false}
      >
        <View style={{ flex: 1 }}>
          <View style={{ height: 120, backgroundColor: '#00acef' }}>
            <View style={{ paddingTop: 60, paddingHorizontal: 20 }}>
              <Text
                style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}
              >
                Select which info you want to add to the landing page that will
                be shared.
              </Text>
            </View>
          </View>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ padding: 20 }}
          >
            {Data.category.map((item, id) => {
              return (
                <AccordionCategory
                  key={`${id}_main_${item.id}`}
                  title={item.title}
                  contentList={item}
                  onUploadFile={file => this.uploadFileFunction(file)}
                  onPress={(data, key) => this.onAddInvite(data, key)}
                />
              )
            })}
          </ScrollView>
        </View>
        <TouchableOpacity
          style={styles.rightPosition}
          onPress={() => this.setState({ isCategoryVisible: false })}
        >
          <Ionicons name="ios-close" color="black" size={40} />
        </TouchableOpacity>
      </Modal>
    )
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
            <FontAwesome name="close" color="#CCCCCC" size={20} />
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

  renderInputPopup = () => {
    // const { query } = this.state
    // const contacts = this.findFilm(query)
    // const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim()
    // console.log(contacts)
    return (
      <Modal
        deviceHeight={height}
        deviceWidth={width}
        style={styles.modalContainer}
        isVisible={this.state.isPreviewPopup}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        hasBackdrop={false}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: Platform.OS === 'ios' ? 100 : 60,
              backgroundColor: '#00acef',
            }}
          >
            <View style={styles.lefttPosition}>
              <Button
                type="primaryV2"
                textColor="White"
                text="Close"
                textStyle={{ fontSize: 16, fontWeight: 'bold' }}
                buttonStyle={{
                  width: 90,
                  height: 40,
                  backgroundColor: 'tranparent',
                }}
                onPress={() => this.onSendCancel()}
              />
            </View>
            <View style={styles.rightPosition}>
              <Button
                type="primaryV2"
                textColor="White"
                text="Done"
                textStyle={{ fontSize: 16, fontWeight: 'bold' }}
                buttonStyle={{
                  width: 100,
                  height: 40,
                  backgroundColor: 'tranparent',
                }}
                onPress={() => this.onSendDone()}
              />
            </View>
          </View>
          <View style={{ flex: 1, padding: 10 }}>
            {this.state.inputType === 'message' ? (
              <Autocomplete
                autoFocus={true}
                // data={
                //   contacts.length === 1 && comp(query, contacts[0].givenName)
                //     ? []
                //     : contacts
                // }
                data={this.state.filteredFilms}
                value={this.state.query}
                onChangeText={text => {
                  this.findFilm(text)
                  this.setState({
                    query: text,
                    inputPopup: text,
                    message: text,
                  })
                }}
                flatListProps={{
                  keyExtractor: (_, idx) => idx,
                  renderItem: ({ item, id }) => {
                    return (
                      <TouchableOpacity
                        style={{
                          backgroundColor: 'white',
                          paddingVertical: 5,
                        }}
                        key={id}
                        onPress={() => {
                          this.setState({
                            filteredFilms: [],
                            inputPopup: item.givenName,
                            query: item.givenName,
                            message: item.givenName,
                            phone:
                              item.phoneNumbers.length > 0
                                ? item.phoneNumbers[0].number
                                : 'None',
                          })
                        }}
                      >
                        <Text
                          style={{
                            paddingVertical: 5,
                            paddingHorizontal: 5,
                          }}
                        >
                          {item.givenName}{' '}
                          {item.phoneNumbers.length > 0
                            ? item.phoneNumbers[0].number
                            : 'None'}
                        </Text>
                      </TouchableOpacity>
                    )
                  },
                }}
              />
            ) : (
              <Input
                autoFocus={true}
                value={this.state.inputPopup}
                onChangeText={inputPopup => {
                  this.setState({ inputPopup })
                }}
                containerStyle={{ marginBottom: 10 }}
              />
            )}
          </View>
        </View>
      </Modal>
    )
  }

  renderPreviewInvite = () => {
    return (
      <Modal
        deviceHeight={height}
        deviceWidth={width}
        style={styles.modalContainer}
        isVisible={this.state.isPreviewInvite}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        hasBackdrop={false}
      >
        <View style={{ flex: 1 }}>
          <View style={{ height: 100, backgroundColor: '#00acef' }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 40,
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}
              >
                INVITE PREVIEW
              </Text>
            </View>
            <View style={styles.rightPosition}>
              <Button
                type="primaryV2"
                textColor="White"
                text="SEND"
                textStyle={{ fontSize: 16, fontWeight: 'bold' }}
                buttonStyle={{
                  width: 80,
                  height: 40,
                  backgroundColor: 'tranparent',
                }}
                onPress={() => this.onSendInvite()}
              />
            </View>
          </View>
          <Image
            source={{ uri: 'https://synergylegacynetwork.com/files/logo.png' }}
            style={{
              width: 220,
              height: 60,
              resizeMode: 'contain',
              alignSelf: 'center',
              marginTop: 10,
            }}
          />
          <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              {this.state.loadingPreview ? (
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                  }}
                >
                  <FontAwesome name="spinner" color="#CCCCCC" size={20} />
                </View>
              ) : (
                this.state.listCategoryInvite.map((row, index) => (
                  <RowComponent
                    key={index}
                    data={row}
                    onPressDelete={hashId => this.onDeleteItem(hashId)}
                    onPressArrow={(direction, hashId) =>
                      this.onReOrder(direction, hashId)
                    }
                    onViewPdf={data => this.onViewPdf(data)}
                  />
                ))
              )}
            </View>
          </ScrollView>
        </View>
        <View style={styles.fabContainer}>
          <Button
            type="primaryV2"
            textColor="White"
            text="+"
            textStyle={{ fontSize: 30, fontWeight: 'bold' }}
            buttonStyle={styles.addContainer}
            onPress={() => this.setState({ isCategoryVisible: true })}
          />
        </View>
        {this.renderCategory()}
        <TouchableOpacity
          style={styles.lefttPosition}
          onPress={() => this.setState({ isPreviewInvite: false })}
        >
          <Ionicons name="arrow-back-outline" color="white" size={40} />
        </TouchableOpacity>
      </Modal>
    )
  }

  findFilm(query) {
    if (query === '') {
      return []
    }

    const { contacts } = this.state
    const regex = new RegExp(`${query.trim()}`, 'i')
    const newContact = contacts.filter(contact => contact !== null)
    const filteredContacts = newContact.filter(contact => {
      if (contact) {
        if (contact.givenName !== null) {
          return contact.givenName.search(regex) >= 0
        }
      }
      return false
    })
    // console.log('testing', query, filteredContacts)
    this.setState({
      filteredFilms: filteredContacts,
    })
    return []
  }

  setOpen = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  setScrollViewRef = element => {
    this.scrollViewRef = element
  }

  setValue = callback => {
    this.setState({
      type: callback(this.state.type),
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="SEND INVITES"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          ref={this.setScrollViewRef}
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="SEND INVITE" isShadow={true}>
            <View style={styles.textContainer}>
              <View>
                <FormInline>
                  <Input
                    editable={false}
                    placeholder={this.state.name}
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                    containerStyle={{ marginBottom: 10 }}
                  />
                  {this.state.isNullName ? (
                    <Text style={styles.errorText}>
                      *Please fill out this required field
                    </Text>
                  ) : null}
                </FormInline>
              </View>
              {Platform.OS === 'android' ? (
                <FormInline label="Message Type">
                  <DropDownPicker
                    open={this.state.open}
                    value={this.state.type}
                    items={this.state.items}
                    setOpen={() => this.setOpen()}
                    setValue={value => this.setValue(value)}
                    style={{ backgroundColor: 'white' }}
                  />
                </FormInline>
              ) : (
                <FormInline label="Message Type" style={{ zIndex: 10 }}>
                  <DropDownPicker
                    open={this.state.open}
                    value={this.state.type}
                    items={this.state.items}
                    setOpen={() => this.setOpen()}
                    setValue={value => this.setValue(value)}
                    style={{ backgroundColor: 'white' }}
                  />
                </FormInline>
              )}

              {this.state.type === 'sms' ? (
                <View>
                  <FormInline label="Contact's Name">
                    <TouchableOpacity
                      onPress={() =>
                        this.onFocusInput('message', this.state.message)
                      }
                    >
                      {Platform.OS !== 'android' ? (
                        <Input
                          pointerEvents={'none'}
                          placeholder={this.state.message}
                          value={this.state.message}
                          onChangeText={message => this.setState({ message })}
                          containerStyle={{ marginBottom: 10 }}
                        />
                      ) : (
                        <View style={styles.inputStyle}>
                          <Text style={{ color: 'black', fontSize: 16 }}>
                            {this.state.message}
                          </Text>
                        </View>
                      )}
                    </TouchableOpacity>
                    {this.state.isNullMessage ? (
                      <Text style={styles.errorText}>
                        *Please fill out this required field
                      </Text>
                    ) : null}
                  </FormInline>
                  <FormInline label="Phone">
                    <TouchableOpacity
                      onPress={() =>
                        this.onFocusInput('phone', this.state.phone)
                      }
                    >
                      {Platform.OS !== 'android' ? (
                        <Input
                          pointerEvents={'none'}
                          placeholder={this.state.phone}
                          value={this.state.phone}
                          onChangeText={phone => this.setState({ phone })}
                          containerStyle={{ marginBottom: 10 }}
                        />
                      ) : (
                        <View style={styles.inputStyle}>
                          <Text style={{ color: 'black', fontSize: 16 }}>
                            {this.state.phone}
                          </Text>
                        </View>
                      )}
                    </TouchableOpacity>
                    {this.state.isNullPhone ? (
                      <Text style={styles.errorText}>
                        *Please fill out this required field
                      </Text>
                    ) : null}
                  </FormInline>
                </View>
              ) : (
                <View>
                  <FormInline label="Subject">
                    <Input
                      placeholder={this.state.subject}
                      value={this.state.subject}
                      onChangeText={subject => this.setState({ subject })}
                      containerStyle={{ marginBottom: 10 }}
                    />
                    {this.state.isNullSubject ? (
                      <Text style={styles.errorText}>
                        *Please fill out this required field
                      </Text>
                    ) : null}
                  </FormInline>
                  <FormInline label="Contact's Name">
                    <TouchableOpacity
                      onPress={() =>
                        this.onFocusInput('message', this.state.message)
                      }
                    >
                      {Platform.OS === 'ios' ? (
                        <Input
                          pointerEvents={'none'}
                          placeholder={this.state.message}
                          value={this.state.message}
                          onChangeText={message => this.setState({ message })}
                          containerStyle={{ marginBottom: 10 }}
                        />
                      ) : (
                        <View style={styles.inputStyle}>
                          <Text style={{ color: 'black', fontSize: 16 }}>
                            {this.state.message}
                          </Text>
                        </View>
                      )}
                    </TouchableOpacity>
                    {this.state.isNullMessage ? (
                      <Text style={styles.errorText}>
                        *Please fill out this required field
                      </Text>
                    ) : null}
                  </FormInline>
                  <FormInline label="Email">
                    <TouchableOpacity
                      onPress={() =>
                        this.onFocusInput('email', this.state.email)
                      }
                    >
                      {Platform.OS === 'ios' ? (
                        <Input
                          pointerEvents={'none'}
                          placeholder={this.state.email}
                          value={this.state.email}
                          onChangeText={email => this.setState({ email })}
                          containerStyle={{ marginBottom: 10 }}
                        />
                      ) : (
                        <View style={styles.inputStyle}>
                          <Text style={{ color: 'black', fontSize: 16 }}>
                            {this.state.email}
                          </Text>
                        </View>
                      )}
                    </TouchableOpacity>
                    {this.state.isNullEmail ? (
                      <Text style={styles.errorText}>
                        *Please fill out this required field
                      </Text>
                    ) : null}
                    {!this.state.isValidEmail ? (
                      <Text style={styles.errorText}>*Email is invalid</Text>
                    ) : null}
                  </FormInline>
                </View>
              )}
              <Button
                type="primaryV2"
                textColor="White"
                text="Next"
                onPress={() => this.onNextStep()}
              />
            </View>
          </Card>
        </ScrollView>
        {this.renderPreviewInvite()}
        {this.renderInputPopup()}
        {this.renderPdfViewer()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  textContainer: {
    padding: 15,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 100,
    borderWidth: 5,
  },
  title: {
    fontSize: 32,
  },
  textStyle: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'normal',
    marginBottom: 10,
  },
  urlTextStyle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#337ab7',
  },
  rightPosition: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 8,
    right: 5,
  },
  lefttPosition: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 8,
    left: 5,
  },
  modalContainer: {
    flex: 1,
    margin: 0,
    backgroundColor: 'white',
  },
  addContainer: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  fabContainer: {
    position: 'absolute',
    right: 40,
    bottom: 50,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
  contentContainer: {
    height: height,
    width: width,
    borderWidth: 2,
    ...Platform.select({
      ios: {
        paddingHorizontal: 0,
      },

      android: {
        paddingHorizontal: 0,
      },
    }),
  },
  row: {
    // flexDirection: 'row',
    // height: 80,
    flex: 1,
    marginTop: 7,
    marginBottom: 12,
    borderRadius: 4,
    padding: 25,
    backgroundColor: '#F8F8F8',
    borderBottomWidth: 1,
    borderColor: '#eee',

    ...Platform.select({
      ios: {
        width: width - 30 * 2,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 1,
        shadowOffset: { height: 2, width: 2 },
        shadowRadius: 2,
      },

      android: {
        width: width - 30 * 2,
        elevation: 0,
        marginHorizontal: 30,
      },
    }),
  },
  text: {
    fontSize: 24,
    color: '#222222',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 30,
    borderRadius: 25,
  },
  inputStyle: {
    borderColor: 'lightgray',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 2,
    paddingHorizontal: 2,
    height: 40,
  },
})

const mapStateToProps = state => ({
  data: state.dashboard,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sendInvite,
      uploadFileInvite,
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(SendInvites)
