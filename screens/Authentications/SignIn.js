import React from 'react';
import {Text, View,Image,StyleSheet} from 'react-native';
import {Button,TextInput} from 'react-native-paper';
import {AuthContext} from '../../context/AuthContext';
import {Formik} from 'formik';
const SignIn = ({navigation}) => {
  const {signIn} = React.useContext(AuthContext);
  const isAuthIsRight = values => {
    console.log(values);
    if (values.emailOrPhoneNumber != '' && values.password != '') {
      return signIn();
    }
  };

  return (
    <View style={styles.container}>

<Image style={styles.imageStyle} source = {require('../../assets/AITS.png')} />
      <Text style={styles.textStyles}> Login</Text>

      <Formik
        initialValues={{emailOrPhoneNumber: '', password: ''}}
        onSubmit={values => isAuthIsRight(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          isSubmitting,
        }) => {
          return (
            <View style={styles.signInContainer}>
              <TextInput
                label="Email or Phone Number"
                onChangeText={handleChange('emailOrPhoneNumber')}
                onBlur={handleBlur('emailOrPhoneNumber')}
                value={values.emailOrPhoneNumber}
                style={{borderColor: '#6200ee'}}
                mode="outlined"
              />
              <TextInput
                label="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                mode="outlined"
              />
              <Button mode="outlined" style={styles.button} onPress={handleSubmit}>
                Sign In
              </Button>
            </View>
          );
        }}
      </Formik>

      {/* <Button onPress={() => signIn()}>Sign In</Button> */}
      <Button onPress={() => navigation.push('SignUp')}>Create Account</Button>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
    marginTop:10,
    backgroundColor:'#fff'
    },
    signInContainer: {
      alignContent: "center",
      width: 350,
    },
  
    textStyles: {
      fontSize: 25,
      margin: 8,
      fontFamily: "sans-serif",
      fontWeight: "bold",
      color: "#6200ee",
    },
    imageStyle:{
      height:150,
      width:150,
      borderRadius:150/2
    },
  });
  