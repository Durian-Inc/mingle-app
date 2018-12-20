/* tslint:disable */

import * as React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Spacer from '../components/Spacer';
// import from '../global/Constants';
import Constants from '../global/Constants';

interface IData {
    key: string;
    groupTitle: string;
    lastMessage?: string;
    time?: string;
    screenNav: any
}

interface IHomeScreenProps {
    navigate: any;
}

const data: IData[] = [
    {
        key: "0",
        groupTitle: "Allo 2.0 Devs",
        lastMessage: "Clay: Innocent is a fucking loser",
        time: "aaa",
        screenNav: 2
    },
    {
        key: "1",
        groupTitle: "Innocent",
        time: "30m ago",
        lastMessage: "I'm a fucking loser",
        screenNav: 2
    },
    {
        key: "2",
        groupTitle: "Mark Raymoond Jr.",
        time: "30m ago",
        lastMessage: "I'm pretty sure Bush did 9/11",
        screenNav: 2
    },
    {
        key: "3",
        groupTitle: "Claytony Price",
        time: "45m ago",
        lastMessage: "Dude you fuckin' failed 1570. See you next semester kiddo",
        screenNav: 2
    },
    {
        key: "4",
        groupTitle: "Ricardo Morales",
        time: "1hr ago",
        lastMessage: "Where the hell was Alex during the presentation?",
        screenNav: 2
    },
    {
        key: "5",
        groupTitle: "Satya Nadella",
        time: "2hr ago",
        lastMessage: "If I step down, do you want to be CEO?",
        screenNav: 2
    },
    {
        key: "6",
        groupTitle: "Hot Coffee Shop Girl",
        time: "10hr ago",
        lastMessage: "There's no easy way to say this, but I'm pregnant",
        screenNav: 2
    },
    {
        key: "7",
        groupTitle: "Chaman L. Sabharwhal",
        time: "14 hr ago",
        lastMessage: "zzzyzhggeeejejee e TARIAH",
        screenNav: 2
    },
    {
        key: "8",
        groupTitle: "Jonas Buxton",
        time: "1 day ago",
        lastMessage: "Help my eyebrows are stuck looking stupid",
        screenNav: 2
    },
    {
        key: "9",
        groupTitle: "Alex Tariah",
        time: "1 day ago",
        lastMessage: "Heegggjg ffeeaffffj",
        screenNav: 2
    },
    {
        key: "10",
        groupTitle: "Norad Price",
        time: "1 day ago",
        lastMessage: "Why aren't we using Flutter?",
        screenNav: 2
    }
];

class HomeScreen extends React.Component<IHomeScreenProps, {}> {
    render() {
        return (
            <View
                style={style.backgroundView}
            >
                <View style={{
                    width: "100%",
                    height: 65,
                    backgroundColor: "#009688"
                }}>
                    <Text
                        style={{
                            fontSize: 32,
                            margin: 10,
                            color: "#eeeeff"
                        }}
                    >
                        {Constants.AppName}
                    </Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={(x) => {
                        return (
                            <TouchableOpacity
                                style={style.list}
                                onPress={() => { /*this.props.navigate(x.item.screenNav, x.item.key) */ }}
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