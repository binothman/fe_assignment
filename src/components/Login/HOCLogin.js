/*
* Higher Order Component for login
* use this function as wrapper for Login Component
*/
import React, { Component } from 'react'

// external packages
import axios from 'axios'
import serialize from 'form-serialize'


const HOCLogin = WrappedComponent => {
  class Login extends Component{
    state = {
      errors: {},
      submitted: false,
      loading: false,
      logged: false,
    }

    /*
    * _validation,
    * @return errors: _Object_
    * values: _Object_, form values
    */
    _validation = values => {
      const errors = {}

      if(!values.username){
        errors.username = "Required field"
      }

      if(!values.password){
        errors.password = "Required field"
      }

      return errors
    }

    /*
    * handleSubmit
    * void function
    * e, _event_, login form event onSubmit
    */
    handleSubmit = e => {
      var values = this._getFormValues()
      const errors = this._validation(values)

      if(Object.keys(errors).length > 0){
        this.setState({ errors, submitted: true })
        return;
      }

      this._login(values)
    }

    /*
    * login
    * void function, set to the state
    * values: _Object_, form values
    */
    _login = values => {
      this.setState({
        loading: true,
      })
      axios({
        url: 'https://reqres.in/api/login',
        method: 'POST',
        data: values,
      })
      .then(() => this.setState({ logged: true }))
      .catch(err => this.setState({ errors: { error: err } }))
    }

    /*
    * _getFormValues
    * to catch form fields values and return data object
    * @return _Object_
    */
    _getFormValues = () => {
      const form = document.getElementById('login_form')
      var values = serialize(form, { hash: true });

      return values
    }

    /*
    * validate
    * e: _event_, form field event onChange
    */
    validate = e => {
      if(!this.state.submitted) return false
      var values = this._getFormValues()
      const errors = this._validation(values)
      this.setState({errors})
    }

    render(){
      return (
        <WrappedComponent
          hanldeSubmit={this.handleSubmit}
          validate={this.validate}
          errors={this.state.errors}
          loading={this.state.loading}
          logged={this.state.logged}
          {...this.props}
        />
      )
    }
  }
  return Login
}
export default HOCLogin
