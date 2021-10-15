import { combineReducers, createStore } from "redux";

import { gioHangStore } from './gioHangStore';

// reducer: khai báo state, gán lại giá trị cho state và render lại UI
const rootReducer = combineReducers({
//chứa các reducer
    //chứa các state của ứng dụng
    gioHangStore:gioHangStore    
   
    // xemChiTietReducer
    // reducerA
    // reducerB
});

export const store = createStore(rootReducer);

