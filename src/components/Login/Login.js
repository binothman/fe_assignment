/*
* Login Component Wrapper
*/
import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Container,
  Dimmer,
  Loader,
  Icon
} from 'semantic-ui-react'

// Components
import LoginForm from './LoginForm'

const Login = ({
  hanldeSubmit,
  validate,
  loading,
  logged,
  errors,
}) => (
  <Container>
    <Grid>
      <Grid.Row columns={1}>
        <div className="container-login">
          {!logged ?
            <div>
              <Dimmer active={loading} inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
              <div className="login-head">
                <h1>sign in now</h1>
                <span>Unlock awsome features!</span>
              </div>
              <LoginForm
                hanldeSubmit={hanldeSubmit}
                validate={validate}
                errors={errors}
              />
            </div>
            :
            <div className="welcome-msg">
              <Icon size='massive' name='check' />
              <h3>Login Successful, Welcome again</h3>
            </div>
          }
        </div>
      </Grid.Row>
    </Grid>
  </Container>
)

// props types
Login.propTypes = {
  hanldeSubmit: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  logged: PropTypes.bool,
  errors: PropTypes.object,
}

// default props
Login.defaultProps = {
  loading: false,
  logged: false,
  errors: {}
}
export default Login
