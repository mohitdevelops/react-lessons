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

