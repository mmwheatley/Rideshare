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
        case 'LOGOUT':
            return { ...state, isLoggedIn: false, email: action.email, password: action.password }; 
           
        case 'LOGIN_FAILED':
          return { ...state, errorFlag: true, email: '', password: '', spinner: false };
        case 'LOGIN_USER_SUCCESS':
          return { ...state, isLoggedIn: true, email: action.email, password: action.password,authentication_token:action.authentication_token};
        case 'LOAD_SPINNER':
          return { ...state, spinner: true };
        default:
            return state;
    }
}
