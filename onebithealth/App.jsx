import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import Main from './src/components/Main';
import styles from './src/Global/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={StyleSheet.compose(styles.viewTitle, styles.view)}>
        <Title/>
      </View>

      <View style={StyleSheet.compose(styles.viewForm, styles.view)}>
        <Main/>
      </View>
    </View>
  );
}

