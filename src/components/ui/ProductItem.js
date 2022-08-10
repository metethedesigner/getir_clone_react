import { AiOutlinePlus } from 'react-icons/ai';

export default function ProductItem({product}) {
  return (
    <div className="flex flex-col items-center text-center text-sm font-semibold gap-y-1 p-4 relative">
        <button className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 border border-gray-200 rounded-lg text-brand-color shadow-md hover:border-brand-color transition-colors">
          <AiOutlinePlus size={16}/>
        </button>
        <img src={product.image} alt={product.title} />
        <div className="text-brand-color">{product.price}</div>
        <div className="text-gray-900">{product.title}</div>
        <div className="text-gray-500">{product.alt}</div>
    </div>
  )
}
