import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideos: [],
  addVideo: () => {},
  removeVideo: () => {},
  activeTab: 'HOME',
  changeTab: () => {},
})

export default NxtWatchContext
