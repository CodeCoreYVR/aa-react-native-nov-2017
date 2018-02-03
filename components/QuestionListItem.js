import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const {height, width} = Dimensions.get('window');

function QuestionListItem (props) {
  return (
    <TouchableOpacity
      onPress={
        () => props
          .navigation
          .navigate('QuestionShow', {id: props.id, title: props.title})
      }
      style={{
        paddingTop: 5,
        paddingBottom: 5,
        borderTopWidth: 2,
        borderTopColor: 'deepskyblue',
        backgroundColor: 'whitesmoke',
        flexDirection: 'row'
      }}
    >
      <View style={{ marginRight: 5 }}>
        <Image
          style={{width: 50, height: 50, borderRadius: 5}}
          source={{uri: 'https://i.imgur.com/e9wMaRx.jpg'}}
        />
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          width: 0.8 * width
        }}
        numberOfLines={2}
      >{props.title}</Text>
    </TouchableOpacity>
  )
}

export {QuestionListItem};
