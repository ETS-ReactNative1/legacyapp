/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import {
  SC_GOAL_REQUEST,
  SC_GOAL_SUCCESS,
  SC_GOAL_FAILED,
  GET_SC_GOAL_REQUEST,
  GET_SC_GOAL_SUCCESS,
  GET_SC_GOAL_FAILED,
  SC_NEXT_STEP_REQUEST,
  SC_NEXT_STEP_SUCCESS,
  SC_NEXT_STEP_FAILED,
  GET_NEXT_STEP_GOAL_REQUEST,
  GET_NEXT_STEP_GOAL_SUCCESS,
  GET_NEXT_STEP_GOAL_FAILED,
  GET_WEEKLY_ACTIONS_REQUEST,
  GET_WEEKLY_ACTIONS_SUCCESS,
  GET_WEEKLY_ACTIONS_FAILED,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILED,
  GET_ACHIEVEMENT_LEVELS_REQUEST,
  GET_ACHIEVEMENT_LEVELS_SUCCESS,
  GET_ACHIEVEMENT_LEVELS_FAILED,
  GET_BONUS_REQUEST,
  GET_BONUS_SUCCESS,
  GET_BONUS_FAILED,
  GET_ADDITIONAL_LEVELS_REQUEST,
  GET_ADDITIONAL_LEVELS_SUCCESS,
  GET_ADDITIONAL_LEVELS_FAILED,
  GET_TEAM_MEMBERS_REQUEST,
  GET_TEAM_MEMBERS_SUCCESS,
  GET_TEAM_MEMBERS_FAILED,
  GET_EHC_MEMBER_REQUEST,
  GET_EHC_MEMBER_SUCCESS,
  GET_EHC_MEMBER_FAILED,
  GET_MEMBER_COMMITMENT_REQUEST,
  GET_MEMBER_COMMITMENT_SUCCESS,
  GET_MEMBER_COMMITMENT_FAILED,
  GET_SPONSOR_LIST_REQUEST,
  GET_SPONSOR_LIST_SUCCESS,
  GET_SPONSOR_LIST_FAILED,
  API_FAILURE,
} from './types'
import { postCall, getCall, uploadFile } from '../Api'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const profileRequest = () => {
  return async dispatch => {
    dispatch({ type: PROFILE_REQUEST })
    try {
      let response = await getCall('api/user', {})
      let result = await response.json()
      console.log('profileRequest', result)
      if (response.status === 200) {
        if (result.data) {
          try {
            dispatch({ type: PROFILE_SUCCESS, user: result.data })
            await AsyncStorage.setItem(
              'profileInfo',
              JSON.stringify(result.data),
            )
          } catch (e) {
            // saving error
          }
        }
      } else {
        dispatch({ type: PROFILE_FAILED, message: result.message })
      }
    } catch (error) {
      console.log('Login API Error', error)
    }
  }
}

export const addBusinessGoal = params => {
  return async dispatch => {
    dispatch({ type: SC_GOAL_REQUEST })
    try {
      let response = await postCall(
        'api/success_compass/goals?include=purpose',
        params,
      )
      let result = await response.json()
      if (response.status === 200) {
        dispatch({ type: SC_GOAL_SUCCESS, payload: result.data })
      } else {
        dispatch({ type: SC_GOAL_FAILED, message: result.message })
      }
    } catch (error) {
      console.log('Login API Error', error)
      alert('Network Connection Failed')
    }
  }
}

export const getBusinessGoal = type => {
  return async dispatch => {
    dispatch({ type: GET_SC_GOAL_REQUEST })
    try {
      let response = await getCall(
        `api/success_compass/goals?include=purpose&type=${type}`,
        {},
      )
      let result = await response.json()
      if (response.status === 200) {
        dispatch({ type: GET_SC_GOAL_SUCCESS, payload: result.data })
      } else {
        dispatch({ type: GET_SC_GOAL_FAILED, message: result.message })
      }
    } catch (error) {
      console.log('Login API Error', error)
      alert('Network Connection Failed')
    }
  }
}

export const addNextStepGoal = params => {
  return async dispatch => {
    dispatch({ type: SC_NEXT_STEP_REQUEST })
    try {
      let response = await postCall(
        'api/success_compass/next_step_goals',
        params,
      )
      let result = await response.json()
      if (response.status === 200) {
        dispatch({ type: SC_NEXT_STEP_SUCCESS, payload: result.data })
      } else {
        dispatch({ type: SC_NEXT_STEP_FAILED, message: result.message })
      }
    } catch (error) {
      console.log('Login API Error', error)
      alert('Network Connection Failed')
    }
  }
}

export const getNextStepGoal = type => {
  return async dispatch => {
    dispatch({ type: GET_NEXT_STEP_GOAL_REQUEST })
    try {
      let response = await getCall(
        `api/success_compass/next_step_goals?type=${type}`,
        {},
      )
      let result = await response.json()
      if (response.status === 200) {
        dispatch({ type: GET_NEXT_STEP_GOAL_SUCCESS, payload: result.data })
      } else {
        dispatch({ type: GET_NEXT_STEP_GOAL_FAILED, message: result.message })
      }
    } catch (error) {
      console.log('Login API Error', error)
      alert('Network Connection Failed')
    }
  }
}

