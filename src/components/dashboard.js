import React from 'react'

function dashboard() {
    return (
        <div className='grid grid-cols-2 w-full py-8 px-4'>
            <div className='flex gap-6 justify-self-start items-center'>
                <span className='font-semibold text-white text-3xl'>Dashboard</span>
                <div className='w-80 grid grid-cols-2 p-3 rounded-lg bg-[#252525] whitespace-nowrap text-[#7A7A7A]'>
                    search type of keywords
                    <span className='grid justify-self-end'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>

                </div>
            </div>

            <div className='flex gap-4 px-4 justify-self-end items-center'>
                <div className='p-3 rounded-lg bg-[#252525]'>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11ZM10.9079 6.75C10.4187 6.75 9.96888 6.95485 9.63258 7.30201C9.44859 7.49195 9.30001 7.72353 9.20122 7.98401C9.05434 8.37131 8.62131 8.5662 8.23401 8.41932C7.84671 8.27244 7.65181 7.83941 7.7987 7.45211C7.96962 7.0014 8.22858 6.59552 8.55519 6.25836C9.1539 5.64029 9.98459 5.25 10.9079 5.25C12.79 5.25 14.25 6.84564 14.25 8.73065C14.25 10.3594 13.1666 11.7632 11.6579 12.1232V13C11.6579 13.4142 11.3221 13.75 10.9079 13.75C10.4937 13.75 10.1579 13.4142 10.1579 13V11.9613C10.1579 11.2422 10.7273 10.7842 11.2544 10.6764C12.0802 10.5076 12.75 9.72333 12.75 8.73065C12.75 7.59947 11.8889 6.75 10.9079 6.75ZM12 16.25C12 16.8023 11.5522 17.25 11 17.25C10.4477 17.25 9.99996 16.8023 9.99996 16.25C9.99996 15.6977 10.4477 15.25 11 15.25C11.5522 15.25 12 15.6977 12 16.25Z" fill="#7A7A7A" />
                    </svg>
                </div>
                <div className='p-3 rounded-lg bg-[#252525]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M0 0h24v24H0z" /><path fill="#7a7a7a" d="M14.235 19c.865 0 1.322 1.024.745 1.668A3.992 3.992 0 0 1 12 22a3.992 3.992 0 0 1-2.98-1.332c-.552-.616-.158-1.579.634-1.661l.11-.006h4.471zM12 2c1.358 0 2.506.903 2.875 2.141l.046.171l.008.043a8.013 8.013 0 0 1 4.024 6.069l.028.287L19 11v2.931l.021.136a3 3 0 0 0 1.143 1.847l.167.117l.162.099c.86.487.56 1.766-.377 1.864L20 18H4c-1.028 0-1.387-1.364-.493-1.87a3 3 0 0 0 1.472-2.063L5 13.924l.001-2.97A8 8 0 0 1 8.822 4.5l.248-.146l.01-.043a3.003 3.003 0 0 1 2.562-2.29l.182-.017L12 2z" /></g></svg>
                </div>
                <div className='flex gap-3 text-white items-center'>
                    <div className='rounded-full p-6 bg-[#252525]'></div>
                    <span>Pranjal</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </span>
                </div>

            </div>
        </div>
    )
}

export default dashboard
