import Image from "next/image";
function Footer({img, title,description, buttonText}){
    return(
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>About</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>Community</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>Its a pretty clone</p>
                <p>Referrals accepted</p>
                <p>ReactJs build</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>Host</h5>
                <p>Ipeleng Lebelo </p>
                <p>Presents</p>
                <p>Airbnb Clone</p>
                <p>Build on React and Next.js</p>
                <p>With Tailwind Css</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>Support</h5>
                <p>Help center</p>
                <p>Trust & Safety</p>
                <p>Say Hi</p>
                <p>Easter Eggs</p>
                <p>For the win</p>
            </div>

        </div>
    )
}

export default Footer