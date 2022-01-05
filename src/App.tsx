import { useState, useEffect } from 'react';
import "./styles.css";
import Posts from './data/posts.json';

const PRODUCTS_PER_PAGE = 9;
const TOTAL_PRODUCTS = Posts.data.length;
const PRODUCT_TYPE = ['all','boots', 'gumshoes', 'sandals', 'shoes', 'slippers', 'sneakers'];
const SEX = ['all', 'man', 'woman'];
const COLOR = ['all','beige', 'black', 'blue', 'brown', 'red', 'white'];

export default function App() {

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
    setProductsCount(productsCount + PRODUCTS_PER_PAGE);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="menu">
        <div>
          <select name="" id="">
            {PRODUCT_TYPE.map((productType, i) => (
              <option value={productType} key={i}>{productType}</option>
            ))}
          </select>
          <select name="" id="">
            {SEX.map(gender => (
              <option value={gender} key={gender}>{gender}</option>
            ))}
          </select>
          <select name="" id="">
            {COLOR.map(colour => (
              <option value={colour} key={colour}>{colour}</option>
            ))}
          </select>
        </div>
        <div>{`showing ${productsCount} of ${totalFilterProductsCount}`}</div>
        <button type="button" onClick={handlePagination}>Load More</button>
      </div>
      <div className="container">{products.map((product, i) => {
        return (
          <div key={i} className="product">{product.color} - {product.sex} - {product.type}</div>
        )
      })}</div>
      
    </div>
  );
}
