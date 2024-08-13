import React from 'react'

function EduCloud() {

    const downloadPdf = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/dissertation.pdf`; // Adjust this if the file is located elsewhere.
        link.download = 'dissertation.pdf'; // The name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }
    return (
        <div className='xl:flex justify-evenly mt-40'>
            <div className='hidden lg:block w-1/3'></div>
            <img src='./educloud.jpeg' className='w-12/12 xl:w-4/12 rounded-xl border-2 border-orange-300' />
            <div>
                <h1 className='ml-10 text-[#d3d3d3] font-customFont text-xl font-semibold text-center xl:text-left  mt-10 xl:mt-0'><span className='text-yellow-500'>EduCloud </span> AI (Dissertation Project for Masters in Data Science )</h1>
                <p className='mt-5 ml-10 w-12/12 xl:w-1/3 text-[#d3d3d3] text-sm font-customFont'>

                    Edu-Cloud AI, a revolutionary educational platform that combines the power of the MERN stack and AI technology. 🌐
                    🎓 Edu-Cloud AI is designed to transform the way we learn and teach, making education more accessible, interactive, and personalized. With the integration of OpenAI's GPT-3 and the robustness of the MERN (MongoDB, Express.js, React, Node.js) stack, this platform offers:
                    <br />
                    ✅ Instant Summaries of Articles & Books <br></br>
                    ✅ Personalized Study Recommendations <br />
                    ✅ AI-Powered Student Query System<br />
                    ✅ Assignment Feedback with AI Insights<br />
                    ✅ Subject-Specific AI Assistance<br />
                    ✅ Exam Tips & Career Guidance<br />
                    ✅ Custom Learning Roadmaps  <br />
                </p>
                <div className='lg:flex gap-2'>
                    <p className='text-[#d3d3d3] ml-10 font-customFont text-sm mt-5 font-bold '>Tech Used  </p>
                    <div className='flex ml-10'>
                        <img src='./gpt.png' className='w-8 h-8 mt-3 ml-3' />
                        <img src='./python.png' className='w-8 h-8 mt-3 ml-3' />
                        <img src='./react.png' className='w-8 h-8 mt-3 ml-3' />
                        <img src='./redux.png' className='w-8 h-8 mt-3 ml-3' />
                        <img src='./node.png' className='w-8 h-8 mt-3 ml-3' />
                        <img src='./express.png' className='w-8 h-8 mt-3 ml-3' />
                        <img src='./mongo.png' className='w-8 h-10 mt-3 ml-3' />

                    </div>
                    <div className='flex gap-10 justify-center lg:ml-10'>
                        <button onClick={downloadPdf} className='w-36 font-customFont text-yellow-500 text-sm h-12 border mt-10 border-yellow-500 hover:bg-yellow-600 hover:font-bold'>
                            Dissertaion PDF
                        </button>
                        <button onClick={() => window.location.href = 'https://github.com/priyo105/dissertation_educloud_AI'} className='w-36 text-yellow-500 font-customFont text-sm h-12 border mt-10 border-orange-700 hover:bg-orange-800 hover:font-bold'>
                            Github
                        </button>
                    </div>
                </div>
            </div>
        </div>)
}

export default EduCloud