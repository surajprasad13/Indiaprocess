import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

const Heading = ({children}) => {
  return <Text style={styles.heading}>{children}</Text>;
};

const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

const Subtitle = ({children}) => {
  return <Text style={styles.subtitle}>{children}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    color: '#3366ff',
    textAlign: 'center',
    padding: 10,
    fontSize: 25,
  },
  title: {
    fontSize: 20,
    padding: 10,
  },
  subtitle: {
    fontSize: 14,
    padding: 10,
  },
});

export {Heading, Title, Subtitle};
