import React from 'react'
import Filterbar from './filterbar'
import UsageStatus from '../Usage/UsageStatus'
import Humidity from '../Humidity/humidity'
import Lights from '../Lights/Lights'

function home() {

    const no_lights = { 1: 60, 2: 40, 3: 80, 4: 50, 5: 90 }

    return (
        <div className='flex flex-col gap-3'>
            <Filterbar />
            <div className='w-full flex justify-between gap-4 px-4 mt-10'>

                <div className='rounded-xl w-[30vw] bg-[#252525] px-2'>
                    <div className='flex justify-between items-center px-2 py-3'>
                        <span className='text-white text-xl font-semibold'>Temperature</span>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"/>
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-gray-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#FFC000]"></div>
                        </label>
                    </div>
                    <div className='w-full flex flex-col gap-2 text-center items-center mt-16'>
                        <span className='bg-gradient-to-r from-[#1E1E1E] to-[#FFC000] bg-clip-text text-7xl'><span className='text-transparent bg-clip-text'>24&#x2103;</span></span>
                        <span className='text-[#7A7A7A]'>Temperature</span>
                        <div className='mt-5'>
                            <input
                                value={24}
                                // onChange={(e) => setInterest(e.target.value)}
                                id="default-range"
                                type="range"
                                min="16"
                                max="32"
                                style={{ "--thumb-color": "white" }}
                                class="h-3 w-[20vw] bg-gray-200 rounded-xl range-sm appearance-none cursor-pointer dark:bg-gradient-to-r from-[#1E1E1E] to-[#FFC000]"
                            />
                            
                        </div>
                    </div>

                </div>

                <div className='flex flex-col gap-2 justify-center w-[50vw] mr-16'>
                    <div className='grid grid-cols-2'>
                        <span className='text-white font-semibold text-xl'>Usage Status</span>

                    </div>
                    <div className='flex gap-6 mt-4'>
                        <div className='flex flex-col gap-2'>
                            <span className='text-[#7A7A7A] whitespace-nowrap'>Total hours</span>
                            <span className='text-white font-semibold text-xl text-center'>32h</span>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-[#7A7A7A] whitespace-nowrap'>Total hours today</span>
                            <span className='text-white font-semibold text-xl text-center'>15h</span>
                        </div>
                    </div>
                    <div className='-mt-16'>
                        <UsageStatus />
                    </div>

                </div>

            </div>

            <div className='w-full flex justify-between gap-4 px-4 mt-10'>

                <div className='flex flex-col gap-5 py-4'>
                    <span className='text-white font-semibold text-xl'>Light</span>

                    <div className='grid grid-cols-2 gap-10'>
                        {Object.keys(no_lights).map((key) => (
                            <Lights
                                key={key}
                                index={key}
                                perc={no_lights[key]}
                            />
                        ))}
                    </div>

                    <div className='w-full h-full flex justify-center mt-4 items-end'>
                        <button className='flex gap-2 w-fit p-2 font-semibold items-center rounded-lg bg-[#FFFFFF] hover:bg-[#FFC000] '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Add Light
                        </button>
                    </div>

                </div>

                <div className='flex flex-col gap-2 justify-center w-[50vw] mr-16 py-4'>
                    <div className='grid grid-cols-2'>
                        <span className='text-white font-semibold text-xl'>Humidity</span>
                    </div>
                    <div className='-mt-12 '>
                        <Humidity />
                    </div>
                    <div className='w-full flex justify-center mt-4 '>
                        <button className='flex gap-2 w-fit p-2 font-semibold items-center rounded-lg bg-[#FFFFFF] hover:bg-[#FFC000]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Add Section
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default home
