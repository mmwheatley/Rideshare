const defaultState = {
    password: '',
    email: '',
    errorFlag: false,
    sysAlert: '',
    firstName:'',
    lastName:'',
    mobileNumber:''
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'CLEAN_ERROR':
          return { ...state, errorFlag: false};
        case 'REGISTER_SUCCESS' :
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      sysAlert: 'register success!!'
                    }; 

        case 'USER_EXISTED':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      sysAlert: 'user existed'
                    };                                                                                                                                                                                                                                     
        case 'NETWORK_ERROR':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      sysAlert: 'NETWORK ERROR'
                    };                                                                                                                                                                      
        default:
            return state;
    }
}
