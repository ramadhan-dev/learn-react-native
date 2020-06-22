/**
 * Sample React Native Main
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { View, Text } from 'react-native'

// import Navigation from './containers/navigation'
// import Home from './containers/home'


import { Style } from "./style"
import TwetterHeader from './containers/TwetterHeader';

const Main: () => React$Node = () => {
  const { container } = Style;
  return (
    <View style={{ flex: 1 }}>
      {/* <Home/>
      <Navigation /> */}

      <TwetterHeader />
    </View>
  );
};

export default Main;
