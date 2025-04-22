import axios from "axios";
import {put, takeLatest} from  "redux-saga/effects";
function*fetchTransactionList(){
try{
    const transactionListResponse  = yield axios.get('/api/transactionList');
    yield put({type: 'SET_TRANSACTION_LIST', payload:  transactionListResponse .data})
    console.log('Fetched transaction list:',  transactionListResponse  .data);

}
catch(error){
    console.log('error in fetching transactionlist');
}

}

function*transactionListSaga (){
yield takeLatest('FETCH_TRANSACTION_LIST',fetchTransactionList);

}
export default transactionListSaga ;