import React from "react";
import { ImageBackground, Text, View,ScrollView,TextInput,TouchableOpacity,Image } from "react-native";
import styles from "./styles";
import { COLORS } from "../../constants/theme";


const SignInScreen=({navigation})=>{
    return(
        <View style={styles.container}>
            <ImageBackground
             source={require('../../assets/background1.jpg')}
             style={{
                flex:1
             }}
             resizeMode="cover"
            >
               <ScrollView>
                <View style={styles.topContainer}>
                 <Text style={styles.title}>Welcome Back</Text>
                 <Text style={styles.subtitle}>Login into the Account of ChipEats</Text>
                </View>
                <View style={styles.dataContainer}>
                    <TextInput placeholder="Username" style={styles.textinput} placeholderTextColor={COLORS.white}/>
                    <TextInput placeholder="Password" style={styles.textinput} placeholderTextColor={COLORS.white}/>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Main")}>
                         <View style={styles.button1}>
                            <Text style={styles.buttonText}>SIGN IN</Text>
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{}}>
                         <View style={styles.button2}>
                            <View style={styles.logo}>
                                <Image source={require('../../assets/google.png')}
                                resizeMode="contain"
                                style={{
                                    width:30,
                                    height:30
                                }}
                                />
                            </View>
                            <Text style={styles.buttonText}>Connect with google</Text>
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate("ForgotPwdScreen")}>
                       <Text style={styles.text}>Forgot your Password? | Click here</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomContainer}>
                  <TouchableOpacity onPress={()=>navigation.navigate("SignUpScreen")}>
                    <Text style={styles.text}>Don't have an account? | Sign Up</Text>
                  </TouchableOpacity>
                </View>

               </ScrollView>
            </ImageBackground>
           
        </View>
    )
}

export default SignInScreen;