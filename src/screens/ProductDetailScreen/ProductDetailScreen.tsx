
import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import usersData from '../../../Products.json';
import { Product } from './ProductDetailScreen.types';
import { Button } from '../../components/atoms/Button';
import { CardImage } from '../../components/atoms/CardImage/CardImage';
import { Label } from '../../components/atoms/Label';
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { styles as light } from './ProductDetailScreen.styles';
import {darkScreenStyles} from './ProductDetailScreen.styles';

type ProductDetailRouteProp = RouteProp<{ ProductDetail: { id: string } }, 'ProductDetail'>;

export const ProductDetailScreen: React.FC = () => {
  const route = useRoute<ProductDetailRouteProp>();
  const { id } = route.params;
  const navigation = useNavigation();
  const {theme } = useTheme();
  const styles = theme === 'dark' ? darkScreenStyles : light;

  const product: Product | undefined = usersData.data.find((p: Product) => p._id === id);

  if (!product) {
    return (
      <View style={styles.centered}>
        <Text>Product not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Button
        onPress={() => navigation.goBack()}
        title="Back"
        style={styles.button}
      />
      <CardImage uri={product.images[0].url} />
      <Label text={product.title} style={styles.title} />
      <Label text={`$${product.price}`} style={styles.price} />
      <Label text={product.description} style={styles.description} />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {}}
          title="Add to Cart"
          style={styles.cartButton}
        />
        <Button
          onPress={() => {}}
          title="Share"
          style={styles.shareButton}
        />
      </View>
    </ScrollView>
  );
};

