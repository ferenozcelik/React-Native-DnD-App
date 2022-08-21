import {View, Text, ImageBackground, Image, FlatList} from 'react-native';
import React from 'react';
import classData from '../../assets/data/classData';
import barbarian from '../../assets/images/barbarian-photo.png';
import barbarianIcon from '../../assets/icons/barbarian-icon.png';
import styles from './ClassScreenStyles';
import background from '../../assets/images/background.png';
import renderClass from './ClassScreenConstants';

const ClassScreen = ({navigation}) => {
  return (
    <View>
      <ImageBackground source={background} style={styles.imageBackground}>
        <FlatList
          data={classData}
          renderItem={renderClass}
          keyExtractor={item => item.id}
          navigation={navigation}
          numColumns={2}
        />
      </ImageBackground>
    </View>
  );
};

export default ClassScreen;
