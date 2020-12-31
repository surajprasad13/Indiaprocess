import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Card} from 'react-native-elements';

import {Heading, Subtitle, Title} from '../components/Heading';

function About() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      bounces={false}>
      <Heading>About Us</Heading>
      <Card>
        <Title>Company</Title>
        <Subtitle>
          We are product thinkers who love building disruptive digital products
          and see our customers succeed. We are a software product development
          company that helps global enterprises address their business execution
          demand and challenges with implementation of mission-critical
          applications. We build scalable, secure software products in web,
          mobile app. Software Product Engineering App Development. Digital
          Transformation User Experience Design Digital Transformation
          Technology Consulting
        </Subtitle>
      </Card>
      <Card>
        <Title>Vision</Title>
        <Subtitle>
          We intend to provide our customers with the best online shopping
          experience from beginning to end, with a smart, searchable website,
          easy-to-follow instructions, clear and secure payment methods, and
          fast, quality delivery.
        </Subtitle>
      </Card>
      <Card>
        <Title>Partner with us</Title>
        <Subtitle>
          if you are an IT or web software development company and are eager to
          expand your operations here in India, then we can act as your own
          development center abroad. So, stop worrying about infrastructure,
          staff entitlements, personnel management, recruitment, software
          upgrade, and regulatory measures, instead, simply make The One
          Technologies your outsourcing partner and start gaining full advantage
          from day one. Our expert team of developers will work on your behalf
          while you benefit from our enhanced skills, business acumen, and
          significantly lower costs
        </Subtitle>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default About;
