import React from 'react';
import { Text, View,Button } from 'react-native';

const SignIn = props => (
    <View>
        <Text>SignIn</Text>
        <Button title="Go to Sign Up" onPress={()=> props.navigation.navigate('SignUp')}/>


    </View>
);

export default SignIn;
