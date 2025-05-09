import { StyleSheet } from 'react-native';
import { moderateScale } from '../../../utils/scalingUtils';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff', // Light mode background color
    borderRadius: moderateScale(8), // Scaled border radius
    padding: moderateScale(10), // Scaled padding
    marginBottom: moderateScale(10), // Scaled margin bottom
    shadowColor: '#000', // Light mode shadow color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(4), // Scaled shadow radius
    elevation: moderateScale(3), // Scaled elevation
  },
  title: {
    fontSize: moderateScale(18), // Scaled font size
    fontWeight: 'bold',
    marginTop: moderateScale(10), // Scaled margin top
  },
  description: {
    marginTop: moderateScale(5), // Scaled margin top
    color: '#666', // Light mode text color
  },
  price: {
    marginTop: moderateScale(5), // Scaled margin top
    fontWeight: 'bold',
  },
});
export const darkCardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#333', // Dark mode background color
    borderRadius: moderateScale(8), // Scaled border radius
    padding: moderateScale(10), // Scaled padding
    marginBottom: moderateScale(10), // Scaled margin bottom
    shadowColor: '#fff', // Dark mode shadow color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(4), // Scaled shadow radius
    elevation: moderateScale(3), // Scaled elevation
  },
  title: {
    fontSize: moderateScale(18), // Scaled font size
    fontWeight: 'bold',
    marginTop: moderateScale(10), // Scaled margin top
    color: '#ecf0f1', // Dark mode title text color
  },
  description: {
    marginTop: moderateScale(5), // Scaled margin top
    color: '#ecf0f1', // Dark mode text color for description
  },
  price: {
    marginTop: moderateScale(5), // Scaled margin top
    fontWeight: 'bold',
    color: '#ecf0f1', // Dark mode price color
  },
});
