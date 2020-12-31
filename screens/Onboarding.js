import React, {useCallback, memo, useRef, useState} from 'react';
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import {Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('screen');

const slideList = [
  {
    id: 1,
    image: require('../src/images/onboarding1.png'),
    title: 'Web Development',
    subtitle: 'We provide web development',
  },
  {
    id: 2,
    image: require('../src/images/onboarding2.png'),
    title: 'Mobile App development',
    subtitle: 'We provide mobile app development',
  },
  {
    id: 3,
    image: require('../src/images/onboarding2.png'),
    title: 'Software Development',
    subtitle: 'Software solutions',
  },
];

const Slide = memo(({data}) => (
  <View style={styles.slide}>
    <Image
      source={data.image}
      style={styles.slideImage}
      resizeMode={'contain'}
    />
    <Text style={styles.slideTitle}>{data.title}</Text>
    <Text style={styles.slideSubtitle}>{data.subtitle}</Text>
  </View>
));

function Pagination({index}) {
  return (
    <View style={styles.pagination} pointerEvents="none">
      {slideList.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

export default function Carousel({navigation}) {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    // eslint-disable-next-line no-shadow
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = distance > 0.4;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback((s) => String(s.id), []),
    getItemLayout: useCallback(
      // eslint-disable-next-line no-shadow
      (_, index) => ({
        index,
        length: width,
        offset: index * width,
      }),
      [],
    ),
  };

  const renderItem = useCallback(({item}) => <Slide data={item} />, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={slideList}
        style={styles.carousel}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <Pagination index={index} />
      <Button
        onPress={() => navigation.navigate('App')}
        type="clear"
        title="Go"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  slide: {
    width: width,
    alignItems: 'center',
  },
  slideImage: {width: width, height: height - width},
  slideTitle: {fontSize: 24},
  slideSubtitle: {fontSize: 18},

  pagination: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paginationDot: {
    width: 18,
    height: 18,
    borderRadius: 4,
    marginLeft: 10,
  },
  paginationDotActive: {backgroundColor: 'blue'},
  paginationDotInactive: {backgroundColor: 'gray'},
});
