import * as React from 'react';
import { View, StyleSheet } from 'react-native';

/*
    Chat data:
        Senders
        Messages

    Message format:
        Sender
        Text
*/

class ChatScreen extends React.Component<{}, {}> {
    render() {
        return (
            <View
                style={style.chatScreenMain}
            />
        );
    }
}

const style = StyleSheet.create({
    chatScreenMain: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'red'
    }
});

export default ChatScreen;