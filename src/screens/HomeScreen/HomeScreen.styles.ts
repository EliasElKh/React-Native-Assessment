
import {StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/scalingUtils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10), // Scaled padding
    backgroundColor: '#f5f7fa',
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(10), // Scaled margin
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d9534f', // Light mode background color
    padding: moderateScale(10), // Scaled padding
    borderRadius: moderateScale(5), // Scaled border radius
  },
  text: {
    color: '#fff',
    marginLeft: moderateScale(5), // Scaled margin
    fontWeight: 'bold',
  },
});

export const darkButtonStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10), // Scaled padding
    backgroundColor: '#2c3e50',
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(10), // Scaled margin
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c0392b', // Dark mode background color
    padding: moderateScale(10), // Scaled padding
    borderRadius: moderateScale(5), // Scaled border radius
  },
  text: {
    color: '#fff',
    marginLeft: moderateScale(5), // Scaled margin
    fontWeight: 'bold',
  },
});
