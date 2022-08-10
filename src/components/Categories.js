import { useEffect, useState } from "react";
import categoryData from 'api/categories.json';
import Category from 'components/ui/Category';

export default function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
      // istek
      setCategories(categoryData);
  },[])

  return (
    <div className='bg-white py-4'>
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-3 px-6 md:px-0">Kategoriler</h3>
        <div className='grid grid-cols-4 2xl:grid-cols-12 xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6'>
         {categories && categories.map((category, index) => < Category key={index} category={category} /> )} 
        </div>
      </div>
    </div>
  )
}
