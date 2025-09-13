import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 48px;
`
export const FailureImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
`
export const FailureNote = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #64748b;
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  border: none;
  border-radius: 4px;
  padding: 10px 25px;
  cursor: pointer;
`
