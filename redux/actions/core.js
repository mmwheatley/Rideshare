export const topost = () => {
    return {
        type: 'TOPOSTPAGE'
    };
};

export const tomain = () => {
    return {
        type: 'TOMAIN'
    };
};


export const postinfo = (token, date_from ,date_to, pick_up_location, pick_up_range, drop_off_location, drop_off_range, seat, price, button_value) => {
	return (dispatch) => {
        console.log('start post')
        console.log(token, date_from ,date_to, pick_up_location, pick_up_range, drop_off_location, drop_off_range, seat, price, button_value)


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

            // response.json().then(data => {
            //     switch (data.code) {
            //         case 0: //no_error
            //             console.log('SUCCESS!!');
            //             console.log(data);
            //             dispatch({
            //             	type: 'REGISTER_SUCCESS',
            //             	email: email
            //             });
            //             break;
            //         case 28: // 'user_existed '
            //             console.log('user_existed');                                                                               
            //             dispatch({
            //                 type: 'USER_EXISTED'
            //             }); 
            //             break; 
            //         default:
            //             console.log('network error');
            //             dispatch({
            //                 type: 'NETWORK_ERROR'
            //             }); 

            //     }
            // })
        });
    };
};