import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const VideoListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 50%;
    max-width: 300px;
  }
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media screen and (min-width: 576px) {
    padding-left: 20px;
  }
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin: 0;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin: 8px 0;
  color: #64748b;
`

export const ViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0;
  color: #64748b;
`
