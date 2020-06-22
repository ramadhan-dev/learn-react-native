import React from 'react';
import { View } from 'react-native';
import MenuIcon from '../../layouts/menuIcon';

const Navigation = (props) => {
  return (
    <View style={{
      height: 54,
      backgroundColor: "#f1f1f1",
      flexDirection: "row"
    }}>
      <MenuIcon val={1} />
      <MenuIcon val={2} />
      <MenuIcon val={3} />
      <MenuIcon val={4} />
      <MenuIcon val={5} />
    </View>
  )
}

export default Navigation;
