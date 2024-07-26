import React from 'react';

function Achievements() {
    const achievements = [
        "Completed M.Sc. in Data Science with distinction",
        "Multiple Employee of the Month Awards in IT During EkkBaz Pte. Employment",
        "Published a research paper in a reputed journal on Image Processing",
        "Best Project of 2016 in MIST (Overall). The Project was named Cost Effective Advanced Battlefield Command System",
        "Successfully delivered Secondary Sales Automation Project for Shell Bangladesh",
        "Successfully delivered WellBeing Pharmacy App for United Group in Bangladesh which scaled to 5000 users",
        "Successfully delivered 20+ Freelancing Projects for Various clients.",
    ];

    return (
        <div className="min-h-screen  p-5" id="ach">
            <h1 className="text-center font-customFont text-yellow-500 font-bold text-3xl p-5 mt-20 lg:mt-40">Achievements</h1>
            <hr className='w-2/4 lg:w-2/12 mt-2 mx-auto opacity-30' />

            <div className="space-y-14 mt-40">
                {achievements.map((item, index) => (
                    <div key={index} className="bg-zinc-800 text-white shadow-md rounded-3xl  p-10 lg:p-12 flex items-center mx-auto max-w-3xl hover:bg-zinc-900">
                        <img src="./badge.png" alt="Achievement Badge" className="w-10 h-10 mr-4  ml-5 lg:ml-20" />
                        <h1 className="text-zinc-200 text-left font-customFont font-semibold">{item}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Achievements;
