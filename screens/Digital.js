import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import {Card} from 'react-native-elements';

import {Heading, Title, Subtitle} from '../components/Heading';
import {DIGITAL} from '../constants/data';

const Digital = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Heading>
        The concept behind digital marketing works is pretty simple
      </Heading>
      {DIGITAL.map((item, index) => (
        <Card key={index}>
          <Title>{item.title}</Title>
          <Subtitle>{item.subtitle}</Subtitle>
        </Card>
      ))}
    </ScrollView>
  );
};

export default Digital;
