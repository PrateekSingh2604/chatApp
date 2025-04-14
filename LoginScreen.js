import { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from "react-native";
import {auth} from "./firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen({ onLogin }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password);
            onLogin(auth.currentUser);
        }catch(error){
            if(error.code == "auth/user-not-found" || error.code == "auth/invalid-credential"){
                await createUserWithEmailAndPassword(auth, email, password);
                onLogin(auth.currentUser);
            }else{
                console.log(error.message);
                Alert.alert("Login error", error.message);
            }
        }
    };

    return (
        <View>
            <Text style={styles.title}>Chat Login</Text>
            <TextInput
            style = {styles.input}
                placeholder="Email"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style = {styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button}
              onPress={handleSubmit}  > 
                <Text style={{color: 'white'}}>Login / Register</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 10,
    },
    button: {
        borderWidth: 1,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        borderBottomWidth: 2,
        width: 130
    }

})