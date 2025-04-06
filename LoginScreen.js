import { useState } from "react";
import { StyleSheet, Button, Text, TextInput, View, TouchableOpacity } from "react-native";

export default function LoginScreen({ onLogin }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button}
                > 
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