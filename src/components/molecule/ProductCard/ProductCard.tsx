import React from 'react';
import { CardImage } from '../../atoms/CardImage/CardImage';
import { Label } from '../../atoms/Label';
import { styles as light} from './ProductCard.styles';
import { ProductCardProps } from './ProductCard.types';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '../../../context/ThemeContext/ThemeContext';
import {darkCardStyles} from './ProductCard.styles';

export const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
    const navigation = useNavigation<any>();
    const {theme } = useTheme();
                const styles = theme === 'dark' ? darkCardStyles : light;
    const handlePress = () => {
      navigation.navigate('ProductDetail', { id: item._id });
    };
    const teaser = item.description.length > 60
  ? item.description.slice(0, 60) + '...'
  : item.description;
    return (
      <TouchableOpacity style={styles.card} onPress={handlePress}>
        <CardImage uri={item.images[0].url} />
        <Label text={item.title} style={styles.title} />
        <Label text={teaser} style={styles.description} />
        <Label text={`$${item.price}`} style={styles.price} />
      </TouchableOpacity>
    );
  };
