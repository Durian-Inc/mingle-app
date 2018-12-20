import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

/*
    Chat data:
        Senders
        Messages

    Message format:
        Sender
        Text
*/

interface IChatScreenProps {
    closeChatScreen: any;
}

class ChatScreen extends React.Component<IChatScreenProps, {}> {
    render() {
        return (
            <View
                style={style.chatScreenMain}
            >
                <TouchableOpacity
                    onPress={this.props.closeChatScreen}
                >
                    <Text
                        style={{fontSize: 48}}
                    >←</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    chatScreenMain: {
        flex: 1,
        backgroundColor: '#e4e4e4',
        padding: 10
    }
});

export default ChatScreen;