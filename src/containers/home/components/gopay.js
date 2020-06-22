import React, { Fragment } from 'react'
import { View, Text } from 'react-native'
import { Style } from './../style'
import MenuIcon from '../../../layouts/menuIcon'

const Gopay = props => {
  const { promo } = Style
  return (
    <Fragment>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "navy",
        height: 35,
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20
      }}>
        <Text style={{ color: "white", fontSize: 18 }}>Gopay</Text>
        <Text style={{ color: "white", fontSize: 18 }}>Rp 50.000</Text>
      </View>
      <View style={{ 
        flexDirection: "row", 
        justifyContent: "space-between", 
        paddingTop: 20,
        paddingBottom: 14 
      }}>
        <MenuIcon val="1" marginTop="15"/>
        <MenuIcon val="1" marginTop="15"/>
        <MenuIcon val="1" marginTop="15"/>
        <MenuIcon val="1" marginTop="15"/>
      </View>
    </Fragment>
  )
}

export default Gopay