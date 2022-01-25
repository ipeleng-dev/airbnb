import React from 'react'
import Image from 'next/image'


function Header() {
  return (
    <header>
        {/*Left*/}
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image 
            src='https://links.papareact.com/qd3' 
            layout='fill' 
            objectFit='contain'
            objectPosition='left'/>
        </div>

        {/*Middle*/}
        <div></div>

        {/*Right*/}
        <div></div>

    </header>
  )
}

export default Header
