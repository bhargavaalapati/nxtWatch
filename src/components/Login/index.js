import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  LoginAppContainer,
  LoginFormContainer,
  LoginWebsiteLogo,
  InputContainer,
  InputLabel,
  UserInput,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showPassword, showSubmitError, errorMsg} =
      this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const logoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginAppContainer isDarkTheme={isDarkTheme}>
              <LoginFormContainer
                onSubmit={this.submitForm}
                isDarkTheme={isDarkTheme}
              >
                <LoginWebsiteLogo src={logoUrl} alt="website logo" />
                <InputContainer>
                  <InputLabel htmlFor="username" isDarkTheme={isDarkTheme}>
                    USERNAME
                  </InputLabel>
                  <UserInput
                    type="text"
                    id="username"
                    value={username}
                    onChange={this.onChangeUsername}
                    placeholder="Username"
                    isDarkTheme={isDarkTheme}
                  />
                </InputContainer>
                <InputContainer>
                  <InputLabel htmlFor="password" isDarkTheme={isDarkTheme}>
                    PASSWORD
                  </InputLabel>
                  <UserInput
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={this.onChangePassword}
                    placeholder="Password"
                    isDarkTheme={isDarkTheme}
                  />
                </InputContainer>
                <CheckboxContainer>
                  <CheckboxInput
                    type="checkbox"
                    id="showPassword"
                    onChange={this.onToggleShowPassword}
                  />
                  <CheckboxLabel
                    htmlFor="showPassword"
                    isDarkTheme={isDarkTheme}
                  >
                    Show Password
                  </CheckboxLabel>
                </CheckboxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
              </LoginFormContainer>
            </LoginAppContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
