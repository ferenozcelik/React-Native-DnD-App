import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/colors/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  imageBackground: {
    height: height,
    width: width,
    opacity: 0.3,
    bottom: 70,
  },
  container: {
    top: -height,
  },
  titleWrapper: {
    marginLeft: 10,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 36,
    color: '#343434',
  },
  titleSubText: {
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    color: '#5C5C5C',
    paddingLeft: 5,
  },
  divider: {
    borderBottomColor: colors.orange,
    borderBottomWidth: 2,
    width: 270,
    marginTop: 3,
    marginLeft: 10,
  },
});

export default styles;
