
import ProductEntryForm from './ProductEntryForm';

export default function AddProduct(props){

    const newProductDataAdded = (item) => {
        props.onNewProductAdded(item)
    }

    return(
        <div>
            <h2>Add products</h2>
            <ProductEntryForm onNewProductSubmit={newProductDataAdded}/>       
        </div>
    );
}
