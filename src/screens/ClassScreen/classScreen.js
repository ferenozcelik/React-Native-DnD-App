import {View, Text, ImageBackground, Image, FlatList} from 'react-native';
import React from 'react';
import classData from '../../assets/data/classData';
import styles from './ClassScreenStyles';
import background from '../../assets/images/background.png';
import ClassCard from './ClassCard';

const ClassScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <ClassCard item={item} navigation={navigation} />
  );

  return (
    <View>
      <ImageBackground source={background} style={styles.imageBackground}>
        <FlatList
          data={classData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </ImageBackground>
    </View>
  );
};

export default ClassScreen;
