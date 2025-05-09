
import {StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/scalingUtils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10),
    backgroundColor: '#f5f7fa',
    fontFamily: 'ComicRelief-Regular',
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(10),
    fontFamily: 'ComicRelief-Regular',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d9534f',
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    fontFamily: 'ComicRelief-Regular',
  },
  text: {
    color: '#fff',
    marginLeft: moderateScale(5),
    fontWeight: 'bold',
    fontFamily: 'ComicRelief-Regular',
  },
});

export const darkButtonStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10),
    backgroundColor: '#2c3e50',
    fontFamily: 'ComicRelief-Regular',
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(10),
    fontFamily: 'ComicRelief-Regular',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c0392b',
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    fontFamily: 'ComicRelief-Regular',
  },
  text: {
    color: '#fff',
    marginLeft: moderateScale(5),
    fontWeight: 'bold',
    fontFamily: 'ComicRelief-Regular',
  },
});
