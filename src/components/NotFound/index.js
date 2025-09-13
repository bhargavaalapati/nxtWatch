import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  NotFoundContainer,
  MainContainer,
  NotFoundContentContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundNote,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <NotFoundContainer isDarkTheme={isDarkTheme}>
          <Header />
          <MainContainer>
            <Sidebar />
            <NotFoundContentContainer>
              <NotFoundImage src={notFoundImageUrl} alt="not found" />
              <NotFoundHeading isDarkTheme={isDarkTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundNote>
                We are sorry, the page you requested could not be found.
              </NotFoundNote>
            </NotFoundContentContainer>
          </MainContainer>
        </NotFoundContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
