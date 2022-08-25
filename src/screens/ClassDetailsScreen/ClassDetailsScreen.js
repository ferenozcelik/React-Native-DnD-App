import {View, Text} from 'react-native';
import React from 'react';

const ClassDetailsScreen = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <View>
      <Text>{item.className}</Text>
    </View>
  );
};

export default ClassDetailsScreen;
