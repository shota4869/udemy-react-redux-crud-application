
import axios from 'axios';

export const READ_EVENTS = "READ_EVENTS"

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'

const QUERYSTRING = '?token=token123'
/**
 * action crerater
 * 
 * acitonを返すもの redux-thunk で関数を返すことができるようになっている
 */
export const readEvents = () => async dispatch => {
    const response =  await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    // console.log(response)
    dispatch({type: READ_EVENTS , response })
}


