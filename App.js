import React,{useState} from "react";
import { Image, Text, View,StatusBar } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { COLORS, SIZES } from "./src/constants/theme";
import Router from './src/router/router';

const slides =[
  {
    id:1,
    title:'Discover best places',
    description:"It is the best places to visit the various places in this app which we find various types of food items",
    image:require('./src/assets/slide1.png')
  },
  {
    id:2,
    title:'Choose a tasty dishes',
    description:'In this app is used to find the tasty food items which we eat with chill and comfortable manner',
    image:require('./src/assets/slide2.png')
  },
  {
    id:3,
    title:'Pick up the delivery',
    description:'In this app the food deliver gives us the food on time and it is the worlds fast food processing',
    image:require('./src/assets/slide3.png')
  }
]

export default function App(){
  const [showHomePage,setShowHomePage]=useState(false);
  StatusBar.setBarStyle('light-content',true);

  const buttonLabel=(label)=>{
    return(
      <View style={{
        padding:12
      }}>
        <Text style={{
          color:COLORS.title,
          fontWeight:'600',
          fontSize:SIZES.h4
        }}>{label}</Text>
      </View>
    )
  }
  if(!showHomePage){
    return(
      <AppIntroSlider
       data={slides}
       renderItem={({item})=>{
        return(
          <View style={{
            flex:1,
            alignItems:'center',
            padding:15,
            paddingTop:100,
          }}>
            <Image
             source={item.image}
             style={{
              width:SIZES.width - 80,
              height:400,
             }}
             resizeMode="contain"
             />
             <Text style={{
              fontWeight:'bold',
              color:COLORS.title,
              fontSize:SIZES.h1
             }}>{item.title}</Text>
             <Text style={{
              textAlign:'center',
              paddingTop:5,
              color:COLORS.title
             }}>{item.description}</Text>
          </View>
        )
       }}
       activeDotStyle={{
        backgroundColor:COLORS.primary,
        width:30,
       }}
       showSkipButton
       renderNextButton={()=>buttonLabel("Next")}
       renderSkipButton={()=>buttonLabel("Skip")}
       renderDoneButton={()=>buttonLabel("Done")}
       onDone={()=>{
        setShowHomePage(true);
       }}
      />
    )
  }
  return(
   <Router />
  )
}