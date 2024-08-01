import React, { useState } from 'react'
import { PrimaryButton, SecondaryButton } from '../../Components/UiElements/Buttons'
import MatchCard from '../../Components/Cards/MatchCard'
import { useAppContext } from '../../UseContext/ContextProvider'
import { FilterDropdown } from '../../Components/UiElements/Dropdowns'
const PackageInformation = () => {
    const { setSelectedMatch } = useAppContext()
    const [activeIndex, setActiveIndex] = useState(null);

    const labels = ['Date', 'Price', 'Location', 'Category', 'Brand', 'Size'];
    const handleDropdownClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const createPackage = [
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
        },
        {
            teamA: 'Leicester C',
            teamB: 'Chelsea',
            id: '9'
        },
        {
            teamA: 'Leicester C',
            teamB: 'Chelsea',
            id: '10'
        },
        {
            teamA: 'Leicester C',
            teamB: 'Chelsea',
            id: '11'
        },
        {
            teamA: 'Leicester C',
            teamB: 'Chelsea',
            id: '12'
        }

    ]

    const handleCardClick = (id) => {
        console.log(id);
        setSelectedMatch(id);
    };
    return (
        <div className='grid grid-cols-12 gap-10'>
            <div className='col-span-12'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-2'>
                        <SecondaryButton />
                    </div>
                    <div className='col-span-10 text-white'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-semibold'>Select Package</h1>
                            <PrimaryButton size='medium' color='green' className='font-semibold'>Create New Package</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-12'>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-2 text-white bg-[#2B2B2B] rounded-2xl'>
                        <div className='grid grid-cols-12'></div>
                        <div className="mt-10">
                            {labels.map((label, index) => (
                                <FilterDropdown
                                    key={index}
                                    isActive={activeIndex === index}
                                    onClick={() => handleDropdownClick(index)}
                                    text={label}
                                >
                                    <p className="p-4">Content for dropdown {label}</p>
                                </FilterDropdown>
                            ))}
                        </div>
                    </div>
                    <div className='col-span-10'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12'>
                                <div className='grid grid-cols-12 gap-5'>
                                    {createPackage?.map((item) => {
                                        return (
                                            <>
                                                <MatchCard
                                                    key={item.id}
                                                    data={item}
                                                    onClick={() => handleCardClick(item.id)}
                                                    width='small'
                                                />
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackageInformation
