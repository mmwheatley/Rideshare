const defaultState = {
    navi_core:'main',
    data : []
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'TOSHOWDETAIL':
          return {...state, navi_core:'detail'}
        case 'POST_SUCCESS':
          return {...state, navi_core:'main'};     
        case 'TOPOSTPAGE':
          return {...state, navi_core:'post'}; 
        case 'TOMAIN':
          return {...state, navi_core:'main'};  
        case 'GETSULT':
          return {...state, 
                    navi_core:'result', 
                    data: state.data.concat(action.array)
                 };                                                                                                                                           
        default:
            return state;
    }
}
