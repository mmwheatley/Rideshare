/*global fetch:true*/
export const login = (password, email) => {
    return {
        type: 'LOGIN',
        email: email,
        password: password
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};

export const loginUser = (email, password) => {
    console.log('email2:', email);
    console.log('password2', password);
    console.log('')
    return (dispatch) => {
        dispatch({
            type: 'LOAD_SPINNER'
        });
        console.log('spinner')
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
                            type: 'LOGIN_FAILED'
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