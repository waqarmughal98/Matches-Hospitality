import React from 'react'
import MatchCard from '../../Components/Cards/MatchCard'
import { PrimaryButton, SecondaryButton } from '../../Components/UiElements/Buttons'

const AllTeams = () => {
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
    return (
        <div className='grid grid-cols-12 gap-y-10'>
            <div className='col-span-12'>
                <div className='flex justify-between items-center'>
                    <SecondaryButton />
                    <PrimaryButton size='medium'>Create Team</PrimaryButton>
                </div>
            </div>
            <div className='col-span-12'>
                <div className='grid grid-cols-12 gap-5'>
                    {createPackage?.map((item) => {
                        return (
                            <>
                                <MatchCard
                                    key={item.id}
                                    data={item}
                                />
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AllTeams
