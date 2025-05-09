import { StyleSheet } from 'react-native';
import { moderateScale } from '../../../utils/scalingUtils';

export const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(16), // Scaled margin bottom
  },
  text: {
    color: 'red', // Light mode text color
    marginTop: moderateScale(4), // Scaled margin top
  },
});
export const darkContainerStyles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(16), // Scaled margin bottom
  },
  text: {
    color: '#FF6347', // Dark mode text color (using a different shade of red)
    marginTop: moderateScale(4), // Scaled margin top
  },
});
