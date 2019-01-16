/* tslint:disable */

import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
                    <Text style={styles.title}> {Constants.AppName} </Text>
                    <Text style={{fontSize: 14}}>Long live Allo</Text>
                    <View style={styles.loginOptions}>
                        {/* Facebook Login */}
                        <TouchableOpacity 
                            style={styles.socialButton}
                            onPress={() => {
                                this._socialLogin('facebook')
                            }}
                            >
                            <Image 
                                source={{ uri: Constants.facebookIcon }}
                                style={{
                                    width: 40,
                                    height: 40,
                                    margin: 20
                                }}
                            /> 
                        </TouchableOpacity>
                        {/* Google Login */}
                        <TouchableOpacity 
                            style={styles.socialButton}
                            onPress={() => {
                                this._socialLogin('google-oauth2')
                            }}
                            >
                            <Image 
                                source={{ uri: Constants.googleIcon }}
                                style={{
                                    width: 40,
                                    height: 40,
                                    margin: 20
                                }}
                            />
                        </TouchableOpacity>
                        {/* Twitter Login */}
                        <TouchableOpacity 
                            style={styles.socialButton}
                            onPress={() => {
                                this._socialLogin('twitter')
                            }}
                            >
                            <Image
                                source={{ uri: Constants.twitterIcon }}
                                style={{
                                    width: 40,
                                    height: 40,
                                    margin: 20
                                }}
                            />
                        </TouchableOpacity>
                    </View> 
                </View>        
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundView: {
        backgroundColor: '#52c7b8',
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
        flexDirection: 'row',
        marginTop: 100,
    },
    socialButton: {
        padding: 5,
    }
});

export default LoginScreen;