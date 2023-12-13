import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderTitle } from '@react-navigation/stack';
import Login from './src/component/Login';
import Home from './src/component/Home';
import {View,Image} from 'react-native';
import cart from './src/image/cart.png'
import avatar from './src/image/avatar.png'
import MenuApp from './src/component/MenuApp'
<div id="root"></div>
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MenuApp">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
           <Stack.Screen
          name="Electronics"
          component={MenuApp}
          options={{title:'Electronics',
            headerLeft:()=>{},
          headerRight:()=>(
            <View style={{flexDirection:'row'}}>
              <Image source={cart} style={{width:30,height:30}}/>
              <View style={{width:10}}></View>
              <View style={{backgroundColor:'#CC66FF',borderRadius:50}}>
              <Image source={avatar} style={{width:30,height:30}}/>
              </View>
            </View>
          ),
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


