import React from "react";
import { Text, View,TextInput,TouchableOpacity } from "react-native";
import styles from "./styles";

const ForgotPwdScreen=({navigation})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.subtitle}>Enter your email address in which we can send you the instruction for how to change your passwords.</Text>
            <View>
                <TextInput placeholder="Enter your email address" style={styles.textinput}/>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("ChangePwdScreen")}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Send</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ForgotPwdScreen;