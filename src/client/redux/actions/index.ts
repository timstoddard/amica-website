export enum AuthenticationActions {
  LOGIN = 'login',
  LOGOUT = 'logout',
}

export const login = () => ({
  type: AuthenticationActions.LOGIN,
})

export const logout = () => ({
  type: AuthenticationActions.LOGOUT,
})
