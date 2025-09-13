import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 8vh;
  position: sticky;
  top: 0;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  z-index: 10;
`

export const HeaderLogoLink = styled(Link)`
  text-decoration: none;
`

export const HeaderLogo = styled.img`
  width: 120px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 15px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`

export const LogoutButton = styled.button`
  background: none;
  border: 1px solid ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  padding: 30px;
  border-radius: 8px;
  text-align: center;
`

export const ModalText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#00306e')};
  margin-bottom: 30px;
`
export const ButtonsContainer = styled.div`
  display: flex;
`

export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid #94a3b8;
  color: #94a3b8;
  padding: 10px 15px;
  border-radius: 4px;
  margin-right: 20px;
  cursor: pointer;
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border: none;
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
`
