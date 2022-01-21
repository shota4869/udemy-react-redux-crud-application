import axios from 'axios'
export const READ_EVENTS = "READ_EVENTS"

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'//ベースとなるURL
const QUERYSTRING = '?token=token123'
/**
 * action crerater
 * 
 * acitonを返すもの
 */
export const readEvents = () => async dispatch => {
    console.log('Hi')
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    console.log(response)
    dispatch({type: READ_EVENTS , response})
}



