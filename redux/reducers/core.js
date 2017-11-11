const defaultState = {
    navi_core:'main',
    data : [],
    item: {}
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'TOSHOWDETAIL':
          return {...state, navi_core:'detail', item: action.item}
        case 'CLEAN':
          return {...state, data : []}
        case 'GOBACKTORESULT':
          return {...state, navi_core:'result'}
        case 'GOCHAT':
          return {...state, navi_core:'chat'}
        case 'POST_SUCCESS':
          return {...state, navi_core:'main'};     
        case 'TOPOSTPAGE':
          return {...state, navi_core:'post'}; 
        case 'TOMAIN':
          return {...state, navi_core:'main'};  
        case 'GETRESULT':
          return {...state, 
                    navi_core:'result', 
                    data: state.data.concat(action.array)
                 };                                                                                                                                           
        default:
            return state;
    }
}
