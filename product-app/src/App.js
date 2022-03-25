import './App.css';
import AddProduct from './components/AddProduct/AddProducts';
import ProductItems from './components/Products/ProductItems/ProductItems';
import ItemDateFilter from './components/ItemDateFilter';
import { useState } from 'react';

export default function App() {

  const ALL_PRODUCTS = [
		{
			name: "Titan",
			des: "Look modish by donning this women's watch from the Ceramic Refresher collection by Titan. Enclosed in a 33 mm case, the mother of pearl round dial is secured by a mineral glass. It displays plain three hands and a crown for time adjustment. The ceramic strap showcases a navy hue that uplifts the look of the timepiece. Besides, it is finished with a deployment clasp that provides a secure fit on the wrist.",
			date: new Date(2020, 7, 14),
			price: 360000,
      image: 'https://cdn.pixabay.com/photo/2020/12/04/16/15/watch-5803619__340.jpg',
		},
    {
			name: "Shampoo",
			des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
			date: new Date(2021, 8, 8),
			price: 360,
      image: 'https://img.freepik.com/free-photo/shampoo-bottle-butterfly-pea-flower-put-white-wooden-background_1150-28107.jpg?size=626&ext=jpg&ga=GA1.2.482173369.1648044063',
		},
    {
			name: "Chair",
			des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pag",
			date: new Date(2019, 1, 30),
			price: 1400,
      image: 'https://img.freepik.com/free-photo/blue-dining-room-chair-room-with-gray-walls_181624-30430.jpg?size=626&ext=jpg&ga=GA1.2.482173369.1648044063',
		},
	];

  const [productLists, setProductList] = useState(ALL_PRODUCTS);
  
  const newProductAdded = function(productLists){
    setProductList(demoFunc =>{
      return [productLists, ...demoFunc]
    })
  }

  return (
    <div className='productsMainWrap'>
      <div className='productsItems'>
        <div className='topBar'>
          <h2>Products</h2>
          <ItemDateFilter />
        </div>        
        <ProductItems productListItems={productLists}/>
      </div>
      <div className='productsEnteryWrapper'>
        <AddProduct onNewProductAdded={newProductAdded}/>
      </div>     
    </div>
  );
}

