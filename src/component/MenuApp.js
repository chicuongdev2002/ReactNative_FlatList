import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React  from "react";
import {View,Image} from "react-native";
const Tab=createBottomTabNavigator();
import Home from "./Home";
export default function MenuApp(){
return(
    <Tab.Navigator>
        <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
            headerShown:false,
            // tabBarLabel:'Home',
            tabBarIcon:({color,size})=>(
                <Image source={require('../image/clarity_home-solid.png')} style={{width:30,height:30,tintColor:'#33FFFF'}}/>
            ),
            tabBarActiveTintColor:'#33FFFF',
        }}
        />
           <Tab.Screen 
        name="Search" 
        component={''}
        options={{
            tabBarLabel:'Search',
            tabBarIcon:({color,size})=>(
                <Image source={require('../image/search.png')} style={{width:30,height:30}}/>
            ),
           
            
        }}
        />
           <Tab.Screen 
        name="Favorite" 
        component={''}
        options={{
            tabBarLabel:'Favorite',
            tabBarIcon:({color,size})=>(
                <Image source={require('../image/mdi_heart-outline.png')} style={{width:30,height:30}}/>
            )
        }}
        />
           <Tab.Screen 
        name="Inbox" 
        component={''}
        options={{
            tabBarLabel:'Inbox',
            tabBarIcon:({color,size})=>(
                <Image source={require('../image/solar_inbox-outline.png')} style={{width:30,height:30}}/>
            )
        }}
        />
           <Tab.Screen 
        name="Account" 
        component={''}
        options={{
            tabBarLabel:'Account',
            tabBarIcon:({color,size})=>(
                <Image source={require('../image/codicon_account.png')} style={{width:30,height:30}}/>
            )
        }}
        />
    </Tab.Navigator>
);
}