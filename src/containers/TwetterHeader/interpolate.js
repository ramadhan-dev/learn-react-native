import {Animated} from 'react-native';

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 70;
const PROFILE_IMAGE_MIN_HEIGHT = 40;

export const scrollY = new Animated.Value(0);
export const PROFILE_IMAGE_MAX_HEIGHT = 80;

export const headerHeight = scrollY.interpolate({
  inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
  outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
  extrapolate: 'clamp',
});

export const profileImageHeight = scrollY.interpolate({
  inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
  outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
  extrapolate: 'clamp',
});

export const profileImageMarginTop = scrollY.interpolate({
  inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
  outputRange: [
    HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
    HEADER_MAX_HEIGHT + 5,
  ],
  extrapolate: 'clamp',
});

export const headerZindex = scrollY.interpolate({
  inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 120],
  outputRange: [0, 0, 1],
  extrapolate: 'clamp',
});

export const headerTitleBottom = scrollY.interpolate({
  inputRange: [
    0,
    HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
    HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
    HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT + 26,
  ],
  outputRange: [-20, -20, -20, 20],
  extrapolate: 'clamp',
});
