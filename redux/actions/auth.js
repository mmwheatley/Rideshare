export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};

export const cleanError = () => {
    return {
        type: 'CLEAN_ERROR'
    };
};

export const onRegister = () => {
    return {
        type: 'REGISTER'
    };
};


export const loginUser = (email, password) => {
    return (dispatch) => {
        // dispatch({
        //     type: 'LOAD_SPINNER'
        // });
        // console.log('spinner')
        fetch('https://rideshare-carpool.herokuapp.com/users/get_token', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then((response) => {
            console.log(response);

            response.json().then(data => {
                switch (data.code) {
                    case 1: //user_not_found
                        console.log('user_not_found!!');
                        dispatch({
                            type: 'LOGIN_USER_NOT_EXIST'
                        });
                        break;
                    case 0: //no_error
                        console.log('SUCCESS!!');
                        console.log(data);
                        dispatch({
                            type: 'LOGIN_USER_SUCCESS',
                            email: email,
                            password: password,
                            authentication_token: data.token
                        });
                        break;
                }
            })
        });
    };
};

