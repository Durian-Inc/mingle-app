/* tslint:disable */

import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import Constants from '../global/Constants';
import { AuthSession } from 'expo';

interface ILoginScreenProps {
    openTheGates: any;
}

function toQueryString(params: any) {
    return '?' + (Object).entries(params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`)
        .join('&');
}

class LoginScreen extends React.Component<ILoginScreenProps, {}>{
    constructor(props: any) {
        super(props);
    }
    _socialLogin = async (social_connection: string) => {
        const redirectUrl = AuthSession.getRedirectUrl();
        const result = await AuthSession.startAsync({
            authUrl: `${Constants.auth0Domain}/authorize` + toQueryString({
                connection: social_connection,
                client_id: Constants.auth0ClientId,
                response_type: 'id_token token',
                scope: 'openid profile',
                redirect_uri: redirectUrl,
                nonce: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
            }),
        });

        if (result.type === 'success') {
            let encodedToken = result.params.id_token;
            this.props.openTheGates(encodedToken)
        }
    }
    render() {
        return (
            <View style={styles.backgroundView}>
                <View style={styles.content}>
                    <Image 
                        source={require('../../assets/icon.png')} 
                        style={{
                            width: 512,
                            height: 512,
                        }}
                        />
                    <View style={styles.loginOptions}>
                        {/* Facebook Login */}
                        <TouchableOpacity 
                            style={{
                                padding: 5,
                                flexDirection: 'row',
                                backgroundColor: '#3b5998',
                                borderRadius: 5,
                                width: 350
                            }}
                            onPress={() => {
                                this._socialLogin('facebook')
                            }}
                            >
                            <Image 
                                source={{ uri: Constants.facebookIcon }}
                                style={{
                                    width: 24,
                                    height: 24,
                                    margin: 10
                                }}
                            /> 
                            <Text 
                                style={{
                                    fontSize: 16,
                                    paddingTop: 12,
                                    color: 'white'
                                }}
                            >
                                Continue with Facebook
                            </Text>
                        </TouchableOpacity>
                        {/* Google Login */}
                        <TouchableOpacity 
                            style={{
                                padding: 5,
                                flexDirection: 'row',
                                borderColor: '#696969',
                                borderRadius: 5,
                                borderWidth: 1,
                                marginTop: 20
                            }}
                            onPress={() => {
                                this._socialLogin('google-oauth2')
                            }}
                            >
                            <Image 
                                source={{ uri: Constants.googleIcon }}
                                style={{
                                    width: 24,
                                    height: 24,
                                    margin: 10
                                }}
                            />
                            <Text 
                                style={{
                                    fontSize: 16,
                                    paddingTop: 12,
                                    color: 'black' 
                                }}
                            > 
                                Continue with Google
                            </Text>
                        </TouchableOpacity>
                        {/* Twitter Login */}
                        <TouchableOpacity 
                            style={{
                                backgroundColor: '#1DA1F2',
                                padding: 5,
                                flexDirection: 'row',
                                borderRadius: 5,
                                marginTop: 20
                            }}
                            onPress={() => {
                                this._socialLogin('twitter')
                            }}
                            >
                            <Image
                                source={{ uri: Constants.twitterIcon }}
                                style={{
                                    width: 24,
                                    height: 24,
                                    margin: 10
                                }}
                            />
                            <Text 
                                style={{
                                    fontSize: 16,
                                    paddingTop: 12,
                                    color: 'white' 
                                }}
                            >
                                Continue with Twitter
                            </Text>
                        </TouchableOpacity>
                    </View> 
                </View>        
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundView: {
        backgroundColor: 'white',
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleBar: {
        width: "100%",
        height: 60,
        backgroundColor: "#009688"
    },
    titleBarText: {
        fontSize: 32,
        margin: 10,
        color: "#eeeeff"
    },
    title: {
        fontSize: 78
    },
    loginOptions: {
        flex: 0,
    },
    socialButton: {
        padding: 5,
        flexDirection: 'row'
    }
});

export default LoginScreen;