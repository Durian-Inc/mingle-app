export default class NetworkHandler {
  static _cursor: string;

  // TODO
  // Report Swipe

  static checkStatus(response: Response) {
    if (response.ok) {
      return response;
    } else {
      console.log('There has been an error');
      throw response;
    }
  }
}
