import {apiUrl} from '../config/config';

class compositionsApi {

    static getCompositions() {
        const request = new Request(`${apiUrl}/compositions`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });


        return fetch(request).then(response => {
            if (response.status !== 200) {
                throw new Error('Get Compositions Failed');
            }
            return response.json();
        }).catch(error => {
            throw error;
        });
    }
}

export default compositionsApi;