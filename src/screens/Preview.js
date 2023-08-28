import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

const Preview = props => {
  const {route} = props;
  const item = route.params.item;

  console.log(item);

  return (
    <View
        style={styles.mainContainer}
    >
        <Image
            source={item.icon}
            style={styles.imageIcon}
        />
      <Text>Name : {item.name}</Text>
      <Text>Genre : {item.genre}</Text>
      <Text>Detail : {item.detail}</Text>
    </View>
  );
};

export default Preview;

const styles = StyleSheet.create({
    imageIcon: {
        width: 200,
        height: 200,
    }, mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        margin: 10,
        padding: 20,
    }
});