export const getWeeklyActions = type => {
  return async dispatch => {
    dispatch({ type: GET_WEEKLY_ACTIONS_REQUEST })
    try {
      let response = await getCall(
        `api/success_compass/weekly_actions?type=${type}`,
        {},
      )
      let result = await response.json()
      console.log('getWeeklyActions', result)
      if (response.status === 200) {
        dispatch({ type: GET_WEEKLY_ACTIONS_SUCCESS, payload: result.data })
      } else {
        dispatch({ type: GET_WEEKLY_ACTIONS_FAILED, message: result.message })
      }
    } catch (error) {
      console.log('Login API Error', error)
      alert('Network Connection Failed')
    }
  }
}

export const updatePersonalDetails = params => {
  return async dispatch => {
    dispatch({ type: PROFILE_REQUEST })
    try {
      let response = await postCall('api/user/updatePersonalDetails', params)
      let result = await response.json()
      console.log('UpdatePersonlDetails', result)
      if (response.status === 200) {
        if (result.data) {
          try {
            dispatch({ type: PROFILE_SUCCESS, user: result.data })
            await AsyncStorage.setItem(
              'profileInfo',
              JSON.stringify(result.data),
            )
          } catch (e) {
            // saving error
          }
        }
      } else {
        dispatch({ type: PROFILE_FAILED, message: result.message })
      }
    } catch (error) {
      console.log('Login API Error', error)
      alert('Network Connection Failed')
    }
  }
}

export const getAchievementLevels = type => {
  return async dispatch => {
    dispatch({ type: GET_ACHIEVEMENT_LEVELS_REQUEST })
    try {
      let response = await getCall('api/distributor/achievementLevels', {})
      let result = await response.json()
      if (response.status === 200) {
        dispatch({ type: GET_ACHIEVEMENT_LEVELS_SUCCESS, payload: result.data })
      } else {
        dispatch({
          type: GET_ACHIEVEMENT_LEVELS_FAILED,
          message: result.message,
        })
      }
    } catch (error) {
      console.log('Login API Error', error)
      alert('Network Connection Failed')
    }
  }
}

export const getBonusPath = type => {
  return async dispatch => {
    dispatch({ type: GET_BONUS_REQUEST })
    try {
      let response = await getCall('api/distributor/bonusPaths', {})
      let result = await response.json()
      if (response.status === 200) {
        dispatch({ type: GET_BONUS_SUCCESS, payload: result.data })
      } else {
        dispatch({ type: GET_BONUS_FAILED, message: result.message })
      }
    } catch (error) {
      console.log('Login API Error', error)
      alert('Network Connection Failed')
    }
  }
}

export const getAdditionalRewards = type => {
  return async dispatch => {
    dispatch({ type: GET_ADDITIONAL_LEVELS_REQUEST })
    try {
      let response = await getCall('api/distributor/advancedAchievements', {})
      let result = await response.json()
      if (response.status === 200) {
        dispatch({ type: GET_ADDITIONAL_LEVELS_SUCCESS, payload: result.data })
      } else {
        dispatch({
          type: GET_ADDITIONAL_LEVELS_FAILED,
          message: result.message,
        })
      }
    } catch (error) {
      console.log('Login API Error', error)
      alert('Network Connection Failed')
    }
  }
}

export const getTeamMembers = params => {
  return async dispatch => {
    dispatch({ type: GET_TEAM_MEMBERS_REQUEST })
    try {
      let response = await getCall('api/user/team_members', {})
      let result = await response.json()
      if (response.status === 200) {
        dispatch({ type: GET_TEAM_MEMBERS_SUCCESS, payload: result.data })
      } else {
        dispatch({ type: GET_TEAM_MEMBERS_FAILED, message: result.message })
      }
    } catch (error) {
      console.log('Login API Error', error)
      alert('Network Connection Failed')
    }
  }
}

export const getEliteHealthChallengeMembers = params => {
  return async dispatch => {
    dispatch({ type: GET_EHC_MEMBER_REQUEST })
    try {
      let response = await getCall('api/user/health_challenge_participants', {})
      let result = await response.json()
      console.log(result)
      if (response.status === 200) {
        dispatch({ type: GET_EHC_MEMBER_SUCCESS, payload: result.data })
      } else {
        dispatch({ type: GET_EHC_MEMBER_FAILED, message: result.message })
      }
    } catch (error) {
      console.log('Login API Error', error)
      alert('Network Connection Failed')
    }
  }
}

