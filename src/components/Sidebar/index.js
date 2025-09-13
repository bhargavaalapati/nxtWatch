import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SidebarContainer,
  NavLinksList,
  NavLinkItem,
  NavLink,
  NavLinkText,
  ContactInfoContainer,
  ContactHeading,
  SocialIconsContainer,
  SocialIcon,
  ContactNote,
} from './styledComponents'

const Sidebar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, changeTab} = value

      const iconColor = isDarkTheme ? '#909090' : '#606060'
      const activeIconColor = '#ff0b37'

      return (
        <SidebarContainer isDarkTheme={isDarkTheme}>
          <NavLinksList>
            <NavLinkItem
              key="HOME"
              isActive={activeTab === 'HOME'}
              isDarkTheme={isDarkTheme}
              onClick={() => changeTab('HOME')}
            >
              <NavLink to="/" isDarkTheme={isDarkTheme}>
                <AiFillHome
                  size={20}
                  color={activeTab === 'HOME' ? activeIconColor : iconColor}
                />
                <NavLinkText
                  isActive={activeTab === 'HOME'}
                  isDarkTheme={isDarkTheme}
                >
                  Home
                </NavLinkText>
              </NavLink>
            </NavLinkItem>

            <NavLinkItem
              key="TRENDING"
              isActive={activeTab === 'TRENDING'}
              isDarkTheme={isDarkTheme}
              onClick={() => changeTab('TRENDING')}
            >
              <NavLink to="/trending" isDarkTheme={isDarkTheme}>
                <HiFire
                  size={20}
                  color={activeTab === 'TRENDING' ? activeIconColor : iconColor}
                />
                <NavLinkText
                  isActive={activeTab === 'TRENDING'}
                  isDarkTheme={isDarkTheme}
                >
                  Trending
                </NavLinkText>
              </NavLink>
            </NavLinkItem>

            <NavLinkItem
              key="GAMING"
              isActive={activeTab === 'GAMING'}
              isDarkTheme={isDarkTheme}
              onClick={() => changeTab('GAMING')}
            >
              <NavLink to="/gaming" isDarkTheme={isDarkTheme}>
                <SiYoutubegaming
                  size={20}
                  color={activeTab === 'GAMING' ? activeIconColor : iconColor}
                />
                <NavLinkText
                  isActive={activeTab === 'GAMING'}
                  isDarkTheme={isDarkTheme}
                >
                  Gaming
                </NavLinkText>
              </NavLink>
            </NavLinkItem>

            <NavLinkItem
              key="SAVEDVIDEOS"
              isActive={activeTab === 'SAVEDVIDEOS'}
              isDarkTheme={isDarkTheme}
              onClick={() => changeTab('SAVEDVIDEOS')}
            >
              <NavLink to="/saved-videos" isDarkTheme={isDarkTheme}>
                <CgPlayListAdd
                  size={20}
                  color={
                    activeTab === 'SAVEDVIDEOS' ? activeIconColor : iconColor
                  }
                />
                <NavLinkText
                  isActive={activeTab === 'SAVEDVIDEOS'}
                  isDarkTheme={isDarkTheme}
                >
                  Saved videos
                </NavLinkText>
              </NavLink>
            </NavLinkItem>
          </NavLinksList>
          <ContactInfoContainer>
            <ContactHeading isDarkTheme={isDarkTheme}>
              CONTACT US
            </ContactHeading>
            <SocialIconsContainer>
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialIconsContainer>
            <ContactNote isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactNote>
          </ContactInfoContainer>
        </SidebarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Sidebar
