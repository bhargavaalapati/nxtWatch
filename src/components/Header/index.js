import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HeaderContainer,
  HeaderLogoLink,
  HeaderLogo,
  ActionsContainer,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  ModalContainer,
  ModalText,
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value

        const onChangeTheme = () => {
          toggleTheme()
        }

        const logoUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <HeaderContainer isDarkTheme={isDarkTheme}>
            <HeaderLogoLink to="/">
              <HeaderLogo src={logoUrl} alt="website logo" />
            </HeaderLogoLink>
            <ActionsContainer>
              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={onChangeTheme}
                isDarkTheme={isDarkTheme}
              >
                {isDarkTheme ? <FiSun size={25} /> : <FaMoon size={25} />}
              </ThemeButton>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <ModalContainer isDarkTheme={isDarkTheme}>
                    <ModalText isDarkTheme={isDarkTheme}>
                      Are you sure, you want to logout?
                    </ModalText>
                    <ButtonsContainer>
                      <CancelButton type="button" onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonsContainer>
                  </ModalContainer>
                )}
              </Popup>
            </ActionsContainer>
          </HeaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
