import { useEffect, useState } from 'react';
import cardsData from 'api/cards';

export default function Cards() {

  const[cards, setCards] = useState([])

  useEffect(() => {
    setCards(cardsData)
  }, [])

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {cards.length && cards.map(cards => (
        <div className='bg-white p-14 rounded-lg shadow-lg flex flex-col items-center justify-center text-center'>
          <img className='w-[150px] h-[150px] mb-6' src={cards.image} />
          <h6 className="font-semibold text-lg text-brand-color">{cards.title}</h6>
          <p className='mt-2 text-sm text-gray-700'> {cards.description} </p>
        </div>
      ))}
    </div>
  )
}
