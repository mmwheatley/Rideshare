const defaultState = {
    navi_core:'main',
    data : [],
    item: {},
    undriver: [],
    alldriver: [],
    unpassenger: [],
    chatdata: [],
    allpassenger: [],
    chathistory: [],
    userinfo:[],
    userID:'',
    userFirstName: '',
    userLastName: '',
    chatterID:'',
    chatterFirstName: '',
    chatterLastName: '',
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'TOSHOWDETAIL':
          return {...state, navi_core:'detail', item: action.item}
        case 'TOSHOWDETAILDRIVER':
          return {...state, navi_core:'detaildriver', item: action.item}
        case 'TOSHOWDETAILPASSENGER':
          return {...state, navi_core:'detailpassenger', item: action.item}
        case 'TOMODIFYINFO':
          return {...state, navi_core:'modify'}
        case 'CHANGEPASSWORD':
          return {...state, navi_core:'changepassword'}
        case 'TODRIVERINFO':
          return {...state, navi_core:'driverinfo'}
        case 'TOHISTORY':
          return {...state, navi_core:'history'}
        case 'TOPROFILE':
          return {...state, navi_core:'profile', userinfo: action.item}
        case 'SAVEUSERID':
          return {...state, userID: action.id, userFirstName: action.userFirstName, userLastName: action.userLastName}
        case 'TOCHATPAGE':
          return {...state, navi_core:'chatpage', chatterID: action.chatterID, chatterFirstName: action.chatterFirstName, chatterLastName: action.chatterLastName,}
        case 'CLEAN':
          return {...state, chatdata: [], data: [], undriver: [], alldriver: [], unpassenger: [], allpassenger: []}
        case 'CLEANCHATHISTORY':
          return {...state, chathistory: []}
        case 'SAVECHATHISTORY':
          return {...state, 
                    chathistory: state.chathistory.concat(action.messages)
                 };
        case 'SHOWSENTMESSAGE':
          return {...state, 
                    chathistory: action.item.concat(state.chathistory)
                 };
        case 'GOBACKTORESULT':
          return {...state, navi_core:'result'}
        case 'POST_SUCCESS':
          return {...state, navi_core:'main'};     
        case 'TOPOSTPAGE':
          return {...state, navi_core:'post'}; 
        case 'TOHELPPAGE':
          return {...state, navi_core:'help'}
        case 'TOMAIN':
          return {...state, navi_core:'main'}; 
        case 'TOCHATLIST':
          return {...state, 
                    navi_core:'chatlist',
                    chatdata: state.data.concat(action.chat_user_data)
                  };
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
