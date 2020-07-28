import React, {Component} from 'react';
import {View, TextInput, Text, Image} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#f1c40f'}} />
      <Text>ASKJDKJASDKJAJSKJ</Text>
      <Text>askdoaskodakds</Text>
      <Text>12312312312312</Text>
      <Danas />
      <Photo />
      <TextInput style={{borderWidth: 90}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Danas = () => {
  return <Text> Danas Gansasasa</Text>;
};

const Photo = () => {
  return (
    <View>
      <Image
        source={{uri: 'https://placeimg.com/100/100/tech'}}
        style={{width: 100, height: 100}}
      />
    </View>
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Component from class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/people'}}
          style={{width: 100, height: 100}}
        />
        <Text style={{color: 'red', fontSize: 20}}>Ini ashdahsd</Text>
      </View>
    );
  }
}

export default SampleComponent;
