const defaultState = {
    navi_core:'main',
    data : [],
    item: {},
    undriver: [],
    alldriver: [],
    unpassenger: [],
    allpassenger: []
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'TOSHOWDETAIL':
          return {...state, navi_core:'detail', item: action.item}
        case 'TOSHOWDETAILDRIVER':
          return {...state, navi_core:'detaildriver', item: action.item}
        case 'TOHISTORY':
          return {...state, navi_core:'history'}
        case 'TOCHATLIST':
          return {...state, navi_core:'chatlist'}
        case 'TOCHATPAGE':
          return {...state, navi_core:'chatpage'}
        case 'CLEAN':
          return {...state, data : [], undriver: [], alldriver: [], unpassenger: [], allpassenger: []}
        case 'GOBACKTORESULT':
          return {...state, navi_core:'result'}
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
        case 'DRIVERALL':
          return {...state, 
                    alldriver: state.alldriver.concat(action.array)
                 };  
        case 'PASSENGERALL':
          return {...state, 
                    allpassenger: state.allpassenger.concat(action.array)
                 };
        case 'DRIVERUNPROCESSED':
          return {...state, 
                    undriver: state.undriver.concat(action.array)
                 }; 
        case 'PASSENGERUNPROCESSED':
          return {...state, 
                    unpassenger: state.unpassenger.concat(action.array)
                 };                                                                                                                                          
        default:
            return state;
    }
}
