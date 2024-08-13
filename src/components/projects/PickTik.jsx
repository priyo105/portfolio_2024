import React from 'react'

function Picktik() {
  return (
    <div className='xl:flex justify-evenly mt-40'>
    <div className='hidden lg:block w-1/3'></div>
    <img src='./picktik.gif' className='w-12/12 xl:w-3/12 rounded-xl border-2 border-orange-300' />  
     <div>
         <h1 className='ml-10 text-[#d3d3d3] font-customFont text-xl font-semibold text-center xl:text-left  mt-10 xl:mt-0'><span className='text-yellow-500'>PicTik</span>  - A social Media Platform (Full Stack )</h1>
          <p className='mt-5 ml-10 w-12/12 xl:w-1/3 text-[#d3d3d3] text-sm font-customFont'> PikTik is a social media App where users can share their status, Pictures and send friend requrests to each other. It is a minimalistic social media for sharing Pic.  <span className='text-yellow-500 font-semibold'>MERN </span>  stack. Various modern packages has been used to implement complex features such as Form Validation, Dark and Light Mode implementation, photo sharing etc. The App Authincates uses oAuth2 Authintication using Node JS and Express JS.  </p>
          <div className='lg:flex gap-2'>
              <p className='text-[#d3d3d3] ml-10 font-customFont text-sm mt-5 font-bold '>Tech Used  </p>
              <div className='flex ml-10'>
              <img src='./react.png' className='w-8 h-8 mt-3 ml-3' />
               <img src='./redux.png' className='w-8 h-8 mt-3 ml-3' />
               <img src='./node.png' className='w-8 h-8 mt-3 ml-3' />
               <img src='./express.png' className='w-8 h-8 mt-3 ml-3' />
               <img src='./mongo.png' className='w-8 h-10 mt-3 ml-3' />
               <img src='./tailwind.png' className='w-8 h-8 mt-3 ml-3' />
              
              </div>
              <div className='flex gap-10 justify-center lg:ml-10'>
                <button onClick={()=>window.location.href='https://pictik.netlify.app/'} className='w-36 font-customFont text-yellow-500 text-sm h-12 border mt-10 border-yellow-500 hover:bg-yellow-600 hover:font-bold'>
                    Live Link
                </button>
                <button onClick={()=>window.location.href='https://github.com/priyo105/social_media_mern'} className='w-36 text-yellow-500 font-customFont text-sm h-12 border mt-10 border-orange-700 hover:bg-orange-800 hover:font-bold'>
                    Github
                </button>
            </div>
          </div>                
    </div>               
</div>    
)
}

export default Picktik