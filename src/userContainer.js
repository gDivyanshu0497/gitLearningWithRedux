import React,{useEffect} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { fetch_users } from '../components/actions/userAction';
import { useDispatch,useSelector } from 'react-redux';


function userContainer({route}) {
  const users_data = useSelector((state) => state.user)
  // console.log("users_data",users_data)
  const dispatch = useDispatch()
  const { users } = users_data;
  useEffect(() => {
    dispatch(fetch_users())
  },[])
  console.log("Users-value",users_data.users)
  return (
    <View>
        <Text>Welcome to user Container</Text>
        <Text>{route.params.Param}</Text>
          {users_data.loading ? <Text>Loading</Text>:
          users_data.users.map((value) => (

            <Text>`{value.name}`</Text>)
            
          )}
        </View>
         
  )
}

export default userContainer