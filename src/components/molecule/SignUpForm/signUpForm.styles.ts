import { StyleSheet } from 'react-native';
import { moderateScale } from '../../../utils/scalingUtils';

export const styles = StyleSheet.create({
  shadowContainer: {
    width: '100%',
    padding: moderateScale(20), // Scaled padding
    borderRadius: moderateScale(12), // Scaled border radius
    backgroundColor: '#f2f2f2', // Light mode background
    shadowColor: '#000',
    shadowOffset: { width: 0, height: moderateScale(3) }, // Scaled shadow offset
    shadowOpacity: 0.2,
    shadowRadius: moderateScale(6), // Scaled shadow radius
    elevation: moderateScale(5), // Scaled elevation
  },
  inputGroup: {
    marginBottom: moderateScale(15), // Scaled margin bottom
  },
  label: {
    fontSize: moderateScale(16), // Scaled font size
    marginBottom: moderateScale(5), // Scaled margin bottom
    color: '#333',
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: moderateScale(8), // Scaled border radius
    borderWidth: 1,
    borderColor: '#ccc',
    padding: moderateScale(12), // Scaled padding
    fontSize: moderateScale(16), // Scaled font size
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    fontSize: moderateScale(12), // Scaled font size
    marginTop: moderateScale(4), // Scaled margin top
  },
  switchText: {
    marginTop: moderateScale(20), // Scaled margin top
    textAlign: 'center',
    fontSize: moderateScale(14), // Scaled font size
    color: '#444',
  },
  switchLink: {
    color: '#007bff',
    fontWeight: '600',
  },
});

export const darkShadowInputStyles = StyleSheet.create({
  shadowContainer: {
    width: '100%',
    padding: moderateScale(20), // Scaled padding
    borderRadius: moderateScale(12), // Scaled border radius
    backgroundColor: '#2c3e50', // Dark mode background
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: moderateScale(3) }, // Scaled shadow offset
    shadowOpacity: 0.2,
    shadowRadius: moderateScale(6), // Scaled shadow radius
    elevation: moderateScale(5), // Scaled elevation
  },
  inputGroup: {
    marginBottom: moderateScale(15), // Scaled margin bottom
  },
  label: {
    fontSize: moderateScale(16), // Scaled font size
    marginBottom: moderateScale(5), // Scaled margin bottom
    color: '#ecf0f1', // Dark mode label color
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#34495e', // Dark mode input background color
    borderRadius: moderateScale(8), // Scaled border radius
    borderWidth: 1,
    borderColor: '#7f8c8d', // Dark mode input border color
    padding: moderateScale(12), // Scaled padding
    fontSize: moderateScale(16), // Scaled font size
    color: '#ecf0f1', // Dark mode text color
  },
  inputError: {
    borderColor: '#e74c3c', // Dark mode input error border color
  },
  error: {
    color: '#e74c3c', // Dark mode error text color
    fontSize: moderateScale(12), // Scaled font size
    marginTop: moderateScale(4), // Scaled margin top
  },
  switchText: {
    marginTop: moderateScale(20), // Scaled margin top
    textAlign: 'center',
    fontSize: moderateScale(14), // Scaled font size
    color: '#ecf0f1', // Dark mode switch text color
  },
  switchLink: {
    color: '#3498db', // Dark mode link color
    fontWeight: '600',
  },
});
