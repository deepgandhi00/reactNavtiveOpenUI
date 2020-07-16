import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
} from 'react-native';
import { HelperText, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5'

const Login = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null);
    const [icon, setIcon] = useState("eye-slash")
    const [secure, setSecure] = useState(true);

    const toggleIcon = () => {
        if (icon === "eye") {
            setIcon("eye-slash")
            setSecure(true);
        } else {
            setIcon("eye");
            setSecure(false)
        }
    }

    const buttonClick = () => {
        setEmailError("An error occured")
        setPasswordError("An error occured")
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.mainContainer}>
                <Text style={styles.labelStyle}>Email</Text>
                <View style={styles.emailSection}>
                    <TextInput
                        style={emailError ? [styles.emailInputLayout, styles.errorBorder] : [styles.emailInputLayout, styles.normalBorder]}
                        value={email}
                        label="Email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        onChangeText={text => setEmail(text)} />
                </View>

                <HelperText
                    visible={emailError ? true : false}
                    type="error">{emailError}</HelperText>

                <Text style={styles.labelStyle}>Password</Text>
                <View style={passwordError ? [styles.passwordSection, styles.errorBorder] : [styles.passwordSection, styles.normalBorder]}>
                    <TextInput
                        style={styles.passwordInput}
                        value={password}
                        secureTextEntry={secure}
                        onChangeText={text => setPassword(text)}
                        autoCapitalize="none"
                        icon={props => <Icon name="" {...props} />} />
                    <Icon style={styles.iconPassword} name={icon} size={24} color="#000" onPress={() => toggleIcon()} />
                </View>

                <HelperText
                    visible={passwordError ? true : false}
                    type="error">{passwordError}</HelperText>

            </View>
            <View style={styles.buttonContainer}>
            <Button
                mode="contained"
                style={styles.button}
                onPress = {() => buttonClick()}>Log In</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    emailInputLayout: {
        marginHorizontal: 16,
        flex: 1,
        color: "#222222",
        paddingStart: 16,
    },
    passwordInput: {
        marginHorizontal: 16,
        flex: 1,
        color: "#222222",
    },
    normalBorder: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#c4c4c4",
        borderRadius: 8,
    },
    errorBorder: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#DD2C00",
        borderRadius: 8,
    },
    errorText: {
        fontSize: 16,
        color: "#FFDD2C00",
        marginTop: 16
    },
    labelStyle: {
        marginHorizontal: 16,
        fontSize: 16,
        marginTop: 16
    },
    iconPassword: {
        marginRight: 16,
    },
    passwordSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 16,
        marginHorizontal: 16,
    },
    emailSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 16,
    },
    button: {
        height: 40,
    },
    buttonContainer : {
        paddingHorizontal : 16,
        paddingBottom : 32,
        backgroundColor : "#ffffff"
    }
});

export default Login;