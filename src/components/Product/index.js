import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import imgMacbook from '../../assets/image/Macbook-Pro.png';

const Product = (props) => {
  return (
    <View>
      <View style={styles.wrapper}>
        <Image source={imgMacbook} style={styles.imgProduct} />
        <Text style={styles.ProductName}>New Macbook Pro 2020</Text>
        <Text style={styles.productPrice}>Rp. 30.000.000</Text>
        <Text style={styles.productLocation}>Jakarta Selatan</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>BELI</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Product;

const styles = StyleSheet.create({
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginStart: 20,
    marginTop: 40,
  },

  wrapper: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    width: 200,
    borderRadius: 20,
  },
  imgProduct: {
    width: 168,
    height: 107,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  ProductName: {fontSize: 13, fontWeight: 'bold', marginTop: 16},
  productPrice: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 16,
    color: 'orange',
  },
  productLocation: {
    fontSize: 13,
    fontWeight: '300',
    marginTop: 10,
    color: '#000',
  },
  buttonWrapper: {
    backgroundColor: '#6fcf97',
    paddingVertical: 6,
    marginTop: 20,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 13,
    color: '#fff',
    textAlign: 'center',
  },
});
