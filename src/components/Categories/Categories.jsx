import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";


function Categories (){
     
    const dispatch = useDispatch();
    const categoryList = useSelector((store) => store.categoriesReducer .items);
    console.log ('category list',categoryList);
    useEffect(() => {
        dispatch({ type: 'FETCH_CATEGORIES' });
    }, [dispatch]);

return(
    <tr>
    <h1>This is a category page</h1>
    {categoryList.map((item) => (
        <tr key={item.id}>
        <td>{item.user_id}</td>                          
        <td>{item.name}</td>
        <td>{item.type}</td>                          
        
    </tr>
    ))}
    </tr>


)

}
export default Categories;