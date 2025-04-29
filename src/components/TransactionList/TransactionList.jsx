import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import './TransactionList.css';


function TransactionList(){
    const transactionListItem = useSelector((store) => store.transactionListReducer.items);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch ({type : 'FETCH_TRANSACTION_LIST'})
    }),[dispatch];

    
    return(
    <div className="transaction-container">
        <h1 className="transaction-title"> TransactionList</h1>

        <table className="transaction-table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Account ID</th>
                        <th>Category ID</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Transaction_Date</th>
                        <th>Created_At</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionListItem.map((item) => (
                        <tr key={item.id}>
                            <td>{item.user_id}</td>
                            <td>{item.account_id}</td>
                            <td>{item.category_id}</td>
                            <td>{item.amount}</td>
                            <td>{item.type}</td>
                            <td>{item.description}</td>
                            <td>{item.transaction_date}</td>
                            <td>{item.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        
        </div>
    


    )

    


}
export default TransactionList;