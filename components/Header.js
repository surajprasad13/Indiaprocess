import React, {Component} from 'react';
import {Linking} from 'react-native';
import {Icon, Header, Text} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LeftComponent = ({navigation}) => (
  <TouchableOpacity onPress={() => navigation.openDrawer()}>
    <Icon name="menu" color="white" />
  </TouchableOpacity>
);

const CenterComponent = () => (
  // eslint-disable-next-line react-native/no-inline-styles
  <Text h3 h3Style={{color: 'white'}}>
    India Process
  </Text>
);

const RightComponent = () => (
  <TouchableOpacity
    onPress={() =>
      Linking.openURL('https://api.whatsapp.com/send?phone=+919891214302')
    }>
    <Icon name="logo-whatsapp" type="ionicon" color="white" />
  </TouchableOpacity>
);

class HeaderComponent extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Header
        leftComponent={<LeftComponent navigation={navigation} />}
        centerComponent={<CenterComponent />}
        rightComponent={<RightComponent />}
      />
    );
  }
}

export default HeaderComponent;
