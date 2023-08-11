/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
// import {AsynStorage} from 'react-native-asyncstorage';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //   console.log(navigation);

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      Alert.alert('Login successful');
      //console.log("sucessful");
      navigation.dispatch(StackActions.push('PostList'));
    } else {
      Alert.alert('Login failed');
      //console.log("failed");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        autoCapitalize="none"
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableHighlight style={{width: '80%'}}>
        <Button
          title="Login"
          autoCapitalize="none"
          onPress={handleLogin}
          style={{flex: 1, width: '100%'}}
        />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    marginBottom: 15,
    borderWidth: 1,
    padding: 5,
  },
});

export default LoginScreen;
