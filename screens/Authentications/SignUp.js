import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {AuthContext} from '../../context/AuthContext';
import {Formik} from 'formik';

const SingUp = () => {
  const {signUp} = React.useContext(AuthContext);
  const isAuthIsRight = values => {
    console.log(values);
    if (
      values.emailOrPhone != '' &&
      values.password != '' &&
      values.confirmPassword != '' &&
      values.name != ''
    ) {
      return signUp();
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Create Account Screen</Text>
      <Formik
        initialValues={{
          name: '',
          emailOrPhone: '',
          password: '',
          confirmPassword: '',
        }}
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
                label="Your Name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                mode="outlined"
              />
              <TextInput
                label="Email or Phone"
                onChangeText={handleChange('emailOrPhone')}
                onBlur={handleBlur('emailOrPhone')}
                value={values.emailOrPhone}
                mode="outlined"
              />
              <TextInput
                label="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                mode="outlined"
              />
              <TextInput
                label="Confirm Password"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                mode="outlined"
              />
              <Button mode="outlined" onPress={handleSubmit}>
                Sign Up
              </Button>
            </View>
          );
        }}
      </Formik>

      {/* <Button onPress={() => signUp()}>Sign Up</Button> */}
    </View>
  );
};

export default SingUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  signInContainer: {
    alignContent: 'center',
    width: 350,
  },

  textStyles: {
    fontSize: 25,
    margin: 8,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: '#6200ee',
  },
});
