// TODO add redux and use it for this
const mockAuthState = {
  isAuthenticated: false,
  authenticate(callback?: () => void): void {
     this.isAuthenticated = true
     if (callback) {
       setTimeout(callback, 300)
     }
  },
  logout(callback?: () => void): void {
     this.isAuthenticated = false
     if (callback) {
       setTimeout(callback, 300)
     }
  },
}

export default mockAuthState
