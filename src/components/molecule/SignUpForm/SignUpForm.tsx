import React from 'react';
import { View, Text } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { styles as light} from './signUpForm.styles';
import { useAuth } from '../../../context/AuthContext';
import { useTheme } from '../../../context/ThemeContext/ThemeContext';
import {darkShadowInputStyles } from './signUpForm.styles';


const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string()
    .min(10, 'Phone number is too short')
    .regex(/^\d+$/, 'Phone number must contain only digits'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});


type FormData = z.infer<typeof schema>;


export const SignUpForm = () => {
  const { login } = useAuth();
  const {theme } = useTheme();
                const styles = theme === 'dark' ? darkShadowInputStyles : light;


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log('SignUp Data:', data);
    login(); // Simulates signup and logs user in
  };

  return (
    <View style={styles.shadowContainer}>
      {/** Name Field */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name</Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Input
  placeholder="John Doe"
  value={value}
  onChangeText={onChange}
  isError={!!errors.name}
/>


          )}
        />
        {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
      </View>

      {/** Email Field */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
  placeholder="email@example.com"
  value={value}
  onChangeText={onChange}
  isError={!!errors.email}
/>


          )}
        />
        {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
      </View>

      {/** Phone Field */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Phone</Text>
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value } }) => (
            <Input
  placeholder="1234567890"
  keyboardType="phone-pad"
  value={value}
  onChangeText={onChange}
  isError={!!errors.phone}
/>


          )}
        />
        {errors.phone && <Text style={styles.error}>{errors.phone.message}</Text>}
      </View>

      {/** Password Field */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
            placeholder="••••••••"
            secureTextEntry
            value={value}
            onChangeText={onChange}
            isError={!!errors.password}
          />


          )}
        />
        {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
      </View>

      <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />

    </View>
  );
};
