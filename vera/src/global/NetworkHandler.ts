import { IUser, IQueryRequest, ISwipeData } from './Interfaces';
import Constants from './Constants';
import StorageHandler from './StorageHandler';

export default class NetworkHandler {
  static _cursor: string;

  static async WelcomeScreenNetworking(
    user: string,
    pass: string,
    context: number
  ): Promise<Response> {
    let bodyMessage: IUser = undefined;
    let url: string = undefined;
    switch (context) {
      case Constants.NetworkContexts.welcomeScreenSignIn: {
        bodyMessage = { username: user, password: pass };
        url = Constants.urlbase + 'User/loginUser';
        break;
      }
      case 1: {
        bodyMessage = {
          username: user,
          password: pass,
          uid: String(Math.floor(Math.random() * 1000000))
        };
        url = Constants.urlbase + 'User/registerUser';
        break;
      }
      default: {
        break;
      }
    }

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(bodyMessage)
    })
      .then(this.checkStatus)
      .then(response => {
        return response;
      })
      .catch(e => {
        return e;
      });
  }

  static async AylienNetworking(context: string, query: string) {
    let aylienHeaders = Constants.AylienAuth;

    console.log('ruinning query');
    console.log('query: ' + query + context);
    return fetch(query, {
      method: 'GET',
      headers: aylienHeaders
    })
      .then(this.checkStatus)
      .then(response => {
        return response.json();
      })
      .then(response => {
        response.map((article: any) => {
          console.log('Here dipshit: ', article);
        });
        return response;
      })
      .catch(e => {
        console.log(e);
        return e;
      });
  }

  static async CardNetworking() {
    let GetArticlesRequest: IQueryRequest = undefined;
    let username: string = undefined;

    StorageHandler._getUsername().then(value => {
      username = value;
    });

    GetArticlesRequest = {
      username: username,
      number: 2,
      not: undefined
    };
    console.log('contacting clayton');

    return fetch(Constants.urlbase + 'Article/GetArticles', {
      method: 'POST',
      body: JSON.stringify(GetArticlesRequest),
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(this.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }

  // TODO
  // Report Swipe

  static async PostSwipeData(swipeData: ISwipeData) {
    let dataArray: ISwipeData[] = [];
    let rootObject = {};
    dataArray.push(swipeData);

    rootObject = {
      rootObject: dataArray
    };
    console.log(rootObject);
    return fetch(Constants.urlbase + 'Swipe/PostSwipeData', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(rootObject)
    }).then(this.checkStatus);
  }

  static async InitialCardNetworking(useCursor: boolean) {
    let aylienHeaders = Constants.AylienAuth;
    let url: string = undefined;

    url = Constants.aylienURL + 'stories?per_page=4&language=en&cursor=';

    if (useCursor === true) {
      url += this._cursor;
    } else {
      url += '*';
    }
    console.log('searching for hot articles near you');
    return fetch(url, {
      method: 'GET',
      headers: aylienHeaders
    })
      .then(this.checkStatus)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }

  static checkStatus(response: Response) {
    if (response.ok) {
      return response;
    } else {
      console.log('There has been an error');
      throw response;
    }
  }
}
