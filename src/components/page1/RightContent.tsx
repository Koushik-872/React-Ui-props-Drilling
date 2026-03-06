import React from 'react'
import ImageContent from './ImageContent'

const RightContent = ({cards}) => {
  return (
    <div className='flex-1 flex items-center justify-start gap-4 pl-8'>
      {cards.map((card) => (
        <ImageContent key={card.number} {...card} />
              ))}

    </div>
  )
}

export default RightContent