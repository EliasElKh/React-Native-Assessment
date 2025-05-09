// Import the scaling utility
import { StyleSheet } from 'react-native';
import { moderateScale } from '../../../utils/scalingUtils'; // Import scaling utility

export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#dcdde1',
    borderRadius: moderateScale(10),  // Adjust border radius
    padding: moderateScale(12),  // Adjust padding for responsiveness
    marginBottom: moderateScale(10),  // Adjust margin for responsiveness
    fontSize: moderateScale(16),  // Adjust font size
    color: '#2d3436',
    backgroundColor: '#ecf0f1',
  },
  errorBorder: {
    borderColor: '#e74c3c',
  },
});
export const darkInputStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#444', // Dark mode input border color
    borderRadius: moderateScale(10),
    padding: moderateScale(12),
    marginBottom: moderateScale(10),
    fontSize: moderateScale(16),
    color: '#ecf0f1', // Dark mode text color
    backgroundColor: '#2c3e50', // Dark mode background color
  },
  errorBorder: {
    borderColor: '#e74c3c', // Same for both dark and light mode error color
  },
});
