import React, {useEffect} from 'react';

import {View, StyleSheet, Image, Dimensions} from 'react-native';

import Theme from '../constants/Theme';

const {width} = Dimensions.get('screen');

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 1000);
  });
  return (
    <View style={styles.container}>
      <Image
        source={require('../src/images/icon.png')}
        resizeMode={'contain'}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.COLORS.DEFAULT,
  },
  image: {
    width: width,
    height: 200,
  },
});

export default SplashScreen;
