import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

//components
import {Header} from '../components';
import CustomDrawerContent from './Menu';

//screens
import Home from '../screens/Home';
import About from '../screens/About';
import Services from '../screens/Services';
import Contact from '../screens/Contact';
import SplashScreen from '../screens/SplashScreen';
import Onboarding from '../screens/Onboarding';

//services
import Web from '../screens/Web';
import Mobile from '../screens/Mobile';
import Fullstack from '../screens/Fullstack';
import Software from '../screens/Software';
import Digital from '../screens/Digital';
import Test from '../screens/Test';

//navigator
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="screen" mode="card">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({navigation}) => (
            <Header {...props} navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function AboutStack(props) {
  return (
    <Stack.Navigator initialRouteName="About" headerMode="screen" mode="card">
      <Stack.Screen
        name="About"
        component={About}
        options={{
          header: ({navigation}) => (
            <Header {...props} navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function ServicesStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Services"
      headerMode="screen"
      mode="card">
      <Stack.Screen
        name="Services"
        component={Services}
        options={{
          header: ({navigation}) => (
            <Header {...props} navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="Web"
        component={Web}
        options={{
          header: ({navigation}) => (
            <Header {...props} navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="Mobile"
        component={Mobile}
        options={{
          header: ({navigation}) => (
            <Header {...props} navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="Fullstack"
        component={Fullstack}
        options={{
          header: ({navigation}) => (
            <Header {...props} navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="Software"
        component={Software}
        options={{
          header: ({navigation}) => (
            <Header {...props} navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="Digital"
        component={Digital}
        options={{
          header: ({navigation}) => (
            <Header {...props} navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function ContactStack(props) {
  return (
    <Stack.Navigator initialRouteName="Contact" headerMode="screen" mode="card">
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          header: ({navigation}) => (
            <Header {...props} navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      // eslint-disable-next-line react-native/no-inline-styles
      drawerStyle={{
        backgroundColor: 'white',
        width: 240,
        flex: 1,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About" component={AboutStack} />
      <Drawer.Screen name="Services" component={ServicesStack} />
      <Drawer.Screen name="Contact" component={ContactStack} />
    </Drawer.Navigator>
  );
}

export default function OnboardingStack() {
  return (
    <Stack.Navigator initialRouteName="Splash" headerMode="none">
      {/**<Stack.Screen name="Test" component={Test} />*/}
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen
        name="App"
        component={AppStack}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}
