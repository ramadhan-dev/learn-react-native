import React from 'react'
import {View, TextInput, Text} from 'react-native'
import {Style} from './../style'
const InputSearch = props => {
  const {search, inputSearch, searchIcon} = Style
  return (
    <View style={search}>
      <TextInput placeholder="lorem ipsum dolor" style={inputSearch} />
      <Text style={searchIcon}>S</Text>
    </View>
  )
}

export default InputSearch