import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { styles as light} from './loginScreen.styles';
import { LoginForm } from '../../components/organism/LoginForm';
import { useAuth } from '../../context/AuthContext';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../stack/stack';
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { darkScreenStyles } from './loginScreen.styles';


export const LoginScreen = () => {
  type Navigation = NativeStackNavigationProp<RootStackParamList, 'Login'>;
  const navigation = useNavigation<Navigation>();
  const { login } = useAuth();
  const {theme } = useTheme();
    const styles = theme === 'dark' ? darkScreenStyles : light;

  const handleLoginSuccess = () => {
    login();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Please login to continue</Text>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupText}>
          Don’t have an account? <Text style={styles.signupLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
