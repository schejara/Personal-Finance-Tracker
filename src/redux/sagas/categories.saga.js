import axios from "axios";
import {put, takeLatest} from  "redux-saga/effects";
function*fetchCategories(){
try{
    const categoriesResponse  = yield axios.get('/api/category');
    yield put({type: 'SET_CATEGORIES', payload:  categoriesResponse.data})
    console.log('Fetched Categories:',  categoriesResponse .data);

}
catch(error){
    console.log('error in fetching categories');
}

}

function*categoriesSaga (){
yield takeLatest('FETCH_CATEGORIES',fetchCategories);

}
export default categoriesSaga;