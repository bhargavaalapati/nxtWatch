import {CgPlayListAdd} from 'react-icons/cg'

import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingVideoCard from '../TrendingVideoCard'

import {
  SavedVideosContainer,
  MainContainer,
  ContentContainer,
  BannerContainer,
  BannerIconContainer,
  BannerTitle,
  VideosList,
  NoSavedVideosViewContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosNote,
} from './styledComponents'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value

      return (
        <SavedVideosContainer
          data-testid="savedVideos"
          isDarkTheme={isDarkTheme}
        >
          <Header />
          <MainContainer>
            <Sidebar />
            <ContentContainer>
              {savedVideos.length === 0 ? (
                <NoSavedVideosViewContainer>
                  <NoSavedVideosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedVideosHeading isDarkTheme={isDarkTheme}>
                    No saved videos found
                  </NoSavedVideosHeading>
                  <NoSavedVideosNote>
                    You can save your videos while watching them
                  </NoSavedVideosNote>
                </NoSavedVideosViewContainer>
              ) : (
                <>
                  <BannerContainer
                    data-testid="banner"
                    isDarkTheme={isDarkTheme}
                  >
                    <BannerIconContainer isDarkTheme={isDarkTheme}>
                      <CgPlayListAdd size={40} color="#ff0b37" />
                    </BannerIconContainer>
                    <BannerTitle isDarkTheme={isDarkTheme}>
                      Saved Videos
                    </BannerTitle>
                  </BannerContainer>
                  <VideosList>
                    {savedVideos.map(video => (
                      <TrendingVideoCard key={video.id} videoData={video} />
                    ))}
                  </VideosList>
                </>
              )}
            </ContentContainer>
          </MainContainer>
        </SavedVideosContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
