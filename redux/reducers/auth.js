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
        case 'WRONG_PASSWORD':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'wrong password'
                    };
        case 'KEY_INFORMATION_MISSING':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'key_information_missing'
                    };
        case 'INVALID_TOKEN':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'invalid_token'
                    }; 
        case 'WRONG_VERIFICATION_CODE':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'wrong_verification_code'
                    };      
        case 'NO_TOKEN_PROVIDED':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'no_token_provided'
                    };
        case 'FILE_NOT_FOUND':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'file_not_found'
                    };
        case 'UPLOAD_FAILED':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'upload_failed'
                    };
         case 'BAD_DATA':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'bad_data'
                    };
         case 'NO_PERMISSION':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'no_permission'
                    };
          case 'UNKNOWN':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'unknown'
                    };

           case 'RIDE_NOT_FOUND':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'upload_failed'
                    };
          case 'SAVE_FAILED':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'save_failed'
                    };
          case 'JOIN_RIDE':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'join_your_own_ride'
                    };
          case 'EDIT_OTHERS_RIDE':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'edit_others_ride'
                    };
          case 'APPLICATION_DOES_NOT_EXIST':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'application_already_responded'
                    };
          case 'DB_ERROR':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'db_error'
                    }; 
         case 'CLEAR_APPLICATION_BEFORE_EDITING':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'clear_applications_before_editing'
                    };
         case 'NOT_ENOUGH_SEATS':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'already_deleted'
                    };
         case 'USER_NOT_IN_APPLICATION':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'user_not_in_applications'
                    };
         case 'CANNOT_EDIT_RIDE_WITHIN_1_HOUR':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'cannot_edit_ride_within_1_hour'
                    };
         case 'APPLICATION_INVALID':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'application_invalid'
                    };
        case 'NO_NOTIFICATIONS':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'no_notifications'
                    };
        case 'NEW_NOTIFICATIONS':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'new_notifications'
                    };
        case 'DB_ERROR':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'db_error'
                    };
        case 'USER_EXISTED':
          return { ...state, errorFlag: true, 
                      email: '', password: '', 
                      spinner: false, 
                      sysAlert: 'user_existed'
                    };                                                                                                                                                                                                                                            
                                                                                                                                                                   
        default:
            return state;
    }
}
