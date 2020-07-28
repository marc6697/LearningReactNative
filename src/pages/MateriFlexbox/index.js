import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';

// class MateriFlexbox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('->>> constructor');
//     this.state = {
//       subscriber: 2000,
//     };
//   }

//   componentDidMount() {
//     console.log('->>> componenet did mount');
//     setTimeout(() => {
//       this.setState({subscriber: 50000});
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('->>> component did update');
//   }
//   render() {
//     console.log('->>> render');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: 'grey',
//             alignItems: 'flex-start',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{backgroundColor: 'red', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'green', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
//         </View>

//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <Text>Home</Text>
//           <Text>About</Text>
//           <Text>Contact us</Text>
//         </View>
//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//           <Image
//             source={{uri: 'https://placeimg.com/100/100/people'}}
//             style={{width: 100, height: 100, borderRadius: 100}}
//           />
//           <View style={{flexDirection: 'column', marginStart: 20}}>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//               Johnson Olsen
//             </Text>
//             <Text>{this.state.subscriber} Subscriber</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const MateriFlexbox = () => {
  const [subscriber, setSubscriber] = useState(100);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setSubscriber(400);
    }, 5000);
    return () => {
      console.log('did update');
    };
  }, [subscriber]);

  // useEffect(() => {
  //   console.log('did update');
  //   setTimeout(() => {
  //     setSubscriber(400);
  //   }, 5000);
  // }, [subscriber]);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'grey',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: 'red', width: 50, height: 50}} />
        <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
        <View style={{backgroundColor: 'green', width: 50, height: 50}} />
        <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Contact us</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{uri: 'https://placeimg.com/100/100/people'}}
          style={{width: 100, height: 100, borderRadius: 100}}
        />
        <View style={{flexDirection: 'column', marginStart: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Johnson Olsen</Text>
          <Text>{subscriber} Subscriber</Text>
        </View>
      </View>
    </View>
  );
};

export default MateriFlexbox;
