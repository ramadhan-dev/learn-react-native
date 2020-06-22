import React from 'react';
import {View} from 'react-native';

const Content = props => {
  return (
    <View
      style={{
        flexDirection: props.direction,
        backgroundColor: props.background,
        marginTop: props.marginTop | 10,
        borderRadius: props.radius | 0,
      }}>
      {props.children}
    </View>
  );
};

export default Content;
