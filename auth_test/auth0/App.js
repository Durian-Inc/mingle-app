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
  constructor(props) {
    super(props)
    this.state = {
      username: undefined,
      encodedToken: undefined,
      loggedIn: 'false',
    }
  }

  _loginWithAuth0 = async () => {
    const redirectUrl = AuthSession.getRedirectUrl();
    console.log(`Redirect URL (add this to Auth0): ${redirectUrl}`);
    const result = await AuthSession.startAsync({
      authUrl: `${auth0Domain}/authorize` + toQueryString({
        client_id: auth0ClientId,
        response_type: 'id_token token',
        scope: 'openid profile',
        redirect_uri: redirectUrl,
        nonce: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      }),
    });

    console.log(result);
    if (result.type === 'success') {
      this.handleParams(result.params);
    }
  }

  handleParams = (responseObj) => {
    console.log(responseObj)
    if (responseObj.error) {
      Alert.alert('Error', responseObj.error_description
        || 'something went wrong while logging in');
      return;
    }
    const encodedToken = responseObj.id_token;
    const decodedToken = jwtDecoder(encodedToken, { header: true });
    const username = decodedToken.name;
    this.setState({ 
      username,
      encodedToken,
      loggedIn: 'true'
    });
  }

  _loginWithAuth0Google = async () => {
    const redirectUrl = AuthSession.getRedirectUrl();
    const result = await AuthSession.startAsync({
      authUrl: `${auth0Domain}/authorize` + toQueryString({
        connection: 'google-oauth2',
        client_id: auth0ClientId,
        response_type: 'id_token token',
        scope: 'openid profile',
        redirect_uri: redirectUrl,
        nonce: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      }),
    });
    console.log(result);
    if (result.type === 'success') {
      this.handleParams(result.params);
    }
  }

  logUserOut = () => {
    this.setState({
      username: undefined,
      encodedToken: undefined,
      loggedIn: 'false'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> {this.state.loggedIn} </Text>
        <View style={styles.loginOptions}>
          <Button title='Login With Auth0' onPress={this._loginWithAuth0} color={'red'}/>
          <Button title='Login With Google' onPress={this._loginWithAuth0Google} color={'green'}/>
        </View>
        <View style={styles.loginOptions}>
          <Button title='Logout' onPress={this.logUserOut}/>
        </View>
        <Text> The user's token: {this.state.encodedToken} </Text>
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
  },
  title: {
    fontSize: 34,
  }
});
