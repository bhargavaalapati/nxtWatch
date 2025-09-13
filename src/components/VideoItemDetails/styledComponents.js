import styled from 'styled-components'

export const VideoDetailContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
`
export const MainContainer = styled.div`
  display: flex;
`
export const ContentContainer = styled.div`
  flex-grow: 1;
  height: 92vh;
  overflow-y: auto;
  padding: 20px;
`
export const PlayerContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  margin-bottom: 20px;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
`
export const StatsAndActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const ViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
`
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`

// --- START OF MISTAKE-2 FIX ---
export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 15px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;

  /* Apply dynamic color to the button and any potential children */
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
`
// --- END OF MISTAKE-2 FIX ---

// Note: ActionText component is removed as it's no longer used.

export const HorizontalRule = styled.hr`
  border: 1px solid #94a3b8;
  margin: 20px 0;
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 15px;
`
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
`
export const SubscribersCount = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin: 8px 0;
  color: #64748b;
`
export const VideoDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 1.7;
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#475569')};
  @media screen and (min-width: 768px) {
    padding-left: 65px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`
