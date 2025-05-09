import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import usersData from '../../../Products.json';
import { ProductList } from '../../components/organism/ProductList/ProductList';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles as light } from './HomeScreen.styles';
import { darkButtonStyles } from './HomeScreen.styles';

export const HomeScreen: React.FC = () => {
  const { logout } = useAuth();
  const { toggleTheme, theme } = useTheme();
  const styles = theme === 'dark' ? darkButtonStyles : light;
  const [data] = useState(usersData.data);

  return (
    <View style={styles.container}>
      <View style={styles.topButtons}>
        <TouchableOpacity style={styles.button} onPress={logout}>
          <MaterialIcons name="logout" size={20} color="#fff" />
          <Text style={styles.text}>Sign Out</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={toggleTheme}>
          <MaterialIcons name="brightness-6" size={20} color="#fff" />
          <Text style={styles.text}>Toggle Theme</Text>
        </TouchableOpacity>
      </View>

      <ProductList data={data} />
    </View>
  );
};
