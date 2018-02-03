import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Question } from './requests/questions';
import { QuestionNav } from './components/QuestionNav';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <QuestionNav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
