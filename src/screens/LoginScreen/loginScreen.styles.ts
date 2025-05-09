import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/scalingUtils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa', // Light mode background color
    alignItems: 'center',
    padding: moderateScale(20), // Scaled padding
    justifyContent: 'center',
  },
  image: {
    width: moderateScale(200), // Scaled image width
    height: moderateScale(200), // Scaled image height
    marginBottom: moderateScale(20), // Scaled margin bottom
  },
  title: {
    fontSize: moderateScale(28), // Scaled font size
    fontWeight: '700',
    color: '#2c3e50', // Dark text color
    marginBottom: moderateScale(5), // Scaled margin bottom
  },
  subtitle: {
    fontSize: moderateScale(16), // Scaled font size
    color: '#7f8c8d', // Light gray text color
    marginBottom: moderateScale(30), // Scaled margin bottom
  },
  signupText: {
    marginTop: moderateScale(20), // Scaled margin top
    fontSize: moderateScale(14), // Scaled font size
    color: '#555',
  },
  signupLink: {
    color: '#007BFF', // Link color
    fontWeight: 'bold',
  },
});

export const darkScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50', // Dark mode background color
    alignItems: 'center',
    padding: moderateScale(20), // Scaled padding
    justifyContent: 'center',
  },
  image: {
    width: moderateScale(200), // Scaled image width
    height: moderateScale(200), // Scaled image height
    marginBottom: moderateScale(20), // Scaled margin bottom
  },
  title: {
    fontSize: moderateScale(28), // Scaled font size
    fontWeight: '700',
    color: '#ecf0f1', // Light text color for dark mode
    marginBottom: moderateScale(5), // Scaled margin bottom
  },
  subtitle: {
    fontSize: moderateScale(16), // Scaled font size
    color: '#bdc3c7', // Lighter gray text for dark mode
    marginBottom: moderateScale(30), // Scaled margin bottom
  },
  signupText: {
    marginTop: moderateScale(20), // Scaled margin top
    fontSize: moderateScale(14), // Scaled font size
    color: '#ccc', // Light gray text for dark mode
  },
  signupLink: {
    color: '#3498db', // Lighter blue for dark mode
    fontWeight: 'bold',
  },
});
