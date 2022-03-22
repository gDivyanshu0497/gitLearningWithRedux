

import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import {buy_iceCream} from "../components/actions/iceCreamAction"


const func_ice = ({route}) => {
    const ice_quantity = useSelector((state) => state.ice.no_of_iceCream)
    const dispatch = useDispatch()
    return(
        <View style =  {styles.container}>
            <Text style = {{color : "097bb0",fontSize : 25,marginVertical:20}}>{ice_quantity}</Text>
            <Text>{route.params.Param}</Text>
            <TouchableOpacity style = {styles.touch_button} onPress={() => dispatch(buy_iceCream())}>
                <Text style = {styles.text}>Buy Ice-Cream</Text>
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
export default func_ice;

// func_ice