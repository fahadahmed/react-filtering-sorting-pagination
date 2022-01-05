import { useState, useEffect } from 'react';
import "./styles.css";
import Posts from './data/posts.json';

const PRODUCTS_PER_PAGE = 9;
const TOTAL_PRODUCTS = Posts.data.length;
export default function App() {

  console.log(TOTAL_PRODUCTS);
  const [products, setProducts] = useState(Posts.data);
  const [productsCount, setProductsCount] = useState(PRODUCTS_PER_PAGE);
  const [totalFilterProductsCount, setTotalFilterProductsCount] = useState(TOTAL_PRODUCTS);

  useEffect(() => {
    setProducts(products.slice(0, PRODUCTS_PER_PAGE));
  }, []);

  useEffect(() => {
    setProducts(Posts.data.slice(0, productsCount));
  }, [productsCount])

  const handlePagination = () => {
    console.log('We need to update the products page count');
    setProductsCount(productsCount + PRODUCTS_PER_PAGE);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>{`showing ${productsCount} of ${totalFilterProductsCount}`}</div>
      <button type="button" onClick={handlePagination}>Load More</button>
      <div className="container">{products.map((product, i) => {
        return (
          <div key={i} className="product">{product.color} - {product.sex} - {product.type}</div>
        )
      })}</div>
      
    </div>
  );
}
