const defaultState = {
    errorFlag: false,
    sysAlert: '',
    navi_core:'main'
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'TOPOSTPAGE':
          return {...state, navi_core:'post'}; 
        case 'TOMAIN':
          return {...state, navi_core:'main'};                                                                                                                                                                     
        default:
            return state;
    }
}
