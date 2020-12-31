import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Avatar, Card, Icon} from 'react-native-elements';
import {Heading, Subtitle, Title} from '../components/Heading';

const Software = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Heading>Software Development</Heading>

      <Card containerStyle={styles.containerStyle}>
        <View style={styles.icon}>
          <Icon
            reverse
            name="bulb-outline"
            type="ionicon"
            color="#517fa4"
            size={25}
          />
        </View>
        <Title>1.Portal Development</Title>
        <Subtitle>
          Create Your Portal from A to Z under One Roof.All services covered:
          consulting, branding and UX/UI design, web and mobile development,
          integrations, data analytics, testing, security, continuous support
          and evolution.
        </Subtitle>
      </Card>

      <Card containerStyle={styles.containerStyle}>
        <View style={styles.icon}>
          <Icon
            reverse
            name="bar-chart"
            type="ionicon"
            color="#517fa4"
            size={25}
          />
        </View>
        <Title>2.Customized Development</Title>
        <Subtitle>
          We specialize in developing interactive, scalable, brand-oriented, and
          business-ready custom web solutions. Our aim is to build profitable
          digital products engineered to spark creativity and boost ROI.
        </Subtitle>
      </Card>

      <Card containerStyle={styles.containerStyle}>
        <View style={styles.icon}>
          <Icon
            reverse
            name="md-color-wand-outline"
            type="ionicon"
            color="#517fa4"
            size={25}
          />
        </View>
        <Title>3.CRM and ERP</Title>
        <Subtitle>
          We develop online platforms with coding languages such as PHP,ReactJs,
          JAVASCRIPT, HTML and database servers like MySQL, MongoDB
        </Subtitle>
      </Card>
      <Card containerStyle={styles.containerStyle}>
        <View style={styles.icon}>
          <Icon
            reverse
            name="md-cog"
            type="ionicon"
            color="#517fa4"
            size={25}
          />
        </View>
        <Title>4.Tracking Portal</Title>
        <Subtitle>
          Nulla vitae libero pharetra augue. Etiam porta malesuada magna mollis
          euismod. Eget lacinia odio sem nec elit. Donec ullamcorper nulla non
          metus.
        </Subtitle>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    margin: 30,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
});

export default Software;
