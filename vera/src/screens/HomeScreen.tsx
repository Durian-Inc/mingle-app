/* tslint:disable */

import * as React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Spacer from '../components/Spacer';
import Constants from '../global/Constants';
import { messageListData } from '../mock/Data';

interface IHomeScreenProps {
    navigate: any;
}

class HomeScreen extends React.Component<IHomeScreenProps, {}> {
    render() {
        return (
            <View
                style={style.backgroundView}
            >
                <View style={style.titleBar}>
                    <Text
                        style={style.titleBarText}
                    >
                        {Constants.AppName}
                    </Text>
                </View>
                <FlatList
                    data={messageListData}
                    renderItem={(x) => {
                        return (
                            <TouchableOpacity
                                style={style.list}
                                onPress={() => { this.props.navigate(x.item.screenNav, x.item.key) }}
                            >
                                <Image
                                    source={{ uri: "http://papers.co/wallpaper/papers.co-nd81-rose-flower-blue-rain-bokeh-zoom-40-wallpaper.jpg" }}
                                    style={{ width: 40, height: 40, margin: 20 }}
                                />
                                <View
                                    style={{ flex: 1 }}
                                >
                                    <View
                                        style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start" }}
                                    >
                                        <Text
                                            style={style.groupTitleText}>
                                            {x.item.groupTitle}
                                        </Text>
                                        <Text>
                                            {x.item.time}
                                        </Text>
                                        <Spacer />
                                    </View>
                                    <Text
                                        style={style.groupLastMessageText}
                                        numberOfLines={1}
                                    >
                                        {x.item.lastMessage ? x.item.lastMessage : undefined}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
                <View
                    style={style.buttonLayer}
                >
                    <TouchableOpacity
                        style={{
                            marginLeft: "auto",
                            marginRight: 15,
                            marginBottom: 15,
                            opacity: 0.80,
                            backgroundColor: "#ff0033",
                            borderRadius: 32
                        }}
                    >
                        <Text
                            style={{
                                padding: 15
                            }}
                        >
                            + New Chat
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    backgroundView: {
        backgroundColor: 'white',
        flex: 1
    },
    titleBar: {

        width: "100%",
        height: 65,
        backgroundColor: "#009688"
    },
    titleBarText: {
        fontSize: 32,
        margin: 10,
        color: "#eeeeff"
    },
    buttonLayer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
    list: {
        width: "100%",
        height: 65,
        backgroundColor: 'white',
        marginTop: 3,
        marginBottom: 2,
        flexDirection: "row",
        alignItems: "center",
    },
    groupTitleText: {
        fontSize: 18,
        flex: 1,
        width: "auto",
        marginTop: 5,
        marginBottom: 5
    },
    groupLastMessageText: {
        fontSize: 14,
        flex: 1,
        maxWidth: "80%"
    },
    groupTimeText: {
        fontSize: 14,
        flex: 1
    }
});

export default HomeScreen;