import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'
import loginUserService from '@/Services/User/Login'

export default {
  initialState: buildAsyncState('login'),
  action: buildAsyncActions('user/login', loginUserService),
  reducers: buildAsyncReducers({
    errorKey: 'login.error', // Optionally, if you scoped variables, you can use a key with dot notation
    loadingKey: 'login.loading',
  }),
}
