/*
* Login form
*/
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react'

// Components
import Input from '../UI/Input'

const LoginForm = ({
 hanldeSubmit,
 validate,
 errors,
}) => (
  <Form onSubmit={hanldeSubmit} id="login_form">
    <div className="user-credential">
      <Input
        placeholder="Username"
        error={errors.username}
        validate={validate}
        name="username"
        type="text"
      />
      <Input
        placeholder="Password"
        error={errors.password}
        validate={validate}
        name="password"
        type="password"
      />
    </div>

    <Grid  divided='vertically'>
      <Grid.Row columns={2}>
        <Grid.Column computer={9} tablet={9} mobile={16}>
          <Form.Field>
            <Checkbox
              label='Keep me logged in'
              className="custom-checkbox"
            />
          </Form.Field>
        </Grid.Column>
        <Grid.Column computer={7} tablet={7} mobile={16}>
          <div className="right-text-computer">
            <a href="/#" className="link">
              Forgot Password?
            </a>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Button
      content='sign in'
      type="submit"
      className="login-btn"
    />
  </Form>
)

// props types
LoginForm.propTypes ={
  hanldeSubmit: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  errors: PropTypes.object,
}

// default props
LoginForm.defaultProps = {
  errors: {}
}
export default LoginForm
