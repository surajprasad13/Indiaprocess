/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Icon, ListItem} from 'react-native-elements';
import Theme from '../constants/Theme';

class DrawerItem extends Component {
  renderIcon = () => {
    const {title, focused} = this.props;
    switch (title) {
      case 'Home':
        return <Icon name="home" color={focused ? 'green' : 'black'} />;

      case 'About':
        return <Icon name="info" color={focused ? 'green' : 'black'} />;

      case 'Services':
        return <Icon name="settings" color={focused ? 'green' : 'black'} />;

      case 'Contact':
        return <Icon name="contacts" color={focused ? 'green' : 'black'} />;

      default:
        return null;
    }
  };

  render() {
    const {focused, title, navigation} = this.props;
    return (
      <TouchableOpacity onPress={() => navigation.navigate(title)}>
        <ListItem
          bottomDivider
          containerStyle={[
            styles.defaultStye,
            focused ? styles.activeStyle : null,
          ]}>
          <View>{this.renderIcon()}</View>
          <ListItem.Content>
            <Text h3 style={{color: focused ? 'black' : 'white', fontSize: 25}}>
              {title}
            </Text>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultStye: {
    backgroundColor: Theme.COLORS.BACKGROUND,
  },
  activeStyle: {
    backgroundColor: 'white',
  },
});
export default DrawerItem;
