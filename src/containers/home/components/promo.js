import React from 'react'
import {View, Text} from 'react-native'
import {Style} from './../style'

const Promo = props => {
  const {promo} = Style
  return (
    <View style={promo}>
      <Text>PRO</Text>
    </View>
  )
}

export default Promo