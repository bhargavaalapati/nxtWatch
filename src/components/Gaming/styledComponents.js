import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
`
export const MainContainer = styled.div`
  display: flex;
`
export const GamingContentContainer = styled.div`
  flex-grow: 1;
  height: 92vh;
  overflow-y: auto;
`
export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 40px;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ebebeb')};
`
export const BannerIconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#d7dfe9')};
`
export const BannerTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
`
export const VideosList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`
