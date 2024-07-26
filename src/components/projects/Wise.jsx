import React from 'react'

function Wise() {
  return (
    <div className='xl:flex justify-evenly mt-40'>
    <div className='hidden lg:block w-1/3'></div>
    <img src='./wisetracker.gif' className='w-12/12 xl:w-3/12 rounded-xl border-2 border-orange-300' />  
     <div>
         <h1 className='ml-10 text-[#d3d3d3] font-customFont text-xl font-semibold text-center xl:text-left  mt-10 xl:mt-0'><span className='text-yellow-500'>Wise</span> Expense Tracker (Full Stack)</h1>
          <p className='mt-5 ml-10 w-12/12 xl:w-1/3 text-[#d3d3d3] text-sm font-customFont'> Wise Expense Tracker is a modern Expense Tracker App with modern UI/UX design , user friendly intefaces and a insightful Analytics. It is a fullstack Application developed with <span className='text-yellow-500 font-semibold'>MERN </span>  stack. TailWind CSS has been used to Design the Layouts. The App Authincates with Google and Github as well as 0Auth2 Sign Up method. ReCharts has been used to implement beautiful insightful Analytics.  </p>
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
                <button onClick={()=>window.location.href='https://wise-expensetracker.netlify.app/'} className='w-36 font-customFont text-yellow-500 text-sm h-12 border mt-10 border-yellow-500 hover:bg-yellow-600 hover:font-bold'>
                    Live Link
                </button>
                <button onClick={()=>window.location.href='https://github.com/priyo105/expense_tracker_MERN'} className='w-36 text-yellow-500 font-customFont text-sm h-12 border mt-10 border-orange-700 hover:bg-orange-800 hover:font-bold'>
                    Github
                </button>
            </div>
          </div>                
    </div>               
</div>    
)
}

export default Wise