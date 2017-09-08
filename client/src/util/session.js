import { sessionKey } from '../config/config';

export function isSessionActive() {
    let storage = getCurrentSession();
    return (storage && storage.auth_token);
}

export function getCurrentSession() {
    let session = window.sessionStorage.getItem(sessionKey);
    if(!session) {
        return false;
    }
    return JSON.parse(session);
}

export function setCurrentSession(obj) {
    window.sessionStorage.setItem(sessionKey, JSON.stringify(obj))
}

export function unsetSession() {
    window.sessionStorage.removeItem(sessionKey);
}