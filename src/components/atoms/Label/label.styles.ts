// Import the scaling utility
import { StyleSheet } from 'react-native';
import { moderateScale } from '../../../utils/scalingUtils'; // Import scaling utility

export const styles = StyleSheet.create({
  label: {
    marginBottom: moderateScale(5),  // Adjust margin for responsiveness
    fontWeight: '600',
    fontSize: moderateScale(14),  // Adjust font size for responsiveness
    color: '#2c3e50',
  },
});
export const darkLabelStyles = StyleSheet.create({
  label: {
    marginBottom: moderateScale(5),
    fontWeight: '600',
    fontSize: moderateScale(14),
    color: '#ecf0f1', // Dark mode label color
  },
});
