import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import imgMacbook from '../../assets/image/Macbook-Pro.png';

const StylingComponent = () => {
  return (
    <View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          borderWidth: 2,
          borderColor: 'red',
          borderRadius: 20,
        }}
      />
      <Text style={styles.Text}>Styling Component</Text>

      <View
        style={{
          padding: 12,
          backgroundColor: '#f2f2f2',
          width: 200,
          borderRadius: 20,
        }}>
        <Image
          source={imgMacbook}
          style={{
            width: 168,
            height: 107,
            backgroundColor: 'white',
            borderRadius: 10,
          }}
        />
        <Text style={{fontSize: 13, fontWeight: 'bold', marginTop: 16}}>
          New Macbook Pro 2020
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            marginTop: 16,
            color: 'orange',
          }}>
          Rp. 30.000.000
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: '300',
            marginTop: 10,
            color: '#000',
          }}>
          Jakarta Selatan
        </Text>
        <View
          style={{
            backgroundColor: '#6fcf97',
            paddingVertical: 6,
            marginTop: 20,
            borderRadius: 100,
          }}>
          <Text
            style={{
              fontSize: 13,
              color: '#fff',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginStart: 20,
    marginTop: 40,
  },
});

export default StylingComponent;
