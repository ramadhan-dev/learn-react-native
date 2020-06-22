import React from 'react';
import { Text, View} from 'react-native';

const MenuIcon = (props) => {
  console.log(props);
  
  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }}>
      <View style={{ backgroundColor: 'grey', width: 26, height: 26 }}>
      </View>
      <Text style={{ fontSize: 15, marginTop: props.marginTop }}>Menu {props.val}</Text>
    </View>
  )
}

export default MenuIcon;
