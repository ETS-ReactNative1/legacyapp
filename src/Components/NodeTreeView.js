/* eslint-disable no-unused-vars */
/* @flow */

import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Svg, {
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Use,
  Defs,
  Stop,
} from 'react-native-svg'
import { Card } from '@/Components'

export default class NodeTreeView extends PureComponent {
  renderMain = () => {
    return (
      <View style={styles.centerContent}>
        {/* level 1*/}
        <Svg height="80" width="80">
          <Circle cx="40" cy="50" r="30" fill="#CCCCCC" />
        </Svg>
        <Svg height="50" width="200">
          <Polyline
            points="0,50 0,30 100,30 100,15 100,30 200,30 200,50"
            fill="none"
            stroke="black"
            strokeWidth="0.5"
          />
        </Svg>
      </View>
    )
  }

  renderLeftLevel1 = () => {
    return (
      <View style={styles.centerContent}>
        <Svg height="50" width="50">
          <Circle cx="25" cy="25" r="20" fill="#CCCCCC" />
        </Svg>
        <Svg height="40" width="100">
          <Polyline
            points="0,30 0,15 50,15 50,5 50,15 100,15 100,30"
            fill="none"
            stroke="black"
            strokeWidth="0.5"
          />
        </Svg>
      </View>
    )
  }

  renderRightLevel1 = () => {
    return (
      <View style={styles.centerContent}>
        <Svg height="50" width="50">
          <Circle cx="25" cy="25" r="20" fill="#CCCCCC" />
        </Svg>
        <Svg height="40" width="100">
          <Polyline
            points="0,30 0,15 50,15 50,5 50,15 100,15 100,30"
            fill="none"
            stroke="black"
            strokeWidth="0.5"
          />
        </Svg>
      </View>
    )
  }

  renderLeftLevel2 = () => {
    return <View style={styles.centerContent} />
  }

  renderRightLevel2 = () => {
    return <View style={styles.centerContent} />
  }

  renderLeftLevel3 = () => {
    return <View style={styles.centerContent} />
  }

  renderRightLevel3 = () => {
    return <View style={styles.centerContent} />
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 40,
          }}
        >
          {this.renderMain()}

          <View style={{ flexDirection: 'row' }}>
            {/* level 2 child 1*/}
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 35,
              }}
            >
              {this.renderLeftLevel1()}

              {/* level 3 child 1*/}
              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 30,
                  }}
                >
                  <Svg height="20" width="20">
                    <Circle cx="10" cy="10" r="10" fill="#CCCCCC" />
                  </Svg>
                  <Svg height="40" width="48">
                    <Polyline
                      points="0,30 0,15 24,15 24,5 24,15 48,15 48,30"
                      fill="none"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                  </Svg>

                  {/* level 4 */}
                  <View style={{ flexDirection: 'row' }}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 15,
                      }}
                    >
                      <Svg height="20" width="20">
                        <Circle cx="10" cy="10" r="10" fill="#CCCCCC" />
                      </Svg>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Svg height="20" width="20">
                        <Circle cx="10" cy="10" r="10" fill="#CCCCCC" />
                      </Svg>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Svg height="20" width="20">
                    <Circle cx="10" cy="10" r="10" fill="#CCCCCC" />
                  </Svg>
                  <Svg height="40" width="48">
                    <Polyline
                      points="0,30 0,15 24,15 24,5 24,15 48,15 48,30"
                      fill="none"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                  </Svg>

                  {/* level 4 */}
                  <View style={{ flexDirection: 'row' }}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 15,
                      }}
                    >
                      <Svg height="20" width="20">
                        <Circle cx="10" cy="10" r="10" fill="#CCCCCC" />
                      </Svg>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Svg height="20" width="20">
                        <Circle cx="10" cy="10" r="10" fill="#CCCCCC" />
                      </Svg>
                    </View>
                  </View>
                </View>
              </View>
              {/* level 3 end*/}
            </View>
            {/* level 2 child 1 end*/}

            {/* level 2 child 2 */}
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {this.renderRightLevel1()}

              {/* level 3 child 2*/}
              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 30,
                  }}
                >
                  <Svg height="20" width="20">
                    <Circle cx="10" cy="10" r="10" fill="#CCCCCC" />
                  </Svg>
                  <Svg height="40" width="48">
                    <Polyline
                      points="0,30 0,15 24,15 24,5 24,15 48,15 48,30"
                      fill="none"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                  </Svg>
                  {/* level 4 */}
                  <View style={{ flexDirection: 'row' }}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 15,
                      }}
                    >
                      <Svg height="20" width="20">
                        <Circle cx="10" cy="10" r="10" fill="#CCCCCC" />
                      </Svg>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Svg height="20" width="20">
                        <Circle cx="10" cy="10" r="10" fill="#CCCCCC" />
                      </Svg>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Svg height="20" width="20">
                    <Circle cx="10" cy="10" r="10" fill="#CCCCCC" />
                  </Svg>
                  <Svg height="40" width="48">
                    <Polyline
                      points="0,30 0,15 24,15 24,5 24,15 48,15 48,30"
                      fill="none"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                  </Svg>

                  {/* level 4 */}
                  <View style={{ flexDirection: 'row' }}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 15,
                      }}
                    >
                      <Svg height="20" width="20">
                        <Circle cx="10" cy="10" r="10" fill="#CCCCCC" />
                      </Svg>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Svg height="20" width="20">
                        <Circle cx="10" cy="10" r="10" fill="#CCCCCC" />
                      </Svg>
                    </View>
                  </View>
                </View>
              </View>
              {/* level 3 child 2 end*/}
            </View>
            {/* level 2 child 2 end*/}
          </View>
        </View>
      </View>
    )
  }
}
// 0,0 300,0 300,20
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
