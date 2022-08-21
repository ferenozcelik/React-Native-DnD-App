import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './ClassScreenStyles';

const renderClass = props => {
  const item = props.item;
  const navigation = props.navigation;
  return (
    <View>
      <View
        style={[
          styles.card,
          {marginBottom: item.id === ('11' || '12') ? 110 : 0},
        ]}>
        <Image source={item.image} />
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('ClassDetailsScreen', {
            //   item: item,
            // });
            console.log(navigation);
          }}>
          <View style={[styles.cardInfoBox, styles.shadow]}>
            <View style={styles.titleWrapper}>
              <Image source={item.icon} style={styles.icon} />
              <View style={styles.titleTextWrapper}>
                <Text style={styles.titleText}>{item.className}</Text>
                <Text style={styles.titleSubText}>Basic Rules</Text>
                <View style={styles.divider} />
              </View>
            </View>

            <View style={styles.descriptionWrapper}>
              <Text style={styles.descriptionText}>{item.description}</Text>
              <Text style={styles.subInfoWrapper}>
                <Text style={styles.subInfoTitle}>Hit Die: </Text>
                <Text style={styles.subInfoText}>{item.hitDie}</Text>
              </Text>
              <Text style={styles.subInfoWrapper}>
                <Text style={styles.subInfoTitle}>Primary Ability: </Text>
                <Text style={styles.subInfoText}>{item.primaryAbility}</Text>
              </Text>
              <Text style={styles.subInfoWrapper}>
                <Text style={styles.subInfoTitle}>Saves: </Text>
                <Text style={styles.subInfoText}>{item.saves}</Text>
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default renderClass;
