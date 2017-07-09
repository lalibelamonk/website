/**
 * Created by nbeach on 5/16/17.
 */
import sessionReducer from '../session';
import * as types from '../../actions/actionTypes';
import initialState from '../initialState';


describe('session reducer', () => {
    test('should return the initial state', () => {
        expect(
            sessionReducer(undefined, {})
        ).toEqual({
            jwt: null,
            user: {}
        })
    })

    test('should handle login', () => {
        expect(
            sessionReducer(initialState.session, {
                type: types.LOG_IN_SUCCESS,
                next: {jwt: 'jwt1'}
            })
        ).toEqual({
            jwt: 'jwt1',
            user: {}
        })
    })

    test('should handle log out', () => {
        expect(
            sessionReducer(initialState.session, {
                type: types.LOG_OUT
            })
        ).toEqual({
            jwt: null,
            user: {}
        })
    })
})