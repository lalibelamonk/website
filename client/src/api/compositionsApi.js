import {apiUrl} from '../config/config';
import { getCurrentSession } from '../util/session';

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

    static updateComposition(data) {
        const request = new Request(`${apiUrl}/compositions/${data.composition.id}`, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `${getCurrentSession().auth_token}`
            }),
            body: `${JSON.stringify(data)}`
        });


        return fetch(request).then(response => {
            if (response.status !== 200) {
                throw new Error('Update Composition Failed');
            }
            return response.json();
        }).catch(error => {
            throw error;
        });
    }

    static createComposition(data) {
        const id = data.id;
        const request = new Request(`${apiUrl}/compositions`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `${getCurrentSession().auth_token}`
            }),
            body: `${JSON.stringify(data)}`
        });


        return fetch(request).then(response => {
            if (response.status !== 200) {
                throw new Error('Update Composition Failed');
            }
            return response.json();
        }).catch(error => {
            throw error;
        });
    }

    static deleteComposition(data) {
        const request = new Request(`${apiUrl}/compositions/${data.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `${getCurrentSession().auth_token}`
            })
        });

        return fetch(request).then(response => {
            if (response.status !== 204) {
                throw new Error('Delete Composition Failed');
            }
            return response;
        }).catch(error => {
            throw error;
        });
    }
}

export default compositionsApi;