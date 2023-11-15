import {
  React,
  useState,
  useEffect,
} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
  },
  text: {
      color: 'rgb(59, 108, 212)',
      fontSize: 42,
      fontWeight: '100',
      textAlign: 'center',
  },
  default: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'start',
      alignContent: 'spaceBetween',
  },
});

export default styles;