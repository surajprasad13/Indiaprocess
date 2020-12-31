/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, ScrollView, View, StyleSheet, Dimensions} from 'react-native';
import {Card} from 'react-native-elements';
import {Heading, Title, Subtitle} from '../components/Heading';

const {width} = Dimensions.get('screen');

const Mobile = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Heading>Mobile App Development</Heading>
      <View style={styles.imageContainer}>
        <Image
          source={require('../src/images/mobile.png')}
          resizeMode={'contain'}
          style={{width: width, height: 380}}
        />
      </View>
      <Card containerStyle={styles.containerStyle}>
        <Title>
          Transform your business ideas into mobile applications with
          IndiaProcess. Mobile application development arena being one of the
          most innovative spaces in the industry today holds the prospect for
          the future of business. We make mobile apps for multiple-platforms
          like Android, iOS and cross-platform solutions in React Native, XCode,
          Android Studio. Our mobile app development team has a long streak in
          releasing foolproof, quality applications in the Google Playstore and
          iOS app stores. We also provide custom mobile app solutions to restore
          any setbacks in your everyday businesses
        </Title>
      </Card>
      <Card containerStyle={styles.containerStyle}>
        <Image source={require('../src/images/concept4.png')} />
        <Title>Hybrid - Cross-Platform App Development</Title>
        <Subtitle>
          The flexibility provided by one-code-fits-all is driving companies all
          over the world towards cross-platform app development. Being a
          feasible technology that saves development time and cost while
          building truly native apps, it is the future of mobile app
          development. We at IndiaProcess.com are enthusiastic when it comes to
          investing our skills in forefront technologies. So we have a dedicated
          cross-platform development team to provide our clients with a superior
          experience.
        </Subtitle>
      </Card>
      <Card containerStyle={styles.containerStyle}>
        <Image
          source={require('../src/images/react-native-img.png')}
          resizeMode={'contain'}
          style={{width: 350, height: 300}}
        />
        <Title>React Native Application Development</Title>
        <Subtitle>
          React Native the brainchild of Facebook, is redefining the future of
          mobile app development. If you are looking for a faster app
          development platform that would turn your business overnight, then our
          React Native app development team will fit you perfectly. Our
          developers, with their extensive experience in building first-class
          native apps in android and iOS platforms, will take charge of your
          development process. You are saving the time and cost of hiring
          separate project teams to work on your two different native apps. Our
          Native mobile app developers will help start afresh or even take out
          old broken codes to fix your current business.
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
  containerStyle: {},
});

export default Mobile;
