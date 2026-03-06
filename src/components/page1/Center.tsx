import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Center = ({cards}) => {
  return (
    <div className='bg-white flex-1 w-full flex items-stretch  px-16'>
        <LeftContent/>
        <RightContent cards={cards}/>
    </div>
  )
}

export default Center