import React from 'react'

function WellBeing() {
    return (
        <div className='p-5 md:p-0 xl:flex justify-center items-center mt-40  xl:ml-20'>
            <div className=' lg:block w-1/3 lg:ml-56'></div>

            <div className='flex justify-center'>
                <img src='./wellbeing.gif' className='w-9/12  xl:w-[500px] xl:ml-10  rounded-xl border-2 border-orange-300 align-middle' />
            </div>
            <div className='lg:ml-20'>
                <h1 className='ml-10 text-[hsl(0,0%,83%)] font-customFont text-xl font-semibold text-center xl:text-left  mt-10 xl:mt-0'><span className='text-yellow-500'>WellBeing</span> Pharmacy</h1>
                <h1 className='ml-10 text-[hsl(0,0%,83%)] font-customFont text-sm font-semibold text-center xl:text-left  mt-10 xl:mt-0'><span className='text-yellow-500'> A project for United Group of Bangladesh (FreeeLance)</span></h1>

                <p className='mt-5 ml-10 w-12/12 xl:w-1/3 text-[#d3d3d3] text-sm font-customFont'> I was heavily involved implementing Figma UI/UX designs into React Native code with dummmy data with real JSON format . Also I integrated some of the APIs which were later built to display Real time Data in the Verofy App.  <span className='text-yellow-500 font-semibold'>React Native</span> gave the app cross platform app that was later tested on Test Flight for IOS. Sadly, my contract with Verofy ended before the app was launched.     </p>
                <div className='lg:flex gap-2'>
                    <p className='text-[#d3d3d3] ml-10 font-customFont text-sm mt-5 font-bold '>Tech Used  </p>
                    <div className='flex ml-10'>
                        <img src='./atom.png' className='w-8 h-8 mt-3 ml-3' />
                        <img src='./redux.png' className='w-8 h-8 mt-3 ml-3' />
                        <img src='./typescript.png' className='w-8 h-8 mt-3 ml-3' />
                        <img src='./jotai.png' className='w-8 h-8 mt-3 ml-3' />
                    </div>
                    <div className='flex gap-10 justify-center lg:ml-10'>
                        <button onClick={() => window.location.href = 'https://wellbeing-pharmacy.en.aptoide.com/app'} className='w-36 font-customFont text-yellow-500 text-sm h-12 border mt-10 border-yellow-500 hover:bg-yellow-600 hover:font-bold'>
                            Live Link
                        </button>
                        {/* <button onClick={() => window.location.href = 'https://github.com/priyo105/expense_tracker_MERN'} className='w-36 text-yellow-500 font-customFont text-sm h-12 border mt-10 border-orange-700 hover:bg-orange-800 hover:font-bold'>
                            Github
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WellBeing