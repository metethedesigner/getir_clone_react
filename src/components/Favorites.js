import { useEffect, useState } from 'react';
import Products from 'api/products.json';
import ProductItem from 'components/ui/ProductItem';


export default function Favorites() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
		setProducts(Products)
	}, [])

  return (
    <div>
      <h3 className="text-sm font-semibold mb-3 px-6 md:px-0">Favoriler</h3>
      <div className='grid grid-cols-2 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 gap-0.1 bg-white rounded-lg overflow-hidden'>
        {products.length && products.map((product) => <ProductItem product={product} /> ) }
      </div>
    </div>
  )
}
