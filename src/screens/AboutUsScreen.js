import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const AboutUsScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textAbout} >About Us</Text>
      <Image source={require('../../assets/images/splash.jpg')}
        style={styles.imageAbout}
      />
      <View  style={styles.container}>
        <Text style={styles.Text}>
          Welcome to GameInfoHub, your ultimate companion for everything related to gaming! Whether you're a casual gamer, a hardcore enthusiast, or just curious about the gaming world, this app is your one-stop destination for all things gaming information.
          
         </Text>
        <Text style={styles.Text}>
        
          Key Features:

          Comprehensive Game Database: Access an extensive database of games from various platforms, including PC, console, and mobile. Find detailed information about each game, including release dates, genres, developers, and publishers.</Text>
      </View>

    </View>
  )
}

export default AboutUsScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textAbout: {
    color: 'gray',
    fontSize: 25,
    fontWeight: 'bold'
  },
  imageAbout: {
    width: 250,
    height: 250,
    borderRadius: 200
  },
  Text:{
    color: 'gray',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'justify'
  },
  container:{
   margin: 15,
   padding: 20,
   borderWidth: 3,
   borderColor: 'black',
   borderRadius: 20

  }
})