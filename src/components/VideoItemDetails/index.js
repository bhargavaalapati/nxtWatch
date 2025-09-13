import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'

import {
  VideoDetailContainer,
  MainContainer,
  ContentContainer,
  PlayerContainer,
  VideoTitle,
  StatsAndActionsContainer,
  ViewsAndDate,
  ActionsContainer,
  ActionButton,
  HorizontalRule,
  ChannelContainer,
  ChannelLogo,
  ChannelInfo,
  ChannelName,
  SubscribersCount,
  VideoDescription,
  LoaderContainer,
} from './styledComponents'

// Note: Icons are no longer imported as they are removed from buttons

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  formatData = data => ({
    id: data.id,
    title: data.title,
    videoUrl: data.video_url,
    thumbnailUrl: data.thumbnail_url,
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
      subscriberCount: data.channel.subscriber_count,
    },
    viewCount: data.view_count,
    publishedAt: data.published_at,
    description: data.description,
  })

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = this.formatData(fetchedData.video_details)
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  // --- START OF MISTAKE-1 FIX ---
  // Implemented logic that correctly ensures mutual exclusivity as per the mentor's description.
  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }
  // --- END OF MISTAKE-1 FIX ---

  onRetry = () => {
    this.getVideoDetails()
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderSuccessView = () => {
    const {videoDetails, isLiked, isDisliked} = this.state
    const {id, title, videoUrl, channel, viewCount, publishedAt, description} =
      videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    const publishedDate = formatDistanceToNow(new Date(publishedAt))

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, addVideo, savedVideos} = value
          const isSaved = savedVideos.some(each => each.id === id)

          const onClickSave = () => {
            addVideo(videoDetails)
          }

          return (
            <>
              <PlayerContainer>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                  style={{position: 'absolute', top: 0, left: 0}}
                />
              </PlayerContainer>
              <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
              <StatsAndActionsContainer>
                <ViewsAndDate>
                  {viewCount} views &bull; {publishedDate} ago
                </ViewsAndDate>
                <ActionsContainer>
                  {/* --- START OF MISTAKE-3 FIX --- */}
                  <ActionButton
                    type="button"
                    isActive={isLiked}
                    onClick={this.onClickLike}
                  >
                    Like
                  </ActionButton>
                  <ActionButton
                    type="button"
                    isActive={isDisliked}
                    onClick={this.onClickDislike}
                  >
                    Dislike
                  </ActionButton>
                  <ActionButton
                    type="button"
                    isActive={isSaved}
                    onClick={onClickSave}
                  >
                    {isSaved ? 'Saved' : 'Save'}
                  </ActionButton>
                  {/* --- END OF MISTAKE-3 FIX --- */}
                </ActionsContainer>
              </StatsAndActionsContainer>
              <HorizontalRule />
              <ChannelContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <ChannelInfo>
                  <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
                  <SubscribersCount>
                    {subscriberCount} subscribers
                  </SubscribersCount>
                </ChannelInfo>
              </ChannelContainer>
              <VideoDescription isDarkTheme={isDarkTheme}>
                {description}
              </VideoDescription>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderVideoDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <VideoDetailContainer
              data-testid="videoItemDetails"
              isDarkTheme={isDarkTheme}
            >
              <Header />
              <MainContainer>
                <Sidebar />
                <ContentContainer>{this.renderVideoDetails()}</ContentContainer>
              </MainContainer>
            </VideoDetailContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
