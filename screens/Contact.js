/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation';
import {Card, Button, Input} from 'react-native-elements';

import {Heading, Title, Subtitle} from '../components/Heading';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
      },
      (error) => Alert.alert(error.message),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <View style={styles.container}>
        <Heading>Contact Us</Heading>
        <Card>
          <Input
            placeholder="Your name"
            value={name}
            onChangeText={(name2) => setName(name2)}
            leftIcon={{name: 'user', type: 'feather'}}
          />
          <Input
            placeholder="Your email"
            value={email}
            onChangeText={(email2) => setEmail(email2)}
            leftIcon={{name: 'email', type: 'entypo'}}
          />
          <Input
            placeholder="Your mobile"
            value={mobile}
            onChangeText={(mobile2) => setMobile(mobile2)}
            leftIcon={{name: 'mobile', type: 'entypo'}}
          />
          <Input
            placeholder="Message"
            value={message}
            onChangeText={(message2) => setMessage(message2)}
            leftIcon={{name: 'message', type: 'entypo'}}
          />

          <Button title="Submit" type="outline" />
        </Card>
        <Card>
          <Title>Address</Title>
          <Subtitle>Adhiraj Information Technologies Pvt Ltd.</Subtitle>
          <Subtitle>
            B-6, Block B, Sector 4, Noida, Uttar Pradesh 201301
          </Subtitle>
          <Subtitle>Mobile: +91 921-333-7799</Subtitle>
          <Subtitle>Email: sales@indiaprocess.com</Subtitle>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  map: {
    height: 400,
    marginTop: 80,
  },
  heading: {
    textAlign: 'center',
    padding: 10,
  },
});

export default Contact;
