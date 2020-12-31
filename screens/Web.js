/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, Image, StyleSheet, Dimensions} from 'react-native';
import {Card} from 'react-native-elements';
import {Heading, Subtitle, Title} from '../components/Heading';

const {width} = Dimensions.get('screen');

const Web = () => {
  return (
    <ScrollView>
      <Heading>Web Development</Heading>
      <View style={styles.imageContainer}>
        <Image
          source={require('../src/images/web2.png')}
          resizeMode={'contain'}
          style={{width: width, height: 400}}
        />
      </View>
      <Card containerStyle={styles.containerStyle}>
        <Title>Web Development</Title>
        <Subtitle>
          Whether you have a vision or just the fragments of an idea,
          IndiaProcess.com is there to tailor a website to suit you. We
          specialize in blending tried-and-true layouts and themes with your
          ideas and needs in order to create a platform that works for you and
          will attract web traffic.
        </Subtitle>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStyle: {
    alignItems: 'center',
  },
});

export default Web;
