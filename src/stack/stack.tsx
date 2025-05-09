import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { VerificationScreen } from '../screens/VerificationScreen/VerificationScreen';
import { useAuth } from '../context/AuthContext';
import { SignUpScreen } from '../screens/SignUpScreen/SignUpScreen';
import { ProductDetailScreen } from '../screens/ProductDetailScreen/ProductDetailScreen';


export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Verification: undefined;
  SignUp: undefined;
  ProductDetail: { id: string };
};

const StackNav = createNativeStackNavigator<RootStackParamList>();

export const Stack = () => {
  const { isLoggedIn, isVerified } = useAuth();

  return (
    <StackNav.Navigator screenOptions={{ headerShown: false }}>
      {/* If the user is verified but not logged in, show the Login screen */}
      {!isVerified ? (
        <StackNav.Screen name="Verification" component={VerificationScreen} />
      ) : isLoggedIn ? (
        <>
        <StackNav.Screen name="Home" component={HomeScreen} />
        <StackNav.Screen name="ProductDetail" component={ProductDetailScreen} />
        </>
      ) : (
        <>
          <StackNav.Screen name="Login" component={LoginScreen} />
          <StackNav.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </StackNav.Navigator>
  );
};
