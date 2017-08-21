import {apiUrl} from '../config/config';

class sessionApi {

    static logIn(credentials) {
        const request = new Request(`${apiUrl}/authenticate`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(credentials)
        });


        return fetch(request).then(response => {
            if (response.status !== 200) {
                throw new Error('Authenticate Failed');
            }
            console.log(response);
            return response.json();
        }).catch(error => {
            throw error;
        });
    }
}

export default sessionApi;