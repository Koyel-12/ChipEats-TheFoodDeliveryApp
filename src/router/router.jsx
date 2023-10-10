import * as React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/signIn";
import SignUpScreen from "../screens/signUp";
import ForgotPwdScreen from "../screens/forgotPwd";
import HomeScreen from "../screens/home";
import FavouritesScreen from "../screens/favourites";
import AccountScreen from "../screens/account";
import CartScreen from "../screens/cart";
import HistoryScreen from "../screens/history";
import { COLORS, SIZES } from "../constants/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RestaurentDetails from "../screens/restaurent";
import ChangePwdScreen from "../screens/changePwd";



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Stack1 = createNativeStackNavigator();


function HomeStack(){
  return(
    <NavigationContainer independent={true}>
      <Stack1.Navigator initialRouteName={HomeScreen}>
        <Stack1.Screen name="Home" component={HomeScreen} options= {{headerStyle: {
                backgroundColor: COLORS.primary,
                shadowOpacity: 0,
                alignItems: 'center',
                justifyContent:'center'
                
            },
            headerTitleAlign:'center',
            headerTitle: 'Find Best Restaurents',
            headerTitleStyle: {
                color: COLORS.white,
                fontWeight: '800',
                justifyContent: 'center',
                alignItems:'center'
            },
            }}/>
            <Stack1.Screen name="Restaurent" component={RestaurentDetails} options={{headerTitle:'Restaurent Details',headerTitleAlign:'center',headerTitleStyle:{color:COLORS.white,fontSize:SIZES.h2,alignItems:'center',justifyContent:'center'},headerStyle:{backgroundColor:COLORS.primary,shadowOpacity:0},headerBackTitle:'back',headerBackTitleStyle:{fontWeight:'bold'},headerTintColor:COLORS.title}}/>
       
      </Stack1.Navigator>
    </NavigationContainer>
  )

}



function Main(){
  return(
    <Tab.Navigator initialRouteName={HomeScreen} screenOptions={{tabBarActiveTintColor:COLORS.primary,tabBarInactiveTintColor:COLORS.lightGrey}}>
        <Tab.Screen name="Favourites" component={FavouritesScreen} options={{headerShown:false,tabBarIcon:({tintColor, focused}) => <Icon name='heart-outline' size={focused ? 30: 20} color={tintColor} />}}/>
        <Tab.Screen name="Account" component={AccountScreen} options={{headerShown:false,tabBarIcon:({tintColor, focused}) => <Icon name='account' size={focused ? 30: 20} color={tintColor} />}}/>
        <Tab.Screen name="Home" component={HomeStack} options={{headerShown:false,tabBarIcon:({tintColor, focused}) => <Icon name='home' size={focused ? 30: 20} color={tintColor} />}} />
        <Tab.Screen name="Cart" component={CartScreen} options={{headerShown:false,tabBarIcon:({tintColor, focused}) => <Icon name='cart-outline' size={focused ? 30: 20} color={tintColor} />}}/>
        <Tab.Screen name="History" component={HistoryScreen} options={{headerShown:false,tabBarIcon:({tintColor, focused}) => <Icon name='history' size={focused ? 30: 20} color={tintColor} />}}/>
    </Tab.Navigator>
  )
}

export default function router() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName={SignInScreen}>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Main" component={Main} options={{headerShown:false}}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ForgotPwdScreen" component={ForgotPwdScreen} options={{headerTitle:null,headerBackTitle:'back',headerBackTitleStyle:{fontWeight:'bold',},headerTintColor:COLORS.white,headerStyle:{backgroundColor:COLORS.primary,}}}/>
        <Stack.Screen name="ChangePwdScreen" component={ChangePwdScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}