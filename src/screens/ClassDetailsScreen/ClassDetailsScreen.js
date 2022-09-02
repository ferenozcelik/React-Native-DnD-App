import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import styles from './ClassDetailsScreenStyles';
import background from '../../assets/images/class_details_background.png';

const ClassDetailsScreen = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <View>
      <ImageBackground
        source={background}
        style={styles.imageBackground}></ImageBackground>
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{item.className}</Text>
          <Text style={styles.titleSubText}>Class Details</Text>
        </View>
        <View style={styles.divider} />
      </View>
    </View>
  );
};

export default ClassDetailsScreen;
