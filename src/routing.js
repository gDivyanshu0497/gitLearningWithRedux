
import React from "react";
import {Text,View,StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "./homePage";
import func_ice from "./iceCreamContainer";
import func_cake from "./cakeContainer";
import userContainer from "./userContainer";
const Stack = createNativeStackNavigator();

const Routing = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerStyle : {
                    backgroundColor : "#097bb0",
                },
                headerTintColor: '#fff',
                headerTitleStyle : {
                    fontWeight: 'bold',fontSize : 20
                },
            }}
            
            >
                <Stack.Screen name = "Home" component = {HomePage}
                    />
                <Stack.Screen name = "IceCream" component = {func_ice} 
                options={{title : "Ice-Cream Section"}} />
                <Stack.Screen name = "Cake" component = {func_cake} 
                options = {{title : "Cake Section"}}
                />
                <Stack.Screen name = "user" component = {userContainer} 
                options = {{title : "User Section"}}
                />



            </Stack.Navigator>

        </NavigationContainer>
    )
}

const styles = StyleSheet.create({

})

export default Routing;