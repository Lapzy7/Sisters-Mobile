import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Message = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  title: {
    fontFamily: 'CircularStd-Medium',
    color: '#272727',
    fontSize: 24,
    textAlign: 'center',
  },
});
