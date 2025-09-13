import NxtWatchContext from '../../context/NxtWatchContext'
import {
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureNote,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureViewContainer>
            <FailureImage src={failureImageUrl} alt="failure view" />
            <FailureHeading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureNote>
              We are having some trouble to complete your request. Please try
              again.
            </FailureNote>
            <RetryButton type="button" onClick={onRetry}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
