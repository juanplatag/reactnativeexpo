import { Usuario } from '../interfaces/appInterfaces';

export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    token: string | null;
    errorMessage: string;
    message: string;
    user: Usuario | null;
}

type AuthAction = 
    | { type: 'signUp', payload: { token: string, user: Usuario } }
    | { type: 'addError', payload: string }
    | { type: 'addMessage', payload: string }
    | { type: 'removeError' }
    | { type: 'removeMessage' }
    | { type: 'notAuthenticated' }
    | { type: 'logout' }


export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {

    switch (action.type) {
        case 'addError':
            return {
                ...state,
                user: null,
                status: 'not-authenticated',
                token: null,
                errorMessage: action.payload,
            }

        case 'addMessage':
            return {
                ...state,
                user: null,
                status: 'not-authenticated',
                token: null,
                message: action.payload
            }    
    
        case 'removeError':
            return {
                ...state,
                errorMessage: ''
            };

        case 'removeMessage':
            return {
                ...state,
                message: ''
            };
        

        case 'signUp':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                token: action.payload.token,
                user: action.payload.user
            }

        case 'logout':
        case 'notAuthenticated':
            return {
                ...state,
                status: 'not-authenticated',
                token: null,
                user: null
            }

        default:
            return state;
    }


}


