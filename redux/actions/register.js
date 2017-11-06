export const register = (email, password, firstName, lastName, mobileNumber) => {
	return (dispatch) => {
        console.log('start register')

        fetch('https://rideshare-carpool.herokuapp.com/users/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                firstName: firstName, 
                lastName: lastName, 
                number: mobileNumber
            })
        }).then((response) => {
            console.log(response);

            response.json().then(data => {
                switch (data.code) {
                    case 0: //no_error
                        console.log('SUCCESS!!');
                        console.log(data);
                        dispatch({
                        	type: 'REGISTER_SUCCESS',
                        });
                        break;
                    case 28: // 'user_existed '
                        console.log('user_existed');                                                                               
                        dispatch({
                            type: 'USER_EXISTED'
                        }); 
                        break; 
                    default:
                        console.log('network error')
                        dispatch({
                            type: 'NETWORK_ERROR'
                        }); 
                        return state;

                }
            })
        });
    };
};

export const cleanError = () => {
    return {
        type: 'CLEAN_ERROR'
    };
};




