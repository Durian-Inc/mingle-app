import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { messageListData } from '../mock/Data';

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
    itemKey: any;
}

class ChatScreen extends React.Component<IChatScreenProps, {}> {
    // private data: any;

    constructor(props: any) {
        super(props);
        // this.data = messageListData[this.props.itemKey];
    }

    render() {
        return (
            <View
                style={style.chatScreenMain}
            >
                <View
                    style={style.titleBar}
                >
                    <TouchableOpacity
                        onPress={this.props.closeChatScreen}
                        style={style.opacityArea}
                    >
                        <Text
                            style={style.titleBarIcon}
                        >←</Text>
                        <Text
                            style={style.titleBarText}
                        >
                            {messageListData[this.props.itemKey].groupTitle}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={style.chatArea} >
                    <FlatList
                        data={undefined}
                        renderItem={(x: any) => { console.log(x); return x; }}
                    />
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    chatScreenMain: {
        flex: 1,
        backgroundColor: '#e4e4e4'
    },
    titleBar: {
        backgroundColor: '#aaffaa',
        padding: 10
    },
    titleBarIcon: {
        fontSize: 48,
        color: '#3e3e3e'
    },
    titleBarText: {
        fontSize: 24,
        color: '#3e3e3e',
        marginTop: 'auto',
        marginBottom: 8
    },
    chatArea: {
        flex: 8
    },
    opacityArea: {
        flexDirection: 'row'
    }
});

export default ChatScreen;