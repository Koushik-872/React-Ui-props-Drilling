
import Navbar from './Navbar'
import Center from './Center'


const PageContent = ({cards}) => {
  return (
    <div className='h-screen w-full bg-gray-100 flex flex-col'>
    <Navbar/>
    <Center cards={cards}/>
    </div>
  )
}

export default PageContent