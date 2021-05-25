import React, { useState } from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native';
import Ellipsis from '../../assets/ellipsis.png';
import Next from '../../assets/next.png';

import styles from './styles';

const Home = () => {
  const initialValue = [
    {
      checked: require('../../assets/checked.png'),
      img: require('../../assets/pregnant.png'),
      title: 'Track My Cycle',
      description: 'Predictions to increase the probability of pregnancy find.',
    },
    {
      img: require('../../assets/pad.png'),
      title: 'Track My Pregnancy',
      description: 'Keep track of my symptoms,mood and health.',
    },
    {
      checked: require('../../assets/checked.png'),
      img: require('../../assets/pregnant.png'),
      title: 'Track My Cycle',
      description: 'Predictions to increase the probability of pregnancy find.',
    },
  ];
  const [options] = useState(initialValue);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.topContainer}>
        <Image source={Ellipsis} style={styles.ellipsis} />
        <Text style={styles.skipText}>Skip</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.holaText}>Hola!</Text>
        <Text style={styles.holaText}>I am your assistant.</Text>
        <Text style={[styles.assistText, { marginTop: 20 }]}>
          To assist you all part of your body.
        </Text>
        <Text style={styles.assistText}>Select what bring you here.</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 30 }}>
          {options.map((item, index) => (
            <View
              style={[
                styles.cardContainer,
                { marginLeft: index !== 0 ? 10 : null },
              ]}>
              <View style={styles.optionsIconContainer}>
                <View style={styles.imageContainer}>
                  <Image source={item.img} style={styles.image} />
                </View>
                {item.checked && (
                  <Image source={item.checked} style={styles.checkedIcon} />
                )}
              </View>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.descriptionText}>{item.description}</Text>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.continueBtnContainer}>
          <Text>Continue</Text>
          <Image source={Next} style={styles.nextIconText} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;
