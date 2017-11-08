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
        console.log(date_from ,date_to)


        fetch('https://rideshare-carpool.herokuapp.com/rides/post_ride', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            },

            body: JSON.stringify({
                departDate: {from: date_from, to: date_to},
                pickUpLoc: {address:pick_up_location,range: pick_up_range},
                dropOffLoc: {address:drop_off_location, range: drop_off_range},
                showNumber: button_value,
                totalSeats: seat,
                price: price
            })
        }).then((response) => {
            response.json().then(data => {
                switch (data.code) {
                    case 0: //no_error
                        console.log('SUCCESS!!');
                        console.log(data);
                        dispatch({
                        	type: 'POST_SUCCESS',
                        });
                        break;
                    default:
                        console.log('exist an error');
                        dispatch({
                            type: 'POST_NETWORK_ERROR'
                        }); 

                }
            })
        });
    };
};