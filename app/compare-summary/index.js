import { Link } from "expo-router";
import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ComparisonPage = () => {
  const navigation = useNavigation();
  const products = [
    {
      name: 'Sony - a7',
      imageUri: require('../../assets/Image.png'), // Replace with actual image path
      matchPercentage: '94%',
      weight: '240g',
      batteryLife: '3.5h',
      isLensAdaptable: true,
    },
    {
      name: 'Nikon - Zfc',
      imageUri: require('../../assets/Image-1.png'), // Replace with actual image path
      matchPercentage: '100%',
      weight: '150g',
      batteryLife: '4h',
      isLensAdaptable: true,
    },
    {
      name: 'Canon - EOS RP',
      imageUri: require('../../assets/Image-2.png'), // Replace with actual image path
      matchPercentage: '52%',
      weight: '360g',
      batteryLife: '2h',
      isLensAdaptable: false,
    },
  ];

  const renderCheckOrCross = (isTrue) => (
    <Text style={styles.checkCross}>{isTrue ? '✓' : '✕'}</Text>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.headerIcon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Comparing products</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.headerIcon}>🛒</Text>
          </TouchableOpacity>
        </View>

        {/* Product Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productsContainer}>
          {products.map((product, index) => (
            <View key={index} style={styles.productCard}>
              <Image style={styles.productImage} source={product.imageUri} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.matchPercentage}>{product.matchPercentage}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Add to cart</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Features Comparison */}
        <View style={styles.featuresContainer}>
          {products.map((product, index) => (
            <View key={index} style={styles.featureRow}>
              <Text style={styles.featureTitle}>Adaptable to lens</Text>
              <View style={styles.featureValue}>{renderCheckOrCross(product.isLensAdaptable)}</View>
              <Text style={styles.featureTitle}>Weight</Text>
              <Text style={styles.featureValue}>{product.weight}</Text>
              <Text style={styles.featureTitle}>Battery Life</Text>
              <Text style={styles.featureValue}>{product.batteryLife}</Text>
            </View>
          ))}
        </View>

        {/* Bottom Navigation Bar */}
        <View style={styles.bottomNavigation}>
          {/* Navigation icons */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#4B0082',
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#6A5ACD',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcon: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  productsContainer: {
    // styles for the horizontal scrollview container
  },
  productCard: {
    alignItems: 'center',
    width: 150,
    margin: 10,
    backgroundColor: '#6A5ACD',
    borderRadius: 8,
    padding: 8,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  matchPercentage: {
    color: '#FFFFFF',
  },
  addButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
  },
  addButtonText: {
    color: '#4B0082',
  },
  featuresContainer: {
    // styles for features container
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#6A5ACD',
    marginVertical: 5,
  },
  featureTitle: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  featureValue: {
    alignItems: 'center',
    flex: 1,
  },
  checkCross: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#6A5ACD',
  },
  // ... other styles ...
});

export default ComparisonPage;
