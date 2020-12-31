/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ListItem, Slider, Card} from 'react-native-elements';

import {Heading, Subtitle, Title} from '../components/Heading';

const {width} = Dimensions.get('screen');

import {HOME, SKILLS, LATEST} from '../constants/data';

class Home extends React.Component {
  renderItem = ({item, index}) => {
    return (
      <ListItem bottomDivider key={item.id}>
        <ListItem.Content>
          <Title>
            {item.id}.{item.title}
          </Title>
          <Subtitle>{item.subtitle}</Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };
  render() {
    return (
      <ScrollView
        style={{flex: 1, backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Heading h3>IndiaProcess.com</Heading>
          <Subtitle>
            A Leading solution provider for Web and IT Services.
            IndiaProcess.com is a leading IT company promoted by a group of
            highly experienced professionals dedicated towards providing a
            hand-holding Solutions under one roof. IndiaProcess.com core
            strengths lie inWebsite Designing, Website Development, Digital
            Marketing, ERP Software, Android & iOS Mobile Application with
            creativity and research-based approach
          </Subtitle>
        </View>
        <View style={styles.container}>
          <Image
            source={require('../src/images/sdlc.png')}
            resizeMode={'contain'}
            style={{width: width, height: 150}}
          />
          {HOME.map((item) => this.renderItem({item}))}
          <Heading>Our Skills</Heading>
          {SKILLS.map((item, index) => (
            <ListItem bottomDivider key={index}>
              <ListItem.Content>
                <Title>{item.title}</Title>
                <Slider
                  disabled
                  minimumValue={0}
                  maximumValue={100}
                  step={1}
                  value={item.percent}
                  thumbStyle={{
                    height: 10,
                    width: 10,
                    backgroundColor: 'red',
                  }}
                  style={{
                    color: 'red',
                    width: width - 30,
                  }}
                />
              </ListItem.Content>
            </ListItem>
          ))}

          <Heading>Latest Updates</Heading>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {LATEST.map((item, index) => (
              <Card key={index} containerStyle={styles.cardStyle}>
                <Image
                  source={item.image}
                  resizeMode={'contain'}
                  style={styles.image}
                />
                <Card.Title>{item.title}</Card.Title>
              </Card>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'gray',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerStyle: {
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
  cardStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
