import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { back } from '../../../assets/Icons'

const BackButton = ({ onPress, style }) => {
  return (
    <TouchableOpacity 
      style={[styles.container, style]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image 
        source={back} 
        style={styles.icon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    marginLeft: 27,
    marginTop: 45,
    width: 44,
    height: 44,
  },
  icon: {
    width: 40,
    height: 40,
  }
})