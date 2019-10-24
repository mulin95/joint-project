import {
    CHANGE_USERNAME,
    SAGA_LOAD_DATA
} from './actionTypes'

const changeUsername = (data)=>{
    return {
        type : CHANGE_USERNAME,
        data
    }
}

const sagaLoadData =()=>{
    return{
        type:SAGA_LOAD_DATA
    }
}

export{
    changeUsername,
    sagaLoadData
}