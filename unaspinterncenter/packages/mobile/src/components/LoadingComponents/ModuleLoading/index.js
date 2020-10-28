/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

const ModuleLoading = ({children, loading}) => {
  const { metrics } = useContext(ThemeContext)

  return (
    <ShimmerPlaceHolder
      visible={!loading}
      style={{
        minHeight: 300,
        width: metrics.screenWidth - 32,
        marginTop: 10,
        borderRadius: 10
      }}
    >
      {children}
    </ShimmerPlaceHolder>
  )
}

export default ModuleLoading
