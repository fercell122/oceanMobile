import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../pages/landing';
import Nomear from '../pages/Nomear/index'
import Habilidades from '../pages/Habilidades/index'
import Parabens from '../pages/Parabens/index'
import Final from '../pages/Final/index'




const {Navigator, Screen} = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Landing" component={Landing} />
                <Screen name="Nomear" component={Nomear} />
                <Screen name="Habilidades" component={Habilidades} />
                <Screen name="Parabens" component={Parabens} />
                <Screen name="Final" component={Final} />
                
            </Navigator>
        </NavigationContainer>
    );
}
export default AppStack;