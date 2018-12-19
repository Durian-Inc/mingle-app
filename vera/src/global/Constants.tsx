/* tslint:disable */

import { Dimensions, StatusBar } from 'react-native';

export default class Constants {
  constructor() {
    //TO-DO Initialize theme
  }

  // App Info
  static AppName: string = 'spooky newz';

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

  static urlbase: string = 'http://teamgatez.peakdigital.xyz:80/';
  static aylienURL: string = 'https://api.newsapi.aylien.com/api/v1/';
  static AylienAuth = {
    'X-AYLIEN-NewsAPI-Application-ID': 'd6c67af2',
    'X-AYLIEN-NewsAPI-Application-Key': '53d9ef7c2a09458e7f63e742bc780e90'
  };

  static AylienEndpoints = {
    stories: 'stories',
    related: 'related_stories',
    coverages: 'coverages',
    autocompletes: 'autocompletes',
    times: 'time_series',
    trends: 'trends',
    histograms: 'histograms'
  };

  //Contexts
  static CurrentScreenContexts = {
    WelcomeScreen: 0,
    Main: 1,
    Profile: 2
  };

  static NetworkContexts = {
    welcomeScreenSignIn: 0,
    welcomeScreenSignUp: 1
  };

  static username: string = '';
}
