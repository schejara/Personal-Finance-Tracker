import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


function TransactionList(){
    const transactionItem = useSelector((store) => store.transactionListReducer.items);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch ({type : 'FETCH_TRANSACTION_LIST'})
    }),[dispatch];

    
    return(
    <div>
        <h1>This is TransactionList</h1>
        
        
        
    </div>


    )

    


}
export default TransactionList;