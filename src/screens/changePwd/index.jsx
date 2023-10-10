import React from "react";
import { Text, View,TextInput,TouchableOpacity } from "react-native";
import styles from "./styles";

const ChangePwdScreen=({navigation})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Change Password</Text>
            <Text style={styles.subtitle}>Enter your old password as well as new password</Text>
            <View>
                <TextInput placeholder="Old Password" style={styles.textinput}/>
                <TextInput placeholder="New Password" style={styles.textinput}/>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("SignInScreen")}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Send</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ChangePwdScreen;