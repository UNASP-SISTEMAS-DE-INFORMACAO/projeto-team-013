import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

const BaseComponentLoading = ({ children, loading }) => {
  const { metrics } = useContext(ThemeContext)

  return (
    <ShimmerPlaceHolder
      visible={!loading}
      style={{
        height: 87,
        width: metrics.screenWidth - 32,
        marginTop: 10,
        borderRadius: 6
      }}
    >
      {children}
    </ShimmerPlaceHolder>
  )
}

export default BaseComponentLoading
