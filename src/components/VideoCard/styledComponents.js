import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoListItem = styled.li`
  list-style-type: none;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (min-width: 576px) {
    width: 48%;
  }
  @media screen and (min-width: 768px) {
    width: 32%;
  }
`
export const VideoLink = styled(Link)`
  text-decoration: none;
`
export const ThumbnailImage = styled.img`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  padding: 10px;
`
export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  line-height: 1.5;
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
