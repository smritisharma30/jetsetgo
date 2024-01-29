import { View, Text } from 'react-native'
import React from 'react'
import { PageNotFoundStyles } from './PageNotFoundStyles'

const PageNotFound = () => {
  return (
    <View>
      <Text style={PageNotFoundStyles.textStyle}>Page Not Found</Text>
    </View>
  )
}

export default PageNotFound