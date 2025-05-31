import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const TextAction = ({label, action, onPress}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{label}</Text>
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text2}>{action}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default TextAction

const styles = StyleSheet.create({
    
  container: {
    paddingLeft: 5,
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'CircularStd-Book',
    color: '#272727',
    fontSize: 12,
  },
  text2: {
    fontFamily: 'CircularStd-Bold',
    color: '#272727',
    fontSize: 12,
    paddingLeft: 3,
  },
})