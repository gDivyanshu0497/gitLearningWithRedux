
import React, { useState } from 'react';
import {View,StyleSheet,Text,TouchableOpacity,TextInput} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { buy_cake } from '../components/actions/cakeAction';


const func_cake = ({route}) => {
    const [number,setNumber] = useState(1)
    const cake_quantity = useSelector((state) => state.cake.no_of_cake)
    const dispatch = useDispatch()
    return(
        <View style =  {styles.container}>
            <Text style = {{color : "097bb0",fontSize : 25}}>Total Number of Cake:{cake_quantity}</Text>
            <Text>{route.params.Param}</Text>
            
            <TouchableOpacity style = {styles.touch_button} onPress={() => dispatch(buy_cake())}>
                <Text style = {styles.text}>Buy Cake</Text>
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
        margin : 10,
        backgroundColor : "#097bb0",
        borderRadius : 25,
    },
    text : {
        color : "#fff",
        textAlign : "center",
        fontSize : 15,
        marginVertical: 11
    },
    text_input : {
        height: 40,
        margin: 20,
        borderWidth: 1,
        padding : 12
    }

})
export default func_cake;