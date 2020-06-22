import {
  StyleSheet,
} from 'react-native';

exports.Style = StyleSheet.create({
  search: {
    position: "relative",
    flex: 1,
    height: 35
  },
  searchIcon: {
    position: "absolute",
    top: 6,
    left: 10
  },
  inputSearch: {
    flex: 1,
    borderWidth: 1,
    borderColor: "grey",
    paddingLeft: 25,
    paddingRight: 15,
    marginRight: 18,
    borderRadius: 25
  },
  promo: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  }

})