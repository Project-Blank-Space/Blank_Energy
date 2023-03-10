import React from 'react'

function filterbar() {
    return (
        <div className='grid grid-cols-2 w-full px-4'>
            <div className='flex justify-around'>
                <button className='filter_option active'>Living Room</button>
                <button className='filter_option'>Kitchen Room</button>
                <button className='filter_option'>Bed Room</button>
                <button className='filter_option'>Movie Room</button>
                <button className='filter_option'>Game Room</button>
                <button className='flex gap-2 text-white items-center p-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add Room
                </button>
            </div>
            <div className='px-3 justify-self-end'>
                <button className='flex gap-2 w-fit p-2 font-semibold items-center rounded-xl bg-[#FFC000] '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add device
                </button>
            </div>

        </div>
    )
}

export default filterbar
