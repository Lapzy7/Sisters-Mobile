import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder, value, onChangeText, securityTextEntry, ...rest}) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={securityTextEntry}
        style={styles.input}
        {...rest}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'CircularStd-Medium',
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#F2F9FF',
    backgroundColor: '#F2F9FF',
    borderRadius: 5,
    padding: 12,
    fontFamily: 'CircularStd-Book',
    fontSize: 16,
    color: '#272727',
  },
});
