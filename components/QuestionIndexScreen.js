import React, {Component} from 'react';
import {FlatList, ScrollView, View, Text} from 'react-native';
import {Question} from '../requests/questions';
import {QuestionListItem} from './QuestionListItem';


/*
<TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
  <Text style={{color: 'blue'}}>
    Google
  </Text>
</TouchableOpacity>
*/

// QuestionIndexScreen.navigationOptions = {
//   title: 'Questions'
// }

class QuestionIndexScreen extends Component {
  static navigationOptions = {
    title: 'Questions'
  }

  constructor (props) {
    super(props);

    this.state = {
      questions: []
    };
  }

  componentDidMount () {
    Question
      .all()
      .then(questions => {
        this.setState({questions});
      })
  }

  render () {
    const {questions} = this.state;
    const {navigation} = this.props;

    // When a StackNavigator renders a component, it passes
    // a navigation that holds navigation state and methods
    // to navigate to different screens.
    return (
      <FlatList
        data={questions}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <QuestionListItem {...item} navigation={navigation} />
        )}
      />
    )
  }
}

export {QuestionIndexScreen};
