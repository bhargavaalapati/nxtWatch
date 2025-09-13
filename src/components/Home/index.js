import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiSearch} from 'react-icons/bi'
import {GrClose} from 'react-icons/gr'

import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'
import VideoCard from '../VideoCard'

import {
  HomeContainer,
  MainContainer,
  HomeContentContainer,
  BannerContainer,
  BannerContent,
  BannerLogo,
  BannerText,
  GetItNowButton,
  BannerCloseButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideosList,
  NoVideosViewContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosNote,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    showBanner: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onCloseBanner = () => {
    this.setState({showBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getVideos()
  }

  onRetry = () => {
    this.getVideos()
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderSuccessView = () => {
    const {videosList} = this.state
    return videosList.length > 0 ? (
      <VideosList>
        {videosList.map(video => (
          <VideoCard key={video.id} videoData={video} />
        ))}
      </VideosList>
    ) : (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <NoVideosViewContainer>
              <NoVideosImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoVideosHeading isDarkTheme={isDarkTheme}>
                No Search results found
              </NoVideosHeading>
              <NoVideosNote>
                Try different key words or remove search filter
              </NoVideosNote>
              <button type="button" onClick={this.onRetry}>
                Retry
              </button>
            </NoVideosViewContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderVideos = () => {
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
    const {searchInput, showBanner} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <HomeContainer data-testid="home" isDarkTheme={isDarkTheme}>
              <Header />
              <MainContainer>
                <Sidebar />
                <HomeContentContainer>
                  {showBanner && (
                    <BannerContainer data-testid="banner">
                      <BannerContent>
                        <BannerLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerText>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerText>
                        <GetItNowButton>GET IT NOW</GetItNowButton>
                      </BannerContent>
                      <BannerCloseButton
                        data-testid="close"
                        onClick={this.onCloseBanner}
                      >
                        <GrClose />
                      </BannerCloseButton>
                    </BannerContainer>
                  )}
                  <SearchContainer>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      onChange={this.onChangeSearchInput}
                      isDarkTheme={isDarkTheme}
                    />
                    <SearchButton
                      type="button"
                      data-testid="searchButton"
                      onClick={this.onClickSearch}
                    >
                      <BiSearch />
                    </SearchButton>
                  </SearchContainer>
                  {this.renderVideos()}
                </HomeContentContainer>
              </MainContainer>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
