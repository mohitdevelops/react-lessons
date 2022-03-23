import Items from "./Items";

export default function ProductItems(props) {
	
	return (
		<div className="productItemsWrapper">
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
