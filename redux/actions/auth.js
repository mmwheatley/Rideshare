/*global fetch:true*/
export const login = (password,email ) => {
	    console.log('email:', email),
        console.log('password', password),
        console.log('login');
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

export const loginUser = ( email, password ) => {
	    console.log('email2:', email);
        console.log('password2', password);
        console.log('')
  return (dispatch) => {
  	console.log('doing')
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
              email:email,
              password:password
          })
      }).then((response) => {
        console.log(response);
        if (response.status === 1) {
          console.log('user_not_found!!');
          dispatch({
            type: 'user_not_found'
          });
        } else {
          console.log('SUCCESS!!');
          response.json().then(data => {
            console.log(data);
            dispatch({
              type: 'LOGIN_USER_SUCCESS',
              payload: data
            });
          });
        }
      });
  };
};