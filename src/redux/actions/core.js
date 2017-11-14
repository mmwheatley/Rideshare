export const makedecide = (token, decide, ride_id, application_id) => {
    return (dispatch) => {
        console.log('ask for join');
        console.log(token, decide, ride_id, application_id);

        fetch('https://rideshare-carpool.herokuapp.com/rides/respond_to_ride', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            },

            body: JSON.stringify({
                ride: ride_id,
                application: application_id,
                accept: decide
            })
        }).then((response) => {
            response.json().then(data_got => {
                console.log(data_got);
                // switch (data_got.code) {
                //     case 0: //no_error
                //         console.log('SUCCESS!!');
                //         alert("applied!")
                //         dispatch({
                //             type: 'TOMAIN',
                //         });
                //         break;
                //     default:
                //         console.log('exist an error');
                //         alert("error");

                // }
            });
        });
        
    }
};


export const tohistory = (token) => {
    return (dispatch) => {
        console.log('ask for history');
        console.log(token);

        fetch('https://rideshare-carpool.herokuapp.com/rides/get_unprocessed_orders', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'x-access-token': token
            }
        }).then((response) => {
            response.json().then(data_got => {
                console.log(data_got.data);
                switch (data_got.code) {
                    case 0: //no_error
                        console.log('got driver unprocessed!!');

                        dispatch({
                            type: 'DRIVERUNPROCESSED',
                            array: data_got.data
                        });
                        break;
                    default:
                        console.log('exist an error');
                        alert("error");

                }
            });
        });

        fetch('https://rideshare-carpool.herokuapp.com/rides/get_offering_orders', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'x-access-token': token
            }
        }).then((response) => {
            response.json().then(data_got => {
                switch (data_got.code) {
                    case 0: //no_error
                        console.log('got driver all orders!!');
                        console.log(data_got.data);
                        dispatch({
                            type: 'DRIVERALL',
                            array: data_got.data
                        });
                        break;
                    default:
                        console.log('exist an error');
                        alert("error");

                }
            });
        });

        fetch('https://rideshare-carpool.herokuapp.com/rides/get_applied_orders', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'x-access-token': token
            }
        }).then((response) => {
            response.json().then(data_got => {
                switch (data_got.code) {
                    case 0: //no_error
                        console.log('got passenger all orders!!');
                        console.log(data_got.data);
                        dispatch({
                            type: 'PASSENGERALL',
                            array: data_got.data
                        });
                        break;
                    default:
                        console.log('exist an error');
                        alert("error");

                }
            });
        });

        fetch('https://rideshare-carpool.herokuapp.com/rides/get_pending_applications', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'x-access-token': token
            }
        }).then((response) => {
            response.json().then(data_got => {
                switch (data_got.code) {
                    case 0: //no_error
                        console.log('got passenger unprocessed!!');
                        console.log(data_got.data);
                        dispatch({
                            type: 'PASSENGERUNPROCESSED',
                            array: data_got.data
                        });
                        break;
                    default:
                        console.log('exist an error');
                        alert("error");
                }
            });
        });

        dispatch({
            type: 'TOHISTORY'
        });

    
    }
};

export const tochatlist = () => {
    return {
        type: 'TOCHATLIST'
    };
};

export const goToChatPage = () => {
    return {
        type: 'TOCHATPAGE'
    };
};

export const topost = () => {
    return {
        type: 'TOPOSTPAGE'
    };
};

export const cleandata = () => {
    return {
        type: 'CLEAN'
    };
};

export const gobacktoresult = () => {
    return {
        type: 'GOBACKTORESULT'
    };
};

export const showDetailInfo = (item) => {
    return (dispatch) => {
        console.log('begin to show');
        console.log(item);
        dispatch({
            type: 'TOSHOWDETAIL',
            item: item
        });
        
    }
};

export const showDetailInfoDriver = (item) => {
    return (dispatch) => {
        console.log('driver detail');
        console.log(item);
        dispatch({
            type: 'TOSHOWDETAILDRIVER',
            item: item
        });
        
    }
};

export const askForJoinIn = (token, item) => {
    return (dispatch) => {
        console.log('ask for join');
        console.log(item);
        console.log(token);

        fetch('https://rideshare-carpool.herokuapp.com/rides/apply_to_join', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            },

            body: JSON.stringify({
                ride: item._id
            })
        }).then((response) => {
            response.json().then(data_got => {
                console.log(data_got);
                switch (data_got.code) {
                    case 0: //no_error
                        console.log('SUCCESS!!');
                        alert("applied!")
                        dispatch({
                            type: 'TOMAIN',
                        });
                        break;
                    default:
                        console.log('exist an error');
                        alert("error");

                }
            });
        });
        
    }
};


export const getresult = (token, pick_up_location,drop_off_location,departDate) => {
    return (dispatch) => {
        console.log('get result')
        console.log(token, pick_up_location,drop_off_location,departDate)

        fetch('https://rideshare-carpool.herokuapp.com/rides/search_ride', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            },

            body: JSON.stringify({
                departDate: departDate,
                pickUpLoc: pick_up_location,
                dropOffLoc: drop_off_location
            })
        }).then((response) => {
            response.json().then(data_got => {
                console.log(data_got);
                switch (data_got.code) {
                    case 0: //no_error
                        console.log('SUCCESS!!');
                        dispatch({
                            type: 'GETRESULT',
                            array: data_got.data
                        });
                        break;
                    default:
                        console.log('exist an error');
                        alert("error");

                }
            });
        });
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
                        alert("success");
                        dispatch({
                        	type: 'POST_SUCCESS',
                        });
                        break;
                    default:
                        console.log('exist an error');
                        alert("error");

                }
            })
        });
    };
};