import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
`
export const MainContainer = styled.div`
  display: flex;
`
export const NotFoundContentContainer = styled.div`
  flex-grow: 1;
  height: 92vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const NotFoundImage = styled.img`
  width: 80%;
  max-width: 400px;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  margin-top: 20px;
`
export const NotFoundNote = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #64748b;
`
