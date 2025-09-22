import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  return (
    <header className='shadow-sm  '>
      <div className='  flex items-center justify-between bg-white max-w-[1500px]     h-[70px]  px-10 opacity-[1]'>

      <div className='flex items-center space-x-2'>    
      <button className="bg-blue-400  w-10 h-10 rounded-xl items-center justify-center"> 
        <FontAwesomeIcon icon={faGem} className="text-white" /> 
        </button>

      <h5 className='font-bold text-lg text-gray-800'>E-Comm</h5>

       </div>
       


        <nav>
     <ul className='flex   space-x-20 text-gray-800 font-medium text-medium tracking-wide cursor-pointer '>
        <li className='text-blue-400'>HOME</li>
         <li>BAG</li>
          <li>SNEAKER</li>
           <li>BELT</li>
            <li>CONTACT</li>
      </ul>
 </nav>


             <div className="flex items-center  space-x-3">
                <FontAwesomeIcon icon={faShoppingCart} className="text-black text-lg cursor-pointer" />
                <span className='text-medium font-sm text-gray-800' > items</span>
                <span className='text-medium text-gray-400' > $0.00 </span>
             </div>
        
        
       
      
  



      </div>
    </header>
  )
}

export default Header