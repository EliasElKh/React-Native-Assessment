import { StyleSheet } from 'react-native';
import { moderateScale } from '../../../utils/scalingUtils';
import { scaleFont } from '../../../utils/fontScaling';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: moderateScale(8),
    padding: moderateScale(10),
    marginBottom: moderateScale(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(4),
    elevation: moderateScale(3),
  },
  title: {
    fontSize: scaleFont(18),
    fontWeight: 'bold',
    marginTop: moderateScale(10),
    fontFamily: 'ComicRelief-Regular',
  },
  description: {
    marginTop: moderateScale(5),
    color: '#666',
    fontFamily: 'ComicRelief-Regular',
  },
  price: {
    marginTop: moderateScale(5),
    fontWeight: 'bold',
    fontFamily: 'ComicRelief-Regular',
  },
});
export const darkCardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#333',
    borderRadius: moderateScale(8),
    padding: moderateScale(10),
    marginBottom: moderateScale(10),
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(4),
    elevation: moderateScale(3),
  },
  title: {
    fontSize: scaleFont(18),
    fontWeight: 'bold',
    marginTop: moderateScale(10),
    color: '#ecf0f1',
    fontFamily: 'ComicRelief-Regular',
  },
  description: {
    marginTop: moderateScale(5),
    color: '#ecf0f1',
    fontFamily: 'ComicRelief-Regular',
  },
  price: {
    marginTop: moderateScale(5),
    fontWeight: 'bold',
    color: '#ecf0f1',
    fontFamily: 'ComicRelief-Regular',
  },
});
