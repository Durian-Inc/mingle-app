import { AsyncStorage } from 'react-native';
import Constants from './Constants';

export default class StorageHandler {
  static _storeUser = async (value: string, username: string) => {
    try {
      Constants.username = username;
      await AsyncStorage.multiSet([
        ['@user:isLoggedIn', value],
        ['@user:username', username]
      ]);
    } catch (error) {
      console.log('error with saving');
      console.log(error);
    }
  };

  static _isUserSignedIn = async () => {
    try {
      const value = await StorageHandler._getUsername();
      if (value !== undefined) {
        Constants.username = value;
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log('error with reading storage');
      console.log(error);
      return false;
    }
  };

  static _getUsername = async () => {
    try {
      const value = await AsyncStorage.getItem('@user:username');
      if (value !== null) {
        Constants.username = value;
        return value;
      } else {
        return undefined;
      }
    } catch (error) {
      console.log('error reading username');
      console.log(error);
      return undefined;
    }
  };

  static _logout() {
    AsyncStorage.multiRemove(['@user:isLoggedIn', '@user:username']).then(
      () => {
        Constants.username = '';
      }
    );
  }
}
