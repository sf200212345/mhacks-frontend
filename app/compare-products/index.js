import { Link } from "expo-router";
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function CompareProductsPage() {
  // Placeholder for product data
  const navigation = useNavigation();
  const products = [
    {
      name: 'Nikon - Zfc Mirrorless',
      matchPercentage: '95%',
      description: 'An old-school-look camera but has the latest technology for taking high-quality pictures and videos...',
      attributes: [
        { key: 'Appearance', value: 100 },
        { key: 'Low light condition', value: 97 },
        { key: 'Light & small', value: 67 },
        { key: 'Travel', value: 65 },
        { key: 'Battery', value: 52 },
        { key: 'Portrait', value: 39 },
      ],
      image: require('../../assets/Image-1.png'), // Replace with your local image
    },
    {
      name: 'Sony - a7 III Mirrorless w/ 28-70mm Lens',
      matchPercentage: '92%',
      description: 'Equipped with a flip out vlogger screen, this DX-format 4K UHD compact camera delivers big image quality for photos and videos.',
      attributes: [
        { key: 'Travel', value: 100 },
        { key: 'Portrait', value: 98 },
        { key: 'Low light condition', value: 94 },
        { key: 'Appearance', value: 78 },
        { key: 'Battery', value: 52 },
        { key: 'Light & small', value: 32 },
      ],
      image: require('../../assets/Image.png'), // Replace with your local image
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerIcon}>
          <Text style={styles.headerIconText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Recommendation List</Text>
        <TouchableOpacity style={styles.headerIcon}>
          <Text style={styles.headerIconText}>🛒</Text>
        </TouchableOpacity>
      </View>
      
      {/* Swipable ScrollView for Products */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.swipeableContainer}

      >
        {products.map((product, index) => (
          <View key={index} style={[styles.productSwipeablePage, { width: width }]}>
            {/* Product Image and Match Percentage */}
            <View style={styles.productContainer}>
              <Image source={product.image} style={styles.productImage} />
              <Text style={styles.matchPercentage}>{product.matchPercentage} Match</Text>
            </View>
            {/* Product Details */}
            <View style={styles.productDetails}>
              <Text style={styles.productTitle}>{product.name}</Text>
              <Text style={styles.productDescription}>{product.description}</Text>
            </View>
            {/* Attributes List */}
            <View style={styles.attributesList}>
              {product.attributes.map(attr => (
                <View key={attr.key} style={styles.attribute}>
                  <Text style={styles.attributeText}>{attr.key}</Text>
                  <Text style={styles.attributeValue}>{attr.value}%</Text>
                </View>
              ))}
            </View>
            {/* Action Buttons */}
            <View style={styles.actionButtons}>
              <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
                <Text style={styles.buttonText}>Compare</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonFilled]}>
                <Text style={styles.buttonText}>Add to cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation Bar */}
      {/* ... Bottom Navigation Bar setup ... */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B0082', // Adjust the background color as needed
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#6A5ACD', // Or your desired header color
  },
  headerIcon: {
    // Add styles for touchable opacity if necessary
  },
  headerIconText: {
    color: '#FFFFFF',
    fontSize: 20,
    // You may want to add padding or use an icon here
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  productContainer: {
    alignItems: 'center',
    padding: 20,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  matchPercentage: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 8,
    borderRadius: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  productDetails: {
    backgroundColor: '#5D3FD3',
    padding: 10,
    marginHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  attributesList: {
    backgroundColor: '#5D3FD3',
    paddingVertical: 10, // Reduced padding
    paddingHorizontal: 10, // Reduced padding
    marginHorizontal: 20, 
  },
  attribute: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#6C56BA',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  attributeText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  attributeValue: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    minWidth: 120,
    textAlign: 'center',
  },
  buttonOutline: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttonFilled: {
    backgroundColor: '#8A2BE2',
  },
  leftAction: {
    backgroundColor: '#497AFC',
    justifyContent: 'center',
    // This should be the same as your attribute row height
    height: 70,
  },
  actionText: {
    color: '#FFF',
    fontWeight: '600',
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#4B0082',
  },
  swipeableContainer: {
    flex: 1,
  },
  productSwipeablePage: {
    // The width is set dynamically to match the screen width
    flex: 1, // Ensure that it takes up the full height available
    // Remove paddingHorizontal if you have it, as it would add extra width
  },
  productImage: {
    width: '100%', // Make sure the image takes the full width of the page
    height: 200, // You might need to adjust this based on your layout
    resizeMode: 'contain', // Adjust this as needed to 'cover' or other values
  },
});
