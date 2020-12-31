import React from 'react';
import {Dimensions, ScrollView, StyleSheet} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {Heading, Title, Subtitle} from '../components/Heading';

import {FULLSTACK, INCLUDES} from '../constants/data';

const {width} = Dimensions.get('screen');

const Fullstack = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <Subtitle>
        Whether you have a vision or just the fragments of an idea,
        IndiaProcess.com is there to tailor a website to suit you. We specialize
        in blending tried-and-true layouts and themes with your ideas and needs
        in order to create a platform that works for you and will attract web
        traffic.
      </Subtitle>
      {FULLSTACK.map((item) => (
        <Card>
          <Icon name={item.icon} type="ionicon" reverse />
          <Title>{item.title}</Title>
          <Subtitle>{item.subtitle}</Subtitle>
        </Card>
      ))}
      <Heading>Features Including</Heading>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {INCLUDES.map((item, index) => (
          <Card containerStyle={styles.containerStyle}>
            <Icon name={item.icon} type="ionicon" size={35} />
            <Title>{item.title}</Title>
            <Subtitle>{item.subtitle}</Subtitle>
          </Card>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: width - 16,
  },
});

export default Fullstack;
