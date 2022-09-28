const request = require('request');

export class LoginModel {

  login(username: String, password: String) {

    const options = {
      method: 'POST',
      url: 'https://members.moph.go.th/api/v2/oauth/token',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      form: {
        client_id: process.env.mymoph_clientId,
        username: username,
        password: password
      }
    };
    return new Promise<void>((resolve, reject) => {
      request(options, function (error, response, body) {
        if (error) {
          reject(error)
        } else {
          resolve(JSON.parse(body))
        }
        // console.log(body);
      });
    });
  }

  loginQR(clientId: String, sessionId: String, refreshToken: String, accessToken: String) {

    const options = {
      method: 'POST',
      url: 'https://members.moph.go.th/api/v1/m/oauth/webhook_token',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      form: {
        client_id: clientId,
        refresh_token: refreshToken,
        toaccess_tokenken: accessToken,
        session_id: sessionId
      }
    };
    return new Promise<void>((resolve, reject) => {
      request(options, function (error, response, body) {
        if (error) {
          reject(error)
        } else {
          resolve(JSON.parse(body))
        }
        // console.log(body);
      });
    });
  }

  refreshToken(refreshToken: String) {

    const options = {
      method: 'POST',
      url: 'https://members.moph.go.th/api/v2/oauth/refresh_token',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      form: {
        client_id: 'nNzKqHtSXlQRYVujulAu',
        refresh_token: refreshToken
      }
    };
    return new Promise<void>((resolve, reject) => {
      request(options, function (error, response, body) {
        if (error) {
          reject(error)
        } else {
          resolve(JSON.parse(body))
        }
        // console.log(body);
      });
    });
  }
}