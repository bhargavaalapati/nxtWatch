import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoListItem,
  VideoLink,
  ThumbnailImage,
  VideoDetailsContainer,
  ChannelLogo,
  ContentSection,
  Title,
  ChannelName,
  ViewsAndDate,
} from './styledComponents'

const VideoCard = props => {
  const {videoData} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoData
  const {name, profileImageUrl} = channel

  const publishedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <VideoListItem>
            <VideoLink to={`/videos/${id}`}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <Title isDarkTheme={isDarkTheme}>{title}</Title>
                  <ChannelName>{name}</ChannelName>
                  <ViewsAndDate>
                    {viewCount} views &bull; {publishedDate} ago
                  </ViewsAndDate>
                </ContentSection>
              </VideoDetailsContainer>
            </VideoLink>
          </VideoListItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoCard
