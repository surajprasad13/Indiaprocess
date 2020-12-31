import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-elements';

import {Heading} from '../components/Heading';

const {width} = Dimensions.get('screen');
const Services = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Heading>Services</Heading>
        <TouchableOpacity onPress={() => navigation.navigate('Web')}>
          <Card containerStyle={styles.containerStyle}>
            <Card.Title>Web Development</Card.Title>
            <Image
              source={require('../src/images/onboarding1.png')}
              resizeMode={'contain'}
              style={styles.image}
            />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Mobile')}>
          <Card containerStyle={styles.containerStyle}>
            <Card.Title>Mobile App Development</Card.Title>
            <Image
              source={require('../src/images/onboarding2.png')}
              resizeMode={'contain'}
              style={styles.image}
            />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Software')}>
          <Card containerStyle={styles.containerStyle}>
            <Card.Title>Software Development</Card.Title>
            <Image
              source={require('../src/images/onboarding1.png')}
              resizeMode={'contain'}
              style={styles.image}
            />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Fullstack')}>
          <Card containerStyle={styles.containerStyle}>
            <Card.Title>Full Stack Development</Card.Title>
            <Image
              source={require('../src/images/onboarding1.png')}
              resizeMode={'contain'}
              style={styles.image}
            />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Digital')}>
          <Card containerStyle={styles.containerStyle}>
            <Card.Title>Digital Marketing</Card.Title>
            <Image
              source={require('../src/images/onboarding1.png')}
              resizeMode={'contain'}
              style={styles.image}
            />
          </Card>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
    width: width - 50,
    alignItems: 'center',
  },
  containerStyle: {
    alignItems: 'center',
  },
});

export default Services;
