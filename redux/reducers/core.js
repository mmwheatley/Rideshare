const defaultState = {
    errorFlag: false,
    sysAlert: '',
    navi_core:'main'
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'POST_SUCCESS':
          return {...state, navi_core:'main'};      
        case 'TOPOSTPAGE':
          return {...state, navi_core:'post'}; 
        case 'TOMAIN':
          return {...state, navi_core:'main'};  
        // case 'POST_NETWORK_ERROR':
        //   return { ...state, errorFlag: true,
        //           sysAlert: 'server error'};  
        // case 'CLEAN_ERROR':
        //   return { ...state, errorFlag: false};                                                                                                                                            
        default:
            return state;
    }
}
