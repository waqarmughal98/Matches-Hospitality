import React from 'react'
import { PrimaryButton } from '../UiElements/Buttons'
import { useAppContext } from '../../UseContext/ContextProvider';
import { useNavigate } from 'react-router-dom';

const Packages = ({ data }) => {
    const {setSelectedEditPackage} = useAppContext()
    const navigate = useNavigate()

    const handleEdit=(item)=>{
        setSelectedEditPackage(item)
        navigate("/package/edit")
    }

    // Slice the first item and the next two items
    const [firstPackage, secondPackage, thirdPackage] = data.slice(0, 3);

    return data.length > 0 && (
        <div className='col-span-12'>
            <div className='grid grid-cols-12 lg:gap-x-8 gap-y-8'>
                <div className='col-span-12 headerText'>Packages</div>
                <div className='col-span-12'>
                    <div className='grid grid-cols-12 lg:gap-x-5 gap-y-5'>
                        {/* First Package Card */}
                        {firstPackage && (
                            <div className='grid lg:col-span-5 col-span-12 bg-white text-primaryBlack rounded-2xl p-6 min-h-[19rem]'>
                                <div className='flex flex-col'>
                                    <PrimaryButton size='small' className='self-end'>Popular</PrimaryButton>
                                    <div className='flex flex-col lg:gap-x-8 gap-y-8'>
                                        <div className='flex flex-col gap-3'>
                                            <h1 className='text-3xl font-bold'>
                                                {firstPackage.name}
                                            </h1>
                                            <p className='text-sm w-11/12'>
                                                {firstPackage.description}
                                            </p>
                                        </div>
                                        <div className='flex-1'>
                                            <PrimaryButton onClick={()=>handleEdit(firstPackage)} size='medium'>Edit Details</PrimaryButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* Second and Third Package Cards */}
                        <div className='grid lg:col-span-7 col-span-12'>
                            <div className='grid grid-cols-12 gap-5'>
                                {[secondPackage, thirdPackage].map((item, index) => (
                                    item && (
                                        <div key={index} className='grid lg:col-span-6 col-span-12 bg-[#161616] rounded-2xl p-6 min-h-[19rem] items-center'>
                                            <div className='flex flex-col gap-5'>
                                                <h1 className='text-3xl font-bold'>
                                                    {item.name}
                                                </h1>
                                                <p className='text-[#464646] text-sm'>
                                                    {item.description}
                                                </p>
                                                <div>
                                                    <PrimaryButton onClick={()=>handleEdit(item)} size='medium' color='black'>
                                                        Edit Details
                                                    </PrimaryButton>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Packages
