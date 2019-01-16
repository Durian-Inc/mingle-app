import React from 'react';
// import StorageHandler from './global/StorageHandler';
import Constants from './global/Constants';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen'
import Spacer from './components/Spacer';
import ChatScreen from './screens/ChatScreen';

interface IAppState {
  currentScreenContext: number;
  modal: any;
  id_token: string;
}

export default class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentScreenContext: Constants.CurrentScreenContexts.WelcomeScreen,
      modal: undefined,
      id_token: undefined,
    };
  }

  componentWillMount() {
    console.log('Presenting login screen');
    console.log(Constants.CurrentScreenContexts.Main)
    this.setState({
      currentScreenContext: Constants.CurrentScreenContexts.Main,
      modal:
        <LoginScreen
          openTheGates={this.openTheGates}
        />
    });
  }

  navigation = (toContext: number) => {
    this.setState({ currentScreenContext: toContext });
  };

  navigate = (newScreen: Screen, key: string) => {
    console.log("Navigating to " + newScreen + " with " + key);
    this.setState({
      modal: <ChatScreen
        closeChatScreen={() => {
          this.setState({
            modal:
              <HomeScreen
                navigate={this.navigate}
              />
          });
        }}
        itemKey={key}
      />
    });
  }

  openTheGates = (token: any) => {
    console.log('User is logged in')
    this.setState({
      currentScreenContext: Constants.CurrentScreenContexts.Main,
      modal:
        <HomeScreen
          navigate={this.navigate}
        />,
      id_token: token,
    });
  }

  render() {
    return (
      <View
        style={style.mainScreen}
      >
        <Spacer
          width="100%"
        />
        {this.state.modal}
      </View>
    );
  }
}

const style = StyleSheet.create({
  mainScreen: {
    flex: 1,
    position: "relative"
  }
});
