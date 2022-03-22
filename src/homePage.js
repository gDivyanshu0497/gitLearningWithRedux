
import React from "react";
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';


const HomePage = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <Text>HomePage</Text>
            <TouchableOpacity style = {styles.touch_button} 
            onPress={() => navigation.navigate("Cake",{
                Param: "You Are in Cake Section",
            })}
            >
                <Text style = {styles.text}> Go to Cake Section</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.touch_button}
                                onPress={() => navigation.navigate("IceCream",{
                                    Param : "You are in Ice-Cream Section",
                                })}>
                <Text style = {styles.text}>Go to IceCream Section</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.touch_button} onPress={() => navigation.navigate("user",{
                Param : "User Details"
            })}>
             <Text style = {styles.text}>User Section</Text>

            </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    touch_button : {
        height : 50,
        width : 200,
        margin : 20,
        backgroundColor : "#097bb0",
        borderRadius : 25,
    },
    text : {
        color : "#fff",
        textAlign : "center",
        fontSize : 15,
        marginVertical: 11
    }
})
export default HomePage