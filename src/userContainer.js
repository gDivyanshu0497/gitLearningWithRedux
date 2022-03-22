import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

function userContainer({route}) {
  return (
    <View>
        <Text>Welcome to user Container</Text>
        <Text>{route.params.Param}</Text>
    </View>
  )
}

export default userContainer