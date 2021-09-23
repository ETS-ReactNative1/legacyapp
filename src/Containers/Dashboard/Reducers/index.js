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
  PROFILE_SUCCESS,
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
  GET_WEEKLY_ACTIONS_REQUEST,
  GET_WEEKLY_ACTIONS_SUCCESS,
  GET_WEEKLY_ACTIONS_FAILED,
  API_FAILURE,
} from '../Actions/types'

let initialState = {
  businessGoals: [],
  nextStepGoals: [],
  profileInfo: {},
  achievements: [],
  bonus: [],
  additionalLevels: [],
  teamMembers: [],
  eliteParticipants: [],
  sponsoredList: [],
  membersCommitment: { user: {}, member_commitment: {} },
  weeklyActions: [],
}

const dashboardData = (state = initialState, action) => {
  switch (action.type) {
    case SC_GOAL_SUCCESS:
      return { ...state, businessGoals: action.payload }
    case GET_SC_GOAL_SUCCESS:
      return { ...state, businessGoals: action.payload }
    case SC_NEXT_STEP_SUCCESS:
      return { ...state, nextStepGoals: action.payload }
    case GET_NEXT_STEP_GOAL_SUCCESS:
      return { ...state, nextStepGoals: action.payload }
    case PROFILE_SUCCESS:
      return { ...state, profileInfo: action.user }
    case GET_ACHIEVEMENT_LEVELS_SUCCESS:
      return { ...state, achievements: action.payload }
    case GET_BONUS_SUCCESS:
      return { ...state, bonus: action.payload }
    case GET_ADDITIONAL_LEVELS_SUCCESS:
      return { ...state, additionalLevels: action.payload }
    case GET_TEAM_MEMBERS_SUCCESS:
      return { ...state, teamMembers: action.payload }
    case GET_EHC_MEMBER_SUCCESS:
      return { ...state, eliteParticipants: action.payload }
    case GET_MEMBER_COMMITMENT_SUCCESS:
      return { ...state, membersCommitment: action.payload }
    case GET_SPONSOR_LIST_SUCCESS:
      return { ...state, sponsoredList: action.payload }
    case GET_WEEKLY_ACTIONS_SUCCESS:
      return { ...state, weeklyActions: action.payload }
    default:
  }
  return state
}

export default dashboardData
