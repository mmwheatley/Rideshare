const defaultState = {
    isLoggedIn: false,
    password: '',
    authentication_token: '',
    email: '',
    errorFlag: false,
    spinner: false,
    sysAlert: ''
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGOUT':
            return { ...state, isLoggedIn: false, errorFlag: false }; 
           
        case 'LOGIN_FAILED':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'user error'
                    };
        case 'LOGIN_USER_SUCCESS':
          return { ...state, isLoggedIn: true, 
                      email: action.email, 
                      password: action.password,
                      authentication_token:action.authentication_token};
        case 'LOAD_SPINNER':
          return { ...state, spinner: true };
        case 'CLEAN_ERROR':
          return { ...state, errorFlag: false};
        case 'ALERT_USER' :
          return {
            sysAlert : action.alert
        };
        default:
            return state;
    }
}
