import Items from "./Items";
import ItemDateFilter from "../../ItemDateFilter";
import { useState } from "react";

export default function ProductItems(props) {

	const [dateYear, setDateYear] = useState();

	setDateYear('test');
	
	return (
		<div className="productItemsWrapper">
			<ItemDateFilter filteredYearValue={dateYear}/>
			{props.productListItems.map(function (items) {
				return (
					<Items
						productName={items.name}
						productDescription={items.des}
						productPrice={items.price}
						productDate={items.date}
						productImage={items.image}
					/>
				);
			})}			
		</div>
	);
}
