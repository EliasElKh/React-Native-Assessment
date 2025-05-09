import { StyleSheet } from 'react-native';
import { moderateScale } from '../../../utils/scalingUtils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    gap: moderateScale(24), // Scaled gap
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  inputBox: {
    width: moderateScale(60), // Scaled width
    height: moderateScale(60), // Scaled height
    borderWidth: 2,
    borderRadius: moderateScale(14), // Scaled border radius
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: moderateScale(24), // Scaled font size
    fontWeight: '600',
    color: '#333',
    backgroundColor: '#fdfdfd',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: moderateScale(2) }, // Scaled shadow offset
    shadowRadius: moderateScale(6), // Scaled shadow radius
    elevation: moderateScale(4), // Scaled elevation
  },
  inputBoxError: {
    borderColor: '#ff4d4f',
  },
  error: {
    color: '#ff4d4f',
    fontSize: moderateScale(13), // Scaled font size
    fontWeight: '500',
    marginTop: moderateScale(-10), // Scaled negative margin
  },
});

export const darkInputBoxStyles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    gap: moderateScale(24), // Scaled gap
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  inputBox: {
    width: moderateScale(60), // Scaled width
    height: moderateScale(60), // Scaled height
    borderWidth: 2,
    borderRadius: moderateScale(14), // Scaled border radius
    borderColor: '#7f8c8d', // Dark mode border color
    textAlign: 'center',
    fontSize: moderateScale(24), // Scaled font size
    fontWeight: '600',
    color: '#ecf0f1', // Dark mode text color
    backgroundColor: '#34495e', // Dark mode background color
    shadowColor: '#fff',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: moderateScale(2) }, // Scaled shadow offset
    shadowRadius: moderateScale(6), // Scaled shadow radius
    elevation: moderateScale(4), // Scaled elevation
  },
  inputBoxError: {
    borderColor: '#e74c3c', // Dark mode error border color
  },
  error: {
    color: '#e74c3c', // Dark mode error text color
    fontSize: moderateScale(13), // Scaled font size
    fontWeight: '500',
    marginTop: moderateScale(-10), // Scaled negative margin
  },
});
