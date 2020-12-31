/* eslint-disable no-unused-vars */
import React, {Component} from 'react';

import {
  View,
  StyleSheet,
  Animated,
  Text,
  Dimensions,
  PanResponder,
} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

const {height} = Dimensions.get('screen');

import {TEST} from '../constants/data';

class Deck extends Component {
  constructor(props) {
    super(props);
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({x: gesture.dx, y: gesture.dy});
      },
      onPanResponderRelease: () => {},
    });
    this.state = {panResponder, position};
  }

  getCardStyle() {
    return {
      ...this.state.position.getLayout(),
      transform: [{rotate: '-45deg'}],
    };
  }

  renderCards() {
    return this.props.data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            key={index}
            style={this.getCardStyle()}
            {...this.state.panResponder.panHandlers}>
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }
      return this.props.renderCard(item);
    });
  }

  render() {
    return <View>{this.renderCards()}</View>;
  }
}

class Test extends Component {
  renderCard = (item) => {
    return (
      <Card key={item.id}>
        <Card.Title>{item.title}</Card.Title>
        <Card.Image source={{uri: item.uri}} />
      </Card>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Deck data={TEST} renderCard={this.renderCard} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

export default Test;
