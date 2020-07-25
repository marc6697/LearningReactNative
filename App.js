import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingRNComponent from './StylingRNComponent';
const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingRNComponent />
      </ScrollView>
    </View>
  );
};

export default App;
