import React from 'react'

function Cancer() {
    return (
        <div className='xl:flex justify-evenly mt-40'>
            <div className='hidden lg:block w-1/3'></div>
            <img src='./cancer.png' className='w-12/12 xl:w-4/12 rounded-xl border-2 border-orange-300' />
            <div>
                <h1 className='ml-10 text-[#d3d3d3] font-customFont text-xl font-semibold text-center xl:text-left  mt-10 xl:mt-0'><span className='text-yellow-500'>White Blood Cell  </span> cancer Detection</h1>
                <p className='mt-5 ml-10 w-12/12 xl:w-1/3 text-[#d3d3d3] text-sm font-customFont'>

                    A machine learning model designed to predict White Blood Cell cancer from bone marrow segments, leveraging the power of TensorFlow and Python. 🧬

                    This innovative model is a game-changer in healthcare, combining advanced technology with medical insights to improve early cancer detection. With an accuracy rate of 88.9%, this project demonstrates the transformative potential of AI in the medical field.

                    Here’s what this model offers: <br />

                    ✅ High-Accuracy Predictions for White Blood Cell cancer <br />
                    ✅ AI-Driven Analysis of Bone Marrow Segments <br />
                    ✅ Early Detection Focus to Improve Patient Outcomes <br />
                    ✅ Seamless Integration with Healthcare Systems <br />
                    ✅ Data Visualization with Matplotlib <br />
                    ✅ Built with TensorFlow and Python on Google Colab <br />
                </p>
                <div className='lg:flex gap-2'>
                    <p className='text-[#d3d3d3] ml-10 font-customFont text-sm mt-5 font-bold '>Tech Used  </p>
                    <div className='flex ml-10'>
                        <img src='./tensf.png' className='w-8 h-8 mt-3 ml-3' />
                        <img src='./python.png' className='w-8 h-8 mt-3 ml-3' />

                    </div>
                    <div className='flex gap-10 justify-center lg:ml-10'>
                        {/* <button onClick={downloadPdf} className='w-36 font-customFont text-yellow-500 text-sm h-12 border mt-10 border-yellow-500 hover:bg-yellow-600 hover:font-bold'>
                            Dissertaion PDF
                        </button> */}
                        <button onClick={() => window.location.href = 'https://github.com/priyo105/dissertation_educloud_AI'} className='w-36 text-yellow-500 font-customFont text-sm h-12 border mt-10 border-orange-700 hover:bg-orange-800 hover:font-bold'>
                            Collab
                        </button>
                    </div>
                </div>
            </div>
        </div>)
}

export default Cancer