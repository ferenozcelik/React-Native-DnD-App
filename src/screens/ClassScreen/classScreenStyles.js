import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/colors/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  imageBackground: {
    height: height,
    width: width,
  },
  card: {
    width: 180,
    height: 280,
    backgroundColor: colors.lightgray,
    marginLeft: 17,
    marginTop: 10,
    alignItems: 'center',
  },
  cardInfoBox: {
    width: 160,
    height: 170,
    backgroundColor: colors.white,
    opacity: 0.9,
    marginTop: -90,
    borderRadius: 5,
  },
  titleWrapper: {
    flexDirection: 'row',
    marginLeft: 5,
  },
  icon: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  titleTextWrapper: {
    marginTop: 15,
    marginLeft: 5,
    alignItems: 'flex-start',
  },
  titleText: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.black,
  },
  titleSubText: {
    fontFamily: 'Lato-Regular',
    color: colors.midgray,
    fontSize: 10,
  },
  divider: {
    borderBottomColor: colors.orange,
    borderBottomWidth: 2,
    width: 85,
    marginTop: 5,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.22,
    elevation: 1.5,
  },
  descriptionWrapper: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 2,
  },
  descriptionText: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: colors.black,
    // maxHeight: 45,
  },
  subInfoWrapper: {
    marginTop: 5,
  },
  subInfoTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 10,
    color: colors.black,
  },
  subInfoText: {
    fontFamily: 'Lato-Regular',
    fontSize: 9,
    color: colors.black,
  },
});

export default styles;
