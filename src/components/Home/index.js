import {useState, useEffect, useContext, useCallback} from 'react'
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

// ✅ CHANGED: Class -> Functional Component
const Home = () => {
  // ✅ State: Using useState instead of this.state
  const [videosList, setVideosList] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [searchInput, setSearchInput] = useState('')
  const [showBanner, setShowBanner] = useState(true)

  // ✅ Context: Using useContext instead of <Consumer> (Much cleaner!)
  const {isDarkTheme} = useContext(NxtWatchContext)

  // API Call Function
  const getVideos = useCallback(
    async (currentSearch = searchInput) => {
      setApiStatus(apiStatusConstants.inProgress)
      const jwtToken = Cookies.get('jwt_token')
      const apiUrl = `https://apis.ccbp.in/videos/all?search=${currentSearch}`
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
        setVideosList(updatedData)
        setApiStatus(apiStatusConstants.success)
      } else {
        setApiStatus(apiStatusConstants.failure)
      }
    },
    [searchInput],
  ) // Re-create function if searchInput changes

  // ✅ THE DEBOUNCE LOGIC (The Interview Winner)
  useEffect(() => {
    // 1. Set the timer to call API after 500ms
    const timerId = setTimeout(() => {
      // Only search if the input has changed or on initial load
      getVideos(searchInput)
    }, 500)

    // 2. Cleanup: Cancel timer if user types again
    return () => {
      clearTimeout(timerId)
    }
  }, [searchInput, getVideos]) // Run this effect whenever `searchInput` changes

  // Render Views
  const renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  const renderFailureView = () => <FailureView onRetry={() => getVideos()} />

  // ✅ FIXED: Removed { return ... } for implicit return
  const renderSuccessView = () =>
    videosList.length > 0 ? (
      <VideosList>
        {videosList.map(video => (
          <VideoCard key={video.id} videoData={video} />
        ))}
      </VideosList>
    ) : (
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
        <button type="button" onClick={() => getVideos()}>
          Retry
        </button>
      </NoVideosViewContainer>
    )

  const renderVideos = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      case apiStatusConstants.success:
        return renderSuccessView()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }

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
                onClick={() => setShowBanner(false)}
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
              onChange={e => setSearchInput(e.target.value)}
              isDarkTheme={isDarkTheme}
            />
            {/* Note: Button is optional now since we have auto-search, but kept for UI consistency */}
            <SearchButton
              type="button"
              data-testid="searchButton"
              onClick={() => getVideos()}
            >
              <BiSearch />
            </SearchButton>
          </SearchContainer>
          {renderVideos()}
        </HomeContentContainer>
      </MainContainer>
    </HomeContainer>
  )
}

export default Home
