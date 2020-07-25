import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './pages/Home/index';
import Points from './pages/Points/index';
import Details from './pages/Details/index';

const Appstack = createStackNavigator();


const Routes = () => {
    return(
        <NavigationContainer>
            <Appstack.Navigator
                headerMode="none"
            >
                <Appstack.Screen name="Home" component={Home} />
                <Appstack.Screen name="Points" component={Points} />
                <Appstack.Screen name="Details" component={Details} />
            </Appstack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;