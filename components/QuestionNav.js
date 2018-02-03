import { StackNavigator } from 'react-navigation';
import {QuestionIndexScreen} from './QuestionIndexScreen';
import {QuestionShowScreen} from './QuestionShowScreen';


// StackNavigator takes a object to define all of its routes
// The keys are the name of the routes.
const QuestionNav = StackNavigator({
  QuestionIndex: {
    screen: QuestionIndexScreen
  },
  QuestionShow: {
    screen: QuestionShowScreen
  }
});

export {QuestionNav};
