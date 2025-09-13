import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoLink,
  VideoListItem,
  ThumbnailImage,
  ContentSection,
  Title,
  ChannelName,
  ViewsAndDate,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {videoData} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoData
  const {name} = channel

  const publishedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <VideoLink to={`/videos/${id}`}>
            <VideoListItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <ContentSection>
                <Title isDarkTheme={isDarkTheme}>{title}</Title>
                <ChannelName>{name}</ChannelName>
                <ViewsAndDate>
                  {viewCount} views &bull; {publishedDate} ago
                </ViewsAndDate>
              </ContentSection>
            </VideoListItem>
          </VideoLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideoCard
