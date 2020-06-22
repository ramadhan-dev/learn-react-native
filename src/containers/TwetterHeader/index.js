import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Animated,
} from 'react-native';

import {
  PROFILE_IMAGE_MAX_HEIGHT,
  scrollY,
  headerHeight,
  profileImageHeight,
  profileImageMarginTop,
  headerZindex,
  headerTitleBottom,
} from './interpolate';

const TwetterHeader = () => {
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          backgroundColor: 'lightskyblue',
          height: headerHeight,
          zIndex: headerZindex,
          elevation: headerZindex,
          alignItems: 'center',
        }}>
        <Animated.View
          style={{position: 'absolute', bottom: headerTitleBottom}}>
          <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
            Varun Nath
          </Text>
        </Animated.View>
      </Animated.View>

      <ScrollView
        style={{flex: 1}}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: scrollY,
              },
            },
          },
        ])}>
        <Animated.View
          style={{
            height: profileImageHeight,
            width: profileImageHeight,
            borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
            borderColor: '#fff',
            borderWidth: 3,
            overflow: 'hidden',
            marginTop: profileImageMarginTop,
          }}>
          <Image
            style={{
              flex: 1,
              height: null,
              width: null,
            }}
            source={require('./../../assets/puput.jpg')}
          />
        </Animated.View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 26, paddingLeft: 5}}>
            Fikri Ramadhan
          </Text>
        </View>
        <View>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            aspernatur rem ea esse, deserunt consequatur fugiat tenetur quidem
            consectetur blanditiis quasi, nisi recusandae id odio facilis non
            eligendi molestiae numquam? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quae aspernatur rem ea esse, deserunt consequatur
            fugiat tenetur quidem consectetur blanditiis quasi, nisi recusandae
            id odio facilis non eligendi molestiae numquam? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Quae aspernatur rem ea esse,
            deserunt consequatur fugiat tenetur quidem consectetur blanditiis
            quasi, nisi recusandae id odio facilis non eligendi molestiae
            numquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quae aspernatur rem ea esse, deserunt consequatur fugiat tenetur
            quidem consectetur blanditiis quasi, nisi recusandae id odio facilis
            non eligendi molestiae numquam? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quae aspernatur rem ea esse, deserunt
            consequatur fugiat tenetur quidem consectetur blanditiis quasi, nisi
            recusandae id odio facilis non eligendi molestiae numquam? Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Quae aspernatur
            rem ea esse, deserunt consequatur fugiat tenetur quidem consectetur
            blanditiis quasi, nisi recusandae id odio facilis non eligendi
            molestiae numquam? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quae aspernatur rem ea esse, deserunt consequatur
            fugiat tenetur quidem consectetur blanditiis quasi, nisi recusandae
            id odio facilis non eligendi molestiae numquam? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Quae aspernatur rem ea esse,
            deserunt consequatur fugiat tenetur quidem consectetur blanditiis
            quasi, nisi recusandae id odio facilis non eligendi molestiae
            numquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quae aspernatur rem ea esse, deserunt consequatur fugiat tenetur
            quidem consectetur blanditiis quasi, nisi recusandae id odio facilis
            non eligendi molestiae numquam? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quae aspernatur rem ea esse, deserunt
            consequatur fugiat tenetur quidem consectetur blanditiis quasi, nisi
            recusandae id odio facilis non eligendi molestiae numquam? Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Quae aspernatur
            rem ea esse, deserunt consequatur fugiat tenetur quidem consectetur
            blanditiis quasi, nisi recusandae id odio facilis non eligendi
            molestiae numquam? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quae aspernatur rem ea esse, deserunt consequatur
            fugiat tenetur quidem consectetur blanditiis quasi, nisi recusandae
            id odio facilis non eligendi molestiae numquam? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Quae aspernatur rem ea esse,
            deserunt consequatur fugiat tenetur quidem consectetur blanditiis
            quasi, nisi recusandae id odio facilis non eligendi molestiae
            numquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quae aspernatur rem ea esse, deserunt consequatur fugiat tenetur
            quidem consectetur blanditiis quasi, nisi recusandae id odio facilis
            non eligendi molestiae numquam? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quae aspernatur rem ea esse, deserunt
            consequatur fugiat tenetur quidem consectetur blanditiis quasi, nisi
            recusandae id odio facilis non eligendi molestiae numquam? Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Quae aspernatur
            rem ea esse, deserunt consequatur fugiat tenetur quidem consectetur
            blanditiis quasi, nisi recusandae id odio facilis non eligendi
            molestiae numquam? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quae aspernatur rem ea esse, deserunt consequatur
            fugiat tenetur quidem consectetur blanditiis quasi, nisi recusandae
            id odio facilis non eligendi molestiae numquam?
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default TwetterHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
