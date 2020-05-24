/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './navigations/RootStack';
import {AuthContext} from './context/AuthContext';
import Splash from './screens/AppHome/Splash';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('token');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('token');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider
      value={authContext}
      options={{
        headerStyle: {backgroundColor: '#6200ee'},
        headerTintColor: 'white',
      }}>
      <NavigationContainer>
        <RootStack
          userToken={userToken}
          options={{
            headerStyle: {backgroundColor: '#6200ee'},
            headerTintColor: 'white',
          }}
        />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default App;
