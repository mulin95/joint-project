import {
  SAVE_SCROLL,
  LOAD_DATA,
  SAGA_LOAD_DATA
} from './actionTypes';

const save_scroll=(data) => {
  return{
    type:SAVE_SCROLL,
    data
  }
}
const load_data=(data) => {
  return{
    type:LOAD_DATA,
    data
  }
}
const saga_load_data=(data) => {
  return{
    type:SAGA_LOAD_DATA,
    data
  }
}
export {
  save_scroll,
  load_data,
  saga_load_data
}