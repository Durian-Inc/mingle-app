import { AuthSession } from 'expo';
import React from 'react';
import { StyleSheet, View, Button, Alert, Text } from 'react-native';
import jwtDecoder from 'jwt-decode';

const auth0ClientId = CLIENT_ID;
const auth0Domain = DOMAIN;

function toQueryString(params) {
  return '?' + Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

export default class App extends React.Component {
  state = {
    username: undefined,
    loggedIn: 'false',
  };

  _loginWithAuth0 = async () => {
    const redirectUrl = AuthSession.getRedirectUrl();
    console.log(`Redirect URL (add this to Auth0): ${redirectUrl}`);
    const result = await AuthSession.startAsync({
      authUrl: `${auth0Domain}/authorize` + toQueryString({
        client_id: auth0ClientId,
        response_type: 'token',
        scope: 'openid name',
        redirect_uri: redirectUrl,
      }),
    });

    console.log(result);
    if (result.type === 'success') {
      this.handleParams(result.params);
    }
  }

  handleParams = (responseObj) => {
    console.log('Print boi')
    console.log(responseObj)
    if (responseObj.error) {
      Alert.alert('Error', responseObj.error_description
        || 'something went wrong while logging in');
      return;
    }
    const encodedToken = responseObj.id_token;
    const decodedToken = jwtDecoder(encodedToken);
    const username = decodedToken.name;
    this.setState({ 
      username,
      loggedIn: 'true'
    });
  }

  _loginWithAuth0Google = async () => {
    const redirectUrl = AuthSession.getRedirectUrl();
    const result = await AuthSession.startAsync({
      authUrl: `${auth0Domain}/authorize` + toQueryString({
        connection: 'google-oauth2',
        client_id: auth0ClientId,
        response_type: 'token',
        scope: 'openid name',
        redirect_uri: redirectUrl,
      }),
    });
    console.log(result);
    if (result.type === 'success') {
      this.handleParams(result.params);
    }
  }

  logUserOut() {
    this.setState({
      username: undefined,
      loggedIn: 'false'
    })
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}> Is user logged in: {this.state.loggedIn} </Text>
        <View style={styles.loginOptions}>
          <Button title='Login With Auth0' onPress={this._loginWithAuth0} color={'red'}/>
          <Button title='Login With Google' onPress={this._loginWithAuth0Google} color={'green'}/>
        </View>
        <Button title='Logout' onPress={this.logUserOut.bind(this)}/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginOptions: {
    flex: 0,
    flexDirection: 'row',
  }
});
