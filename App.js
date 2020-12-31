import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeProvider} from 'react-native-elements';

//last commit

import Screens from './navigation/Screens';
import {theme} from './constants';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
