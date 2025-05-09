import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/scalingUtils';
import { scaleFont } from '../../utils/fontScaling';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: moderateScale(16),
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginBottom: moderateScale(16),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(20),
  },
  cartButton: {
    flex: 1,
    marginRight: moderateScale(10),
    backgroundColor: '#4CAF50',
    padding: moderateScale(12),
    borderRadius: moderateScale(8),
    alignItems: 'center',
  },
  shareButton: {
    flex: 1,
    marginLeft: moderateScale(10),
    backgroundColor: '#2196F3',
    padding: moderateScale(12),
    borderRadius: moderateScale(8),
    alignItems: 'center',
  },
  title: {
    fontSize: scaleFont(24),
    fontWeight: 'bold',
    marginBottom: moderateScale(8),
    fontFamily: 'ComicRelief-Regular',
  },
  price: {
    fontSize: scaleFont(20),
    color: '#007AFF',
    fontWeight: '600',
    marginBottom: moderateScale(12),
    fontFamily: 'ComicRelief-Regular',
  },
  description: {
    fontSize: scaleFont(16),
    color: '#333',
    lineHeight: moderateScale(24),
    fontFamily: 'ComicRelief-Regular',
  },
  });

  export const darkScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1c1c1c',
      padding: moderateScale(16),
    },
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      marginBottom: moderateScale(16),
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: moderateScale(20),
    },
    cartButton: {
      flex: 1,
      marginRight: moderateScale(10),
      backgroundColor: '#388E3C',
      padding: moderateScale(12),
      borderRadius: moderateScale(8),
      alignItems: 'center',
    },
    shareButton: {
      flex: 1,
      marginLeft: moderateScale(10),
      backgroundColor: '#1976D2',
      padding: moderateScale(12),
      borderRadius: moderateScale(8),
      alignItems: 'center',
    },
    title: {
      fontSize: scaleFont(24),
      fontWeight: 'bold',
      color: '#f5f5f5',
      marginBottom: moderateScale(8),
      fontFamily: 'ComicRelief-Regular',
    },
    price: {
      fontSize: scaleFont(20),
      color: '#4DA6FF',
      fontWeight: '600',
      marginBottom: moderateScale(12),
      fontFamily: 'ComicRelief-Regular',
    },
    description: {
      fontSize: scaleFont(16),
      color: '#ddd',
      lineHeight: moderateScale(24),
      fontFamily: 'ComicRelief-Regular',
    },
  });
