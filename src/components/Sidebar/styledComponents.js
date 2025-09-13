import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    height: 92vh;
    position: sticky;
    top: 8vh;
    background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  }
`

export const NavLinksList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`

export const NavLinkItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 20px;
  background-color: ${props => {
    if (props.isActive) {
      return props.isDarkTheme ? '#424242' : '#e2e8f0'
    }
    return 'transparent'
  }};
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 10px 0;
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#475569')};
`

export const NavLinkText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-left: 15px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`

export const ContactInfoContainer = styled.div`
  padding-left: 20px;
  padding-bottom: 20px;
`
export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
`

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SocialIcon = styled.img`
  width: 30px;
  margin-right: 15px;
`

export const ContactNote = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#475569')};
  max-width: 200px;
  line-height: 1.5;
`
