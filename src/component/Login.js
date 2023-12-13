import React, { useState } from 'react';
import {View,Image,TextInput,Pressable,Text} from 'react-native';
import Home from './Home'
import MenuApp from './MenuApp';
import {account} from '../data/index'
 function Login({navigation}){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [messenger,setMessenger]=useState('')
    const dangNhap=()=>{
      const checkAcc=account.find(item=>item.email===email && item.password===password)
      if(checkAcc){
        setMessenger('Đăng nhập thành công')
        navigation.navigate('Electronics')
      }else{
        setMessenger('Đăng nhập thất bại')
      }
    }
return (
    <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItem:'center'}}>
        <View>
            <Text>{messenger}</Text>
        <TextInput
        style={{height:40,borderColor:'gray',borderWidth:1}}
       placeholder='Enter your email address'
       value={email}
       onChangeText={(Text)=>setEmail(Text)}
       />
        </View>
       <View>
       <TextInput
        style={{height:40,borderColor:'gray',borderWidth:1}}
       placeholder='Enter your password'
       value={password}
       secureTextEntry={true}
       onChangeText={(Text)=>setPassword(Text)}
       />
       </View>
       <View style={{justifyContent:'center',alignItems:'center',alignContent:'center'}}>
       <Pressable style={{
        height:40,
        width:300,
        borderRadius:10,
        backgroundColor:"#00CCFF",
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center'}}
        >
        <Text onPress={dangNhap}>Continue</Text>
       </Pressable>
       </View>
    </View>
);
};
export default Login;