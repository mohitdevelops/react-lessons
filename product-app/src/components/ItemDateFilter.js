import { useState } from "react"
export default function ItemDateFilter(props){

    const [filterValue, setFilterValue] = useState('2022');

    function onFilterDateValue(event){
       setFilterValue(event.target.value);                     
    }

    const filteredYearValue = productListItems.filter(e => {
        return e.date.getFullYear().toString() === filterValue;
    })

    return(
        <div>
            <select value={filterValue} onChange={onFilterDateValue}>                                
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
            </select>
        </div>
    )
}
