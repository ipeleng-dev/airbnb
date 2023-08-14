import Image from "next/image";
function Header(){
    return(
        <header className='sticky top-0 z-50'>
           {/* Left */}
           <div className="relative flex items-center h-10 cursor-pointer my-auto">
               <Image src='https://links.papareact.com/qd3'
                      alt='logo of the website'
                      layout='fill'
                      objectFit='contain'
                      objectPosition='left'
               />
           </div>
            {/* Middle */}
            <div></div>

            {/* Right */}
            <div></div>
        </header>
    );
}
export default Header