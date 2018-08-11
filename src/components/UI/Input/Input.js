/*
* Input Field Component
* customize semantic ui input field
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'

class Input extends Component{
  state = {
    focus: false,
    value: null,
    touched: false,
  }

  /*
  * _onTyping, event trigger
  * void function
  * e: _Event_
  */
  _onTyping = e => {
    const { validate } = this.props
    if(this.state.touched) validate(e)
    const value = e.target.value
    this._onFocus()
    this.setState({ value })
  }

  /*
  * _onFocus, event trigger
  * void function
  */
  _onFocus = () => {
    this.setState({
      focus: true,
      touched: true,
    })
  }

  /*
  * _onBlure, event trigger
  * void function
  */
  _onBlure = e => {
    if(this.state.value) return false
    this.setState({ focus: false })
  }


  render(){
    const {
      placeholder,
      error,
      validate,
      ...props,
    } = this.props

    const { focus } = this.state
    return (
      <Form.Field className={`input-field ${error && 'error'}`}>
        <span className={`placeholder ${focus && 'active'}`}>
          {placeholder}
        </span>
        {error &&
          <span className="error-msg">
            {error}
          </span>
        }
        <input
          {...props}
          onBlur={this._onBlure}
          onChange={this._onTyping}
          onFocus={this._onFocus}
        />
      </Form.Field>
    )
  }
}

// prop types
Input.propTypes = {
  placeholder: PropTypes.string,
  error: PropTypes.string,
}

// default props
Input.defaultProps = {
  error: null,
}
export default Input
