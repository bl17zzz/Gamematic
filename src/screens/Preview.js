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
      <Text style={styles.detail} >Name : {item.name}</Text>
      <Text style={styles.detail} >Genre : {item.genre}</Text>
      <Text style={styles.name} >Detail : {item.detail}</Text>
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
      
    },
    name:{
      color:'black',
      fontSize:15,
      fontWeight:'bold'
    },
    detail:{
      color:'black',
      fontSize:20,
      fontWeight:'bold',

    }
});
