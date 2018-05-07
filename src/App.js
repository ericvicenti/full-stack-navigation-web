import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import uuid from 'uuid/v1';

import { createNavigator } from '@react-navigation/react-navigation-experiment-core';
const preso = [];

const createFlowNavigator = (flowRoutes, config = {}) => {
  debugger;
  createNavigator;
};

const createTitleSlide = title => {
  const routeName = `TitleSlide-${uuid()}`;
  class TitleSlide extends React.Component {
    static routeName = routeName;
    render() {
      return (
        <View>
          <Text>{title}</Text>
        </View>
      );
    }
  }
  return TitleSlide;
};

const createMainTitleSlide = createTitleSlide;

preso.push(createMainTitleSlide('Full Stack Navigation'));
preso.push(createTitleSlide('Full Stack Navigation'));
preso.push(createTitleSlide('Full Stack Navigation'));

const App = createFlowNavigator(preso);

// class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.box}>
//         <Text style={styles.text}>Hello, world!</Text>
//         <Text style={styles.text}>Hello, world!</Text>
//         <Text style={styles.text}>Hello, world!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   box: { padding: 10, borderWidth: 10, borderColor: 'blue' },
//   text: { fontWeight: 'bold' },
// });

export default App;
