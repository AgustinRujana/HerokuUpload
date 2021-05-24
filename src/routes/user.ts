const userService = require('../services/user.service')


module.exports = (app) => {
    app.route('/')
        .get(userService.checkIn)
    app.route('/login')
        .get(userService.goToLogin)
        .post(userService.logInComplete)
    app.route('/logout')
        .get(userService.logOut)
    app.route('/faillogin')
        .get(userService.failLogin)
    app.route('/register')
        .get(userService.registerForm)
        .post(userService.registerUser)
    app.route('/failregister')
        .get(userService.failRegister)
    app.route('/auth/facebook')
        .get(userService.facebookLogIn)
    app.route('/auth/facebook/callback')
        .get(userService.facebookCallback)
}