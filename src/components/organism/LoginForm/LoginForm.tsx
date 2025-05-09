import React from 'react';
import { View, Alert, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { LabeledInput } from '../../molecule/LabeledInput';
import { Button } from '../../atoms/Button';
import { styles as light} from './loginForm.styles';
import { useTheme } from '../../../context/ThemeContext/ThemeContext';
import { darkContainerStyles } from './loginForm.styles';

const schema = z.object({
  username: z.string().email().nonempty('Username is required'),
  password: z.string().nonempty('Password is required'),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onLoginSuccess: () => void;
}

export const LoginForm: React.FC<Props> = ({ onLoginSuccess }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  });
  const {theme } = useTheme();
        const styles = theme === 'dark' ? darkContainerStyles : light;

  const onSubmit = (data: FormData) => {
    if (data.username === 'eurisko@gmail.com' && data.password === 'academy2025') {
      onLoginSuccess();
    } else {
      Alert.alert('Login Failed', 'Invalid username or password.');
    }
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value } }) => (
          <>
            <LabeledInput
              label="Email"
              value={value}
              onChangeText={onChange}
              isError={!!errors.username}
            />
            {errors.username && (
              <Text style={styles.error}>{errors.username.message}</Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <>
            <LabeledInput
              label="Password"
              value={value}
              onChangeText={onChange}
              secureTextEntry
              isError={!!errors.password}
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password.message}</Text>
            )}
          </>
        )}
      />

      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
