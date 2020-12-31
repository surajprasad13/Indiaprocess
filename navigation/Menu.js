/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Drawer as DrawerCustomItem} from '../components';
import Theme from '../constants/Theme';

const {height} = Dimensions.get('screen');

function CustomDrawerContent({drawerPosition, navigation, focused, state}) {
  const insets = useSafeAreaInsets();

  const screens = ['Home', 'About', 'Services', 'Contact'];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <Image
          source={require('../src/images/icon.png')}
          resizeMode={'contain'}
          style={{width: 200, height: 200}}
        />
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={[
          {
            paddingTop: insets.top,
            paddingLeft: drawerPosition === 'left' ? insets.left : 0,
            paddingRight: drawerPosition === 'right' ? insets.right : 0,
          },
        ]}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        {screens.map((item, index) => {
          return (
            <DrawerCustomItem
              title={item}
              key={index}
              navigation={navigation}
              focused={state.index === index ? true : false}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    backgroundColor: Theme.COLORS.BACKGROUND,
  },
});

export default CustomDrawerContent;
