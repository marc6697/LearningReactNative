import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import mekbuk from '../../assets/image/Macbook-Pro.png';

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story judul="Haha" gambar={mekbuk} />
          <Story judul="Hihi" />
          <Story judul="Huhu" gambar={mekbuk} />
          <Story judul="Hehe" />
          <Story judul="Haha" gambar={mekbuk} />
          <Story judul="Hihi" />
          <Story judul="Huhu" gambar={mekbuk} />
          <Story judul="Hehe" />
        </View>
      </ScrollView>
    </View>
  );
};

const Story = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={props.gambar}
        style={{
          width: 80,
          height: 80,
          backgroundColor: 'pink',
          borderRadius: 80 / 2,
        }}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
