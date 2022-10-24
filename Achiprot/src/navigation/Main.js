import  React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashImage from '../screens/SplashImage';
import Home from '../screens/Home';
const Stack = createNativeStackNavigator();



const Main = () =>{
    return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={SplashImage} options={{header: () =>null}}/>
            <Stack.Screen name="Home" component={Home} options={{header: () =>null}}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}
export default Main