import React from 'react'
import { PrimaryButton, SecondaryButton } from '../../Components/UiElements/Buttons'
import { useAppContext } from '../../UseContext/ContextProvider';
import { LabelInput } from '../../Components/UiElements/TextInputs';
import MatchCard from '../../Components/Cards/MatchCard';

const PackageInformation = () => {

    const { showBackdropWithContent, closeModal, selectedMatch, setSelectedMatch } = useAppContext();
    const data = [
        {
            teamA: 'Leicester C',
            teamB: 'Chelsea',
            id: '1'
        },
        {
            teamA: 'Leicester C',
            teamB: 'Chelsea',
            id: '2'
        },
        {
            teamA: 'Leicester C',
            teamB: 'Chelsea',
            id: '3'
        },
        {
            teamA: 'Leicester C',
            teamB: 'Chelsea',
            id: '4'
        },
        {
            teamA: 'Leicester C',
            teamB: 'Chelsea',
            id: '5'
        },
        {
            teamA: 'Leicester C',
            teamB: 'Chelsea',
            id: '6'
        },
        {
            teamA: 'Leicester C',
            teamB: 'Chelsea',
            id: '7'
        },
        {
            teamA: 'Leicester C',
            teamB: 'Chelsea',
            id: '8'
        }

    ]

    const createPackage = [
        {
            title: 'Match Ticket',
            id: 1
        },
        {
            title: 'External Flight',
            id: 2
        },
        {
            title: 'Lorem Ipsum',
            id: 3
        },
        {
            title: 'Lorem Ipsum',
            id: 4
        }
    ]

    const handleCardClick = (id) => {
        console.log(id);
        setSelectedMatch(id);
    };

    const handleShowBackdrop = () => {
        const content = (
            <div className='grid grid-cols-12 bg-black/40 p-10 rounded-lg backdrop-blur-3xl justify-center m-10 gap-y-10 '>
                <div className='col-span-12'>
                    <div className='flex text-white gap-10'>
                        <div className='col-span-1 text-xl font-semibold'>
                            Select Match
                        </div>
                        <div className="flex-1 relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm border border-[#2E3539] rounded-full bg-transparent text-white focus:outline outline-primaryGreen" placeholder="Search Matches, Players, Stats ..." />
                        </div>
                        <button
                            type="button"
                            onClick={closeModal}
                        >
                            <svg
                                title="Close"
                                className="h-4 w-4 cursor-pointer text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="sr-only">Close</span>
                        </button>
                    </div>
                </div>
                {/* innercards */}
                <div className='col-span-12'>
                    <div className='grid grid-cols-12 gap-5 items-center'>
                        {data?.map((item) => {
                            return (
                                <>
                                    <MatchCard
                                        key={item.id}
                                        data={item}
                                        onClick={() => handleCardClick(item.id)}
                                    />
                                </>
                            )
                        })}

                    </div>
                </div>
                <div className='col-span-12 text-white'>
                    <div className='grid grid-cols-12'>
                        {createPackage.map((item) => {
                            return (
                                <>
                                    <div className='col-span-12 border-t py-5 border-[#5C5C5C]'>
                                        <div className='flex justify-between'>
                                            <div className='flex flex-col gap-2'>
                                                <h1 className='text-xl'>
                                                    {item.title}
                                                </h1>
                                            </div>
                                            <label class="inline-flex items-center cursor-pointer">
                                                <input type="checkbox" value="" class="sr-only peer" checked />
                                                <div class="relative w-9 h-5 py-2 bg-gray-200 peer-focus:outline-none  rounded-full after:bg-[#E10000] peer-checked:after:translate-x-full peer-checked:after:bg-primaryGreen af rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
                                                <span class="ms-2 text-xs text-[#4D4D4D] font-semibold">Subscribed</span>
                                            </label>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
        showBackdropWithContent(content);
    };
    return (
        <div className='grid grid-cols-12 text-white gap-10'>
            <div className='col-span-12'>
                <SecondaryButton />
            </div>
            <div className='col-span-12'>
                <div className='grid grid-cols-12 gap-8'>
                    <div className='col-span-12'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-8 text-4xl font-semibold'>
                                My package
                            </div>
                            <div className='col-span-4'>
                                <PrimaryButton size='large' className='font-semibold' onClick={handleShowBackdrop}>
                                    Create New package
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-5 bg-white rounded-2xl p-7'>
                                <div className='flex flex-col text-black gap-5'>
                                    <h1 className='font-semibold text-3xl'>Platinum Package</h1>
                                    <p className='w-9/12 text-base'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <label class="inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer" checked />
                                        <div class="relative w-9 h-5 py-2 bg-gray-200 peer-focus:outline-none  rounded-full after:bg-[#E10000] peer-checked:after:translate-x-full peer-checked:after:bg-primaryGreen af rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
                                        <span class="ms-2 text-xs text-[#4D4D4D] font-semibold">Subscribed</span>
                                    </label>
                                </div>
                            </div>
                            <div className='col-span-7'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-12'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 border-t py-8 border-[#5C5C5C]'>
                        <div className='flex'>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-xl'>
                                    Match Ticket
                                </h1>
                                <p className='w-10/12 text-sm text-[#5C5C5C]'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                            <img src='assets/images/svgs/package/tick.svg' width={50} alt='tick' />
                        </div>
                    </div>
                    <div className='col-span-12 border-t py-8 border-[#5C5C5C]'>
                        <div className='flex'>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-xl'>
                                    External Flight
                                </h1>
                                <p className='w-10/12 text-sm text-[#5C5C5C]'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                            <img src='assets/images/svgs/package/tick.svg' width={50} alt='tick' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackageInformation
