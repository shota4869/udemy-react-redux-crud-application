import _ from 'lodash' //こいつは配列構造のものをidをキーにオブジェクトを生成するのを得意とするライブラリ
import { READ_EVENTS } from '../actions'


const switchEvents = (events = {}, action ) => { 
    switch(action.type){
        case READ_EVENTS:
            // console.log(action.response.data)
            // console.log(_.mapKeys(action.response.data,'id'))
            return _.mapKeys(action.response.data,'id')
        default:
            return events
    }
} 

export default switchEvents;