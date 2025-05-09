import { StyleSheet } from 'react-native';
import { moderateScale } from '../../../utils/scalingUtils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: moderateScale(12), // Scaled border radius
    padding: moderateScale(20), // Scaled padding
    shadowColor: '#000',
    shadowOffset: { width: 0, height: moderateScale(4) }, // Scaled shadow offset
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(8), // Scaled shadow radius
    elevation: moderateScale(4), // Scaled elevation
  },
  error: {
    color: '#e74c3c',
    fontSize: moderateScale(13), // Scaled font size
    marginBottom: moderateScale(8), // Scaled margin bottom
    marginLeft: moderateScale(2), // Scaled margin left
  },
});

export const darkContainerStyles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#2c3e50', // Dark mode background color
    borderRadius: moderateScale(12), // Scaled border radius
    padding: moderateScale(20), // Scaled padding
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: moderateScale(4) }, // Scaled shadow offset
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(8), // Scaled shadow radius
    elevation: moderateScale(4), // Scaled elevation
  },
  error: {
    color: '#e74c3c', // Keep error color same, can adjust if needed
    fontSize: moderateScale(13), // Scaled font size
    marginBottom: moderateScale(8), // Scaled margin bottom
    marginLeft: moderateScale(2), // Scaled margin left
  },
});
