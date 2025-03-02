import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
function*fetchTransactionList() {
    try{
     const transactionListResponse  = yield axios.get('/api/transactionList');
     yield put({type: 'SET_TRANSACTION_LIST', payload:  transactionListResponse.data})
     console.log('Fetched Transaction List:',  transactionListResponse .data);

 }
 
 catch (error){
     console.log('Transaction List saga get request error', error);
 }


}
function* transactionListSaga () {
    yield takeLatest('FETCH_-TRANSACTION_LIST', fetchTransactionList);
}
export default transactionListSaga;