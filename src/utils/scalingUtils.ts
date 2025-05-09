// scalingUtils.js
import { Dimensions } from 'react-native';

// Get screen width and height
const { width } = Dimensions.get('window');

// Define a base width for scaling (this can be your design's standard width)
const BASE_WIDTH = 375; // Example base width (iPhone 6)

// Create a scale function based on the screen width
export const scale = (size: number) => (width / BASE_WIDTH) * size;

// Create a moderateScale function for more flexibility
export const moderateScale = (size: number, factor = 0.5) => {
  return size + (scale(size) - size) * factor;
};
