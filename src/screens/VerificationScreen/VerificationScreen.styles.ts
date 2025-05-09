import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/scalingUtils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(20), // Scaled padding
    backgroundColor: '#f5f7fa',
  },
  header: {
    fontSize: moderateScale(24), // Scaled font size
    fontWeight: 'bold',
    marginBottom: moderateScale(20), // Scaled margin bottom
  },
  error: {
    color: 'red',
    marginTop: moderateScale(5), // Scaled margin top
    fontSize: moderateScale(12), // Scaled font size
  },
});
export const darkScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(20), // Scaled padding
    backgroundColor: '#2c3e50',
  },
  header: {
    fontSize: moderateScale(24), // Scaled font size
    fontWeight: 'bold',
    marginBottom: moderateScale(20), // Scaled margin bottom
    color: '#ecf0f1', // Light text color for dark mode
  },
  error: {
    color: '#e74c3c', // Red color for error in dark mode
    marginTop: moderateScale(5), // Scaled margin top
    fontSize: moderateScale(12), // Scaled font size
  },
});
