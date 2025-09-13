import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoListItem = styled.li`
  list-style-type: none;
  width: 48%;
  margin-bottom: 40px;
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
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin: 0 0 8px 0;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  line-height: 1.5;
`
export const ViewsText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0;
  color: #64748b;
`
