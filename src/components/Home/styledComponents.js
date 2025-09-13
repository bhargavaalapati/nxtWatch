import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
`
export const MainContainer = styled.div`
  display: flex;
`
export const HomeContentContainer = styled.div`
  flex-grow: 1;
  height: 92vh;
  overflow-y: auto;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  justify-content: space-between;
  padding: 30px;
`
export const BannerContent = styled.div``

export const BannerLogo = styled.img`
  width: 150px;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  max-width: 350px;
`
export const GetItNowButton = styled.button`
  background: none;
  border: 1px solid #1e293b;
  padding: 10px 15px;
  font-weight: bold;
`
export const BannerCloseButton = styled.button`
  background: none;
  border: none;
  align-self: flex-start;
  font-size: 20px;
  cursor: pointer;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  border: 1px solid #909090;
  border-radius: 4px;
  width: 90%;
  max-width: 400px;
`
export const SearchInput = styled.input`
  flex-grow: 1;
  height: 35px;
  border: none;
  padding: 5px 10px;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  outline: none;
`
export const SearchButton = styled.button`
  width: 60px;
  height: 35px;
  border: none;
  border-left: 1px solid #909090;
  background-color: #cccccc;
  cursor: pointer;
`
export const VideosList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const NoVideosViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 48px;
`
export const NoVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
`
export const NoVideosNote = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #64748b;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`
