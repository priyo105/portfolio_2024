import React from 'react';
import { BiGlobe } from 'react-icons/bi';
import { BsDatabaseFill } from 'react-icons/bs';
import { FaDatabase } from 'react-icons/fa6';
import { TfiMobile } from 'react-icons/tfi';
import Skill from './SkillCard';
import { FaGlobeEurope } from 'react-icons/fa';
import { SiKalilinux } from 'react-icons/si';

export default function Skills() {
    const mobileSkills = [
        { icon: './atom.png', name: 'React Native' },
        { icon: './redux.png', name: 'Redux' },
        { icon: './android.png', name: 'Android Development using Java' },
        { icon: './appstore.png', name: 'Appstore Deploy and Maintain' },
        { icon: './playstore.png', name: 'Playstore Deploy and Maintain' },
        { icon: './typescript.png', name: 'TypeScript' },
        { icon: './testing.png', name: 'Testing (JEST)' },
        { icon: './lib.png', name: 'Libraries: Native Base, RN paper, RN elements, Maps etc.' },
    ];

    const webSkills = [
        { icon: './react.png', name: 'React JS' },
        { icon: './redux.png', name: 'Redux' },
        { icon: './typescript.png', name: 'TypeScript' },
        { icon: './tailwind.png', name: 'Tailwind CSS' },
        { icon: './react_query.png', name: 'React Query' },
        { icon: './next.png', name: 'Next JS' },

    ];

    const backendSkills = [
        { icon: './typescript.png', name: 'TypeScript' },
        { icon: './node.png', name: 'Node JS' },
        { icon: './express.png', name: 'Express JS' },
        { icon: './mongo.png', name: 'Mongo DB' },
        { icon: './sql.png', name: 'SQL, PostgreSQL' },
        { icon: './devops.png', name: 'CI/CD Pipeline' },
    ];

    const dataScienceSkills = [
        { icon: './python.png', name: 'Python' },
        { icon: './tensf.png', name: 'TensorFlow' },
        { icon: './scikit.png', name: 'Scikit Learn' },
        { icon: './sql.png', name: 'SQL' },
        { icon: './data-analytics.png', name: 'Data Analysis, Insights and Future Predictions' },
        { icon: './data-mining.png', name: 'Data Mining' },
    ];

    const softSkills = [
        { icon: './team.png', name: 'Team Player' },
        { icon: './problem.png', name: 'Problem Solving' },
        { icon: './ladybug.png', name: 'Bug Solver' },
        { icon: './adaptation.png', name: 'Adaptibility' },
        { icon: './help.png', name: 'Leadership and Mentor' },

    ];


    const tools = [
        { icon: './windows.png', name: 'VS Code' },
        { icon: './android_studio.png', name: 'Android Studio' },
        { icon: './xcode.png', name: 'Xcode' },
        { icon: './chrome.png', name: 'Chrome Dev Tools' },
        { icon: './git.png', name: 'Git' },
        { icon: './aws.png', name: 'AWS' },


    ];

    return (
        <div id="skills">
            <h1 className='text-center text-yellow-500 font-bold mt-40 text-2xl font-customFont'> Explore My Skills </h1>

            <p class="max-w-lg mx-auto  mt-10 p-6 bg-black border border-gray-600 rounded-lg shadow-md text-zinc-400 text-lg  font-customFont">
                “Computer programming is an art, because it applies accumulated knowledge to the world, because it requires skill and ingenuity, and especially because it produces objects of beauty.”
                <span class="block text-right mt-4 not-italic font-bold text-gray-400">- Donald Knuth</span>
            </p>

            <div className=' gap-4 lg:grid md:grid-cols-2 xl:grid-cols-3 mt-10 justify-evenly p-10 text-center  ml-5 md:ml-20 mr-10 md:mr-20 border-yellow-500 border-2 rounded-3xl'>
                <Skill icon={TfiMobile} title="Mobile App Development" skills={mobileSkills} />
                <Skill icon={FaGlobeEurope} title="Frontend Development" skills={webSkills} />
                <Skill icon={BsDatabaseFill} title="Backend Development" skills={backendSkills} />
            </div>


            <div className=' gap-6 lg:grid md:grid-cols-2 xl:grid-cols-3 mt-10 justify-evenly p-10 text-center  ml-5 md:ml-20 mr-10 md:mr-20 border-yellow-500 border-2 rounded-3xl'>
                <Skill icon={BsDatabaseFill} title="Data Science" skills={dataScienceSkills} />
                <Skill icon={SiKalilinux} title="Soft Skills" skills={softSkills} />
                <Skill icon={FaGlobeEurope} title="Tools" skills={tools} />

            </div>
        </div>
    );
}
