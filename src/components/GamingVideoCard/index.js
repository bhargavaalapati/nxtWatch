import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoListItem,
  VideoLink,
  ThumbnailImage,
  ContentSection,
  Title,
  ViewsText,
} from './styledComponents'

const GamingVideoCard = props => {
  const {videoData} = props
  const {id, title, thumbnailUrl, viewCount} = videoData

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <VideoListItem>
            <VideoLink to={`/videos/${id}`}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <ContentSection>
                <Title isDarkTheme={isDarkTheme}>{title}</Title>
                <ViewsText>{viewCount} Watching Worldwide</ViewsText>
              </ContentSection>
            </VideoLink>
          </VideoListItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideoCard
