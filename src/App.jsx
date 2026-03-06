import React from 'react'
import PageContent from './components/page1/PageContent'

const cards = [
  { number: 1, description: 'Prime customers, that have access to bank credit and are satisfied with the current product', label: 'Satisfied', badgeColor: 'bg-blue-500 text-white', imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400' },
  { number: 2, description: 'Prime customers, that have access to bank credit and are not satisfied with the current service', label: 'Underserved', badgeColor: 'bg-blue-500 text-white', imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400' },
  { number: 3, description: 'Customers from near-prime and sub-prime segments with no access to bank credit', label: 'Underbanked', badgeColor: 'bg-lime-400 text-black', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' },
]


const App = () => {
  return (
    <div className='parent'>
      <PageContent cards={cards} />
    </div>
  )
}

export default App