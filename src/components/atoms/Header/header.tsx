import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginLeft: 27,
    marginTop: 100,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: 'CircularStd-Bold',
    color: '#272727',
    fontSize: 32,
  },
});
