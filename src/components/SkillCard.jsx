import React from 'react';

export default function SkillCard({ icon: Icon, title, skills }) {
    return (
        <div className=' mt-20 sm
         gap-2 bg-gray-950 lg:p-20 rounded-3xl'>

            <div className='flex'>
            <Icon className='text-4xl text-yellow-200 bf hover:text-blue-400 hover:cursor-pointer' />
            <h1 className='text-orange-600 mb-20 ml-5 text-lg md:text-3xl font-customFont font-semibold'>{title}</h1>

            </div>
            <div>
                {skills.map((skill, index) => (
                    <div className='flex mt-7' key={index}>
                        <img src={skill.icon} className='h-6 w-6 mr-10' alt={skill.name} />
                        <p className='text-[#D3D3D3] text-left font-customFont'>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
