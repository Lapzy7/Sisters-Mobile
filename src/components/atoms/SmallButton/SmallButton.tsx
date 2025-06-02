import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const SmallButton = ({
  label,
  color = '#02CF8E',
  textColor = '#020202',
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.button(color)}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default SmallButton;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    borderRadius: 100,
    paddingVertical: 12,
    alignSelf: 'center',
    width: 160,
  }),
  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'CircularStd-Bold',
    fontSize: 16,
    padding: 5,
    color: textColor,
  }),
});
