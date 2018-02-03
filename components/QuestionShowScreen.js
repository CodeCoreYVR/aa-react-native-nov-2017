import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Question} from '../requests/questions';

class QuestionShowScreen extends Component {
  static navigationOptions = props => ({
    title: props.navigation.state.params.title
  })

  constructor (props) {
    super(props);

    this.state = {
      question: null
    };
  }

  componentDidMount () {
    const {navigation} = this.props;
    const questionId = navigation.state.params.id;

    Question
      .get(questionId)
      .then(question => {
        this.setState({question: question});
      });
  }

  render () {
    const {question} = this.state;
    if (!question) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }
    return (
      <View>
        <Text
          style={{
            fontSize: 30
          }}
        >{question.body}</Text>
      </View>
    )
  }
}

export {QuestionShowScreen};
