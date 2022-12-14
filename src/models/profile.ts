const request = require('request');

export class ProfileModel {

  getProfile(token: String) {

    const options = {
      method: 'GET',
      url: 'https://members.moph.go.th/api/v1/m/user',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`
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

  getDipchip(db, sessionId) {
    return db('dipchip_sessions')
      .select('cid','session_id')
      .where({
        'session_id': sessionId
      });
  }
  
  saveDipchip(db, data) {
    return db('dipchip_sessions').insert(data);
  }


}