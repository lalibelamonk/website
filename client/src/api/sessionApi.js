import {apiUrl} from '../config/config';
import { setCurrentSession } from '../util/session';

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
            return response.json();
        }).catch(error => {
            throw error;
        });
    }
}

export default sessionApi;