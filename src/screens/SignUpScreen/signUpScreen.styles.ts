import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/scalingUtils';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f7fa', // Light background
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(20), // Scaled padding
  },
  container: {
    backgroundColor: '#fff', // White card
    width: '100%',
    borderRadius: moderateScale(12), // Scaled border radius
    // padding: moderateScale(20), // Scaled padding (optional)
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: moderateScale(8), // Scaled shadow radius
    elevation: 5,
  },
  loginText: {
    color: 'black',
    marginTop: moderateScale(16), // Scaled margin
    textAlign: 'center',
  },
  loginLink: {
    color: '#4DA6FF', // Link color
    fontWeight: 'bold',
  },
  header: {
    fontSize: moderateScale(28), // Scaled font size
    fontWeight: 'bold',
    marginBottom: moderateScale(30), // Scaled margin bottom
    textAlign: 'center',
  },
});
export const darkScreenStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#2c3e50', // Dark background
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(20), // Scaled padding
  },
  container: {
    backgroundColor: '#34495e', // Dark card background
    width: '100%',
    borderRadius: moderateScale(12), // Scaled border radius
    // padding: moderateScale(20), // Scaled padding (optional)
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: moderateScale(8), // Scaled shadow radius
    elevation: 5,
  },
  loginText: {
    color: '#ecf0f1', // Light text for dark mode
    marginTop: moderateScale(16), // Scaled margin
    textAlign: 'center',
  },
  loginLink: {
    color: '#3498db', // Link color for dark mode
    fontWeight: 'bold',
  },
  header: {
    fontSize: moderateScale(28), // Scaled font size
    fontWeight: 'bold',
    marginBottom: moderateScale(30), // Scaled margin bottom
    textAlign: 'center',
    color: '#ecf0f1', // Light text color for dark mode
  },
});

