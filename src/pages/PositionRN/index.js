import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import shopcart from '../../assets/image/Cartshop.png';

const PositionRN = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cartWrapper}>
        <Image source={shopcart} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};

export default PositionRN;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    alignItems: 'center',
  },
  cartWrapper: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'black',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconCart: {width: 50, height: 50},
  text: {fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 8},
  notif: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#6fcf97',
    borderRadius: 25,
    padding: 4,
    width: 24,
    height: 24,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
