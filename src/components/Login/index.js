/*
* Main container for Login components
*/
import Login from './Login'
import HOCLogin from './HOCLogin'

// login stylesheet
import './login.css'

export default HOCLogin(Login)
