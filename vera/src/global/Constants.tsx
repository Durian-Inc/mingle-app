/* tslint:disable */

import { Dimensions, StatusBar } from 'react-native';

export default class Constants {
  constructor() {
    //TO-DO Initialize theme
  }

  // App Info
  static AppName: string = 'Vera';

  // Auth Credentials
  static auth0ClientId: string = 'MINGLE-CLIENTID';
  static auth0Domain: string = 'http://durian-inc.auth0.com';

  // Social Icons
  static facebookIcon: string = 'https://bit.ly/2CuKNQG'
  static googleIcon: string = 'https://bit.ly/2oVFQse'
  static twitterIcon: string = 'https://bit.ly/2QSSwNG'

  // Dimensions
  static screenWidth: number = Dimensions.get('window').width;
  static screenHeight: number = Dimensions.get('window').height;
  static statusBarHeight: number = StatusBar.currentHeight;
  static appBarHeight: number = Constants.statusBarHeight + 56;
  static cardHeight: number = Constants.screenHeight - Constants.appBarHeight;
  static appMargin: number = 6;

  // Colors
  // static primaryColor: string = '#295fe0';
  // static accentColor: string = '#ffa561';
  // static color1: string = '#295fe0';
  static color2: string = 'white';
  static color3: string = '#ffa561';
  static color4: string = '';
  // static backgroundColor: string = '#f5f7fa';
  static textColor: string = '#363636';

  // Colors 2
  // Halloween Edition
  static color1: string = '#7EBC89';
  static backgroundColor: string = '#6B7F82';

  // Animation
  static cardSwipeTimeout: number = 0;
  static cardSwipeVertDistance: number = Constants.screenWidth / 25;
  static cardSwipeDeadZone: number = Constants.screenHeight / 10;

  // Numbers
  static articleTitleFontSize: number = 22;

  //Contexts
  static CurrentScreenContexts = {
    WelcomeScreen: 0,
    Main: 1,
    Chat: 2
  };

  static NetworkContexts = {
    welcomeScreenSignIn: 0,
    welcomeScreenSignUp: 1
  };

  static username: string = '';
}
