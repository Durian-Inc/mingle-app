import React from 'react';
import StorageHandler from './global/StorageHandler';
import Constants from './global/Constants';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Spacer from './components/Spacer';
import ChatScreen from './screens/ChatScreen';

interface IAppState {
  currentScreenContext: number;
  modal: any;
}

export default class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentScreenContext: Constants.CurrentScreenContexts.WelcomeScreen,
      modal: undefined
    };
  }

  componentWillMount() {
    StorageHandler._isUserSignedIn().then(isUserSignedIn => {
      if (isUserSignedIn === true) {
        console.log('persistent login');
        this.setState({
          currentScreenContext: Constants.CurrentScreenContexts.Main
        });
      }
    });
  }

  navigation = (toContext: number) => {
    this.setState({ currentScreenContext: toContext });
  };

  navigate = (newScreen: Screen, key: string) => {
    console.log("Navigating to " + newScreen + " with " + key);
    this.setState({
      modal: <ChatScreen />
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
        <HomeScreen
          navigate={this.navigate}
        />
        {this.state.modal}
      </View>
    );
  }
}

const style = StyleSheet.create({
  mainScreen: {
    flex: 1
  }
});