import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import './Categories.css';


function Categories (){
     
    const dispatch = useDispatch();
    const categoryList = useSelector((store) => store.categoriesReducer .items);
    console.log ('category list',categoryList);
    useEffect(() => {
        dispatch({ type: 'FETCH_CATEGORIES' });
    }, [dispatch]);

return(
    <div className="categories-container">
            <h1 className="categories-title">Categories</h1>
            <table className="categories-table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryList.map((item) => (
                        <tr key={item.id}>
                            <td>{item.user_id}</td>
                            <td>{item.name}</td>
                            <td className={`type-${item.type}`}>{item.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>


)

}
export default Categories;