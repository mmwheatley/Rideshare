const defaultState = {
    isLoggedIn: false,
    password: '',
    authentication_token: '',
    email: '',
    errorFlag: false,
    spinner: false
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isLoggedIn: true, email: action.email, password: action.password }; 
        case 'LOGOUT':
            return { ...state, isLoggedIn: false, email: action.email, password: action.password };
            
        case 'EMAIL_CHANGED':
          return { ...state, email: action.payload };
        case 'PASSWORD_CHANGED':
          return { ...state, password: action.payload };
        case 'LOGIN_FAILED':
          return { ...state, errorFlag: true, password: '', spinner: false };
        case 'LOGIN_USER_SUCCESS':
          return { ...state, ...action.payload, ...defaultState };
        case 'LOAD_SPINNER':
          return { ...state, spinner: true };
        default:
            return state;
    }
}
