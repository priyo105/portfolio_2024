import React from 'react';

export default function Hobby() {
    return (
        <div className='px-4'>
            <h1 className='text-center text-yellow-500 font-bold mt-10 sm:mt-20 lg:mt-40 text-2xl font-customFont'>
                Glimpse of my Hobbies
            </h1>

            <div className='flex flex-col lg:flex-row justify-center items-center mt-10 sm:mt-20 lg:mt-28'>
                <div className='w-full xl:w-1/2 flex justify-center'>
                    <img src='syl.jpg' className='grayscale rounded-full p-10 sm:p-20  sm:w-3/5 lg:w-auto' />
                </div>

                <div className='mt-10 lg:mt-0 lg:ml-10'>
                    <div className='flex flex-col lg:flex-row items-center p-5 lg:p-15'>
                        <img src='./camera.png' className='mr-0 lg:mr-10 w-10 mb-5 lg:mb-0' />
                        <h1 className='text-sm text-zinc-200 font-customFont font-semibold text-center lg:text-left'>
                            I love Photography! Especially Landscape Photography.
                        </h1>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center p-5 lg:p-15'>
                        <img src='./guitar.png' className='mr-0 lg:mr-10 w-14 mb-5 lg:mb-0' />
                        <h1 className='text-sm text-zinc-200 font-customFont font-semibold text-center lg:text-left'>
                            I love Music, and I love to play the acoustic guitar sometimes.
                        </h1>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center p-5 lg:p-15'>
                        <img src='./football.png' className='mr-0 lg:mr-10 w-14 mb-5 lg:mb-0' />
                        <h1 className='text-sm text-zinc-200 font-customFont font-semibold text-center lg:text-left'>
                            I love Football. I used to play but now I watch and talk about football.
                        </h1>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center p-5 lg:p-15'>
                        <img src='./travel.png' className='mr-0 lg:mr-10 w-14 mb-5 lg:mb-0' />
                        <h1 className='text-sm text-zinc-200 font-customFont font-semibold text-center lg:text-left'>
                            I love to explore new places, meet new people, and experience different cultures.
                        </h1>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center p-5 lg:p-15'>
                        <img src='./joystick.png' className='mr-0 lg:mr-10 w-14 mb-5 lg:mb-0' />
                        <h1 className='text-sm text-zinc-200 font-customFont font-semibold text-center lg:text-left'>
                            I love to Game. Although Nowadays I dont get time, but love games.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
