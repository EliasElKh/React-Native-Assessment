import React from 'react';
import { View, Text, Alert } from 'react-native';
import { VerificationForm } from '../../components/molecule/VerificationForm/VerificationForm';
import { useAuth } from '../../context/AuthContext';
import { styles as light } from './VerificationScreen.styles';
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { darkScreenStyles } from './VerificationScreen.styles';

// type VerificationScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'Verification'
// >;

export const VerificationScreen = () => {
  // const navigation = useNavigation<VerificationScreenNavigationProp>();
  const { verifyOTP } = useAuth(); // Use both verifyOTP and login functions
  const {theme } = useTheme();
      const styles = theme === 'dark' ? darkScreenStyles : light;

  const handleVerificationSuccess = () => {
    Alert.alert('OTP Verified', 'You have successfully verified your OTP!');
    verifyOTP(); // Mark the user as verified
    // navigation.replace('Login'); // This will replace the current screen and navigate to Login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter OTP</Text>
      <VerificationForm onVerificationSuccess={handleVerificationSuccess} />
    </View>
  );
};