export const sendEmail = () => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      dispatch({ type: GET_EHC_MEMBER_REQUEST })
      try {
        let response = await postCall('api/distributor/send_email', {})
        let result = await response.json()
        if (response.status === 200) {
          resolve(result)
        } else {
          reject(result)
        }
      } catch (error) {
        console.log('Login API Error', error)
        alert('Network Connection Failed')
      }
    })
  }
}

export const notifySponsorForCertification = () => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      // dispatch({ type: GET_EHC_MEMBER_REQUEST });
      try {
        let response = await postCall(
          'api/user/notify_sponsor_for_certification',
          {},
        )
        let result = await response.json()
        console.log(result)
        if (response.status === 200) {
          resolve(result)
        } else {
          reject(result)
        }
      } catch (error) {
        console.log('Login API Error', error)
        alert('Network Connection Failed')
      }
    })
  }
}

export const getMemberCommitment = () => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      dispatch({ type: GET_MEMBER_COMMITMENT_REQUEST })
      try {
        let response = await getCall('api/user/member_commitment', {})
        let result = await response.json()
        console.log(result)
        if (response.status === 200) {
          dispatch({ type: GET_MEMBER_COMMITMENT_SUCCESS, payload: result })
        } else {
          dispatch({
            type: GET_MEMBER_COMMITMENT_FAILED,
            message: result.message,
          })
        }
      } catch (error) {
        console.log('Login API Error', error)
        alert('Network Connection Failed')
      }
    })
  }
}

export const getSponsoredList = () => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      dispatch({ type: GET_SPONSOR_LIST_REQUEST })
      try {
        let response = await getCall('api/user/sponsored_list', {})
        let result = await response.json()
        if (response.status === 200) {
          dispatch({
            type: GET_SPONSOR_LIST_SUCCESS,
            payload: result.sponsored_list,
          })
        } else {
          dispatch({ type: GET_SPONSOR_LIST_FAILED, message: result.message })
        }
      } catch (error) {
        console.log('Login API Error', error)
        alert('Network Connection Failed')
      }
    })
  }
}

export const getPendingMemberPlacement = type => {
  return async dispatch => {
    // dispatch({ type: GET_ADDITIONAL_LEVELS_REQUEST });
    try {
      let response = await getCall(
        'api/user/pending_placement_team_members',
        {},
      )
      let result = await response.json()
      console.log(result)
      // if (response.status === 200) {
      //   dispatch({ type: GET_ADDITIONAL_LEVELS_SUCCESS, payload: result.data });
      // } else {
      //   dispatch({ type: GET_ADDITIONAL_LEVELS_FAILED, message: result.message });
      // }
    } catch (error) {
      console.log('Login API Error', error)
      alert('Network Connection Failed')
    }
  }
}

export const sendInvite = params => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      // dispatch({ type: GET_EHC_MEMBER_REQUEST });
      try {
        let response = await postCall('api/distributor/send_invite', params)
        let result = await response.json()
        console.log(result)
        if (response.status === 200) {
          resolve(result)
        } else {
          reject(result)
        }
      } catch (error) {
        console.log('Login API Error', error)
        alert('Network Connection Failed')
      }
    })
  }
}

export const uploadFileInvite = params => {
  console.log(params)
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      // dispatch({ type: GET_EHC_MEMBER_REQUEST });
      try {
        let response = await uploadFile('api/distributor/file_upload', params)
        // console.log(response)
        let result = await response.json()
        // console.log(result)
        if (response.status === 200) {
          resolve(result)
        } else {
          reject(result)
        }
      } catch (error) {
        console.log('Login API Error', error)
        alert('Network Connection Failed')
      }
    })
  }
}

// export const getPendingTrainingMembers = (type) => {
//   return async (dispatch) => {
//     // dispatch({ type: GET_ADDITIONAL_LEVELS_REQUEST });
//     try {
//       let response = await getCall(`api/user/pending_training_team_members`, {});
//       let result = await response.json();
//       console.log(result);
//       // if (response.status === 200) {
//       //   dispatch({ type: GET_ADDITIONAL_LEVELS_SUCCESS, payload: result.data });
//       // } else {
//       //   dispatch({ type: GET_ADDITIONAL_LEVELS_FAILED, message: result.message });
//       // }
//     } catch(error) {
//       console.log('Login API Error', error);
//       alert('Network Connection Failed');
//     }
//   }
// }

// export const getPendingTrainingMembers = (type) => {
//   return async (dispatch) => {
//     // dispatch({ type: GET_ADDITIONAL_LEVELS_REQUEST });
//     try {
//       let response = await getCall(`api/user/pending_training_team_members`, {});
//       let result = await response.json();
//       console.log(result);
//       // if (response.status === 200) {
//       //   dispatch({ type: GET_ADDITIONAL_LEVELS_SUCCESS, payload: result.data });
//       // } else {
//       //   dispatch({ type: GET_ADDITIONAL_LEVELS_FAILED, message: result.message });
//       // }
//     } catch(error) {
//       console.log('Login API Error', error);
//       alert('Network Connection Failed');
//     }
//   }
// }
