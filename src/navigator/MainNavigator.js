
// import React from 'react'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Icon } from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen'
// import ShowProductScreen from '../screens/ShowProductScreen'
import ImageZoomScreen from "../screens/ImageZoomScreen"
import EditProductScreen from "../screens/EditProductScreen"
import SplashScreen from '../screens/SplashScreen'
import DetailGenreScreen from '../screens/DetailGenre';
import AboutUsScreen from '../screens/AboutUsscreen';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNav = () => {
    return (
        <Drawer.Navigator initialRouteName="Home"
            screenOptions={{
                drawerStyle: {
                    backgroundColor: 'gray',
                    
                }, drawerLabelStyle:{
                    color: 'white'
                }

            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} options={{
                title: 'Gamematic',
                headerStyle: {
                    backgroundColor: '#35155D',
                }, headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: 'white'
                },
                drawerIcon: config => <Icon name="home" type="antdesign" />
            }} />
            <Drawer.Screen name="AboutUs" component={AboutUsScreen} options={{
                title: 'About Us',
                headerStyle: {
                    backgroundColor: '#D1E5C2'
                }, headerTitleAlign: 'center',
                drawerIcon: config => <Icon name="profile" type="antdesign" />
            }} />
        </Drawer.Navigator>
    )
}

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Drawer" component={DrawerNav} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Detail" component={DetailGenreScreen} options={{
                    title: 'Games',
                    headerTitleAlign : 'center',
                    headerStyle : {
                        backgroundColor: '#D1E5C2'
                    }
                }} />
                <Stack.Screen name="ImageZoom" component={ImageZoomScreen} options={{ headerShown: false }} />
                <Stack.Screen name="EditProduct" component={EditProductScreen} options={{
                    title: 'Edit Product',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#D1E5C2'
                    }
                }} />
                <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator