import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { google, facebook } from '../../../assets/icons/SocialIcon';

const SocialButton = ({
  onPress, 
  disabled = false,
  text = 'Continue With Google',
  iconSource = google,
  iconSize = 30,
  backgroundColor = '#F2F9FF',
  textColor = '#272727',
  borderColor = '#F2F9FF'
}) => {
  return (
    <TouchableOpacity 
      style={[
        styles.button(backgroundColor, borderColor), 
        disabled && styles.buttonDisabled
      ]} 
      activeOpacity={0.7} 
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.buttonContent}>
        <View style={styles.iconArea}>
          <Image 
            source={iconSource} 
            style={[styles.icon, {width: iconSize, height: iconSize}]}
            resizeMode="contain"
          />
        </View>
        
        <View style={styles.textArea}>
          <Text style={[styles.label(textColor), disabled && styles.labelDisabled]}>
            {text}
          </Text>
        </View>
        
        <View style={styles.spacerArea} />
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  button: (backgroundColor, borderColor) => ({
    backgroundColor: backgroundColor,
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: borderColor,
  }),
  buttonDisabled: {
    backgroundColor: '#F9FAFB',
    borderColor: '#F3F4F6',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconArea: {
    width: 24, 
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textArea: {
    flex: 1,
    alignItems: 'center',
  },
  spacerArea: {
    width: 24,
  },
  label: (textColor) => ({
    fontFamily: 'CircularStd-Medium',
    fontSize: 16,
    color: textColor,
    fontWeight: '500',
  }),
  labelDisabled: {
    color: '#9CA3AF',
  },
});