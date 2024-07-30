import React, { useState } from 'react'
import { PrimaryButton, SecondaryButton } from '../../Components/UiElements/Buttons'
import { LabelInput } from '../../Components/UiElements/TextInputs'

const CreateCategory = () => {
    const [file, setFile] = useState(null);

    // Handle file input change
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };
    return (
        <div className='grid grid-cols-12 text-white gap-y-10'>
            <div className='col-span-12'>
                <SecondaryButton />
            </div>
            <div className='col-span-12 font-semibold text-3xl'>Event Category</div>
            <div className='col-span-6'>
                <div className='grid grid-cols-12 gap-y-5'>
                    <div className='col-span-12'>
                        <LabelInput label='Event Name' placeholder='Event Name' />
                    </div>
                    <div className='col-span-12'>
                        <div className='grid grid-cols-12 gap-3'>
                            <div className='col-span-12'>
                                <label for="description" class="block text-base font-semibold">Your message</label>
                            </div>
                            <div className='col-span-12'>
                                <textarea id="description" rows="6" class="block p-2.5 w-full text-sm bg-transparent rounded-lg border border-[#454545] focus:ring-primaryGreen focus:border-primaryBlack " placeholder="Event Description"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12'>
                        <div className='grid grid-cols-12 gap-x-10'>
                            <div className='col-span-6'>
                                <div className='flex flex-col gap-y-3'>
                                    <label htmlFor='fileInput'>Event Logo</label>
                                    <div className='border relative border-borderInput min-h-36 rounded-lg'>
                                        <input
                                            type='file'
                                            id='fileInput'
                                            className='hidden'
                                            onChange={handleFileChange}
                                        />
                                        <div
                                            className='cursor-pointer'
                                            onClick={() => document.getElementById('fileInput').click()}
                                        >
                                            {file ? (
                                                <img
                                                    src={URL.createObjectURL(file)}
                                                    alt={file.name}
                                                    width={30}
                                                    className='absolute w-full h-full object-cover rounded-lg'
                                                />
                                            ) : (
                                                <img
                                                    src='assets/images/Category/create/fileinput.svg'
                                                    width={30}
                                                    alt='Default icon'
                                                    className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
                                                />
                                            )}
                                        </div>
                                    </div>
                                    {file && (
                                        <p className='text-sm text-white'>
                                            {file.name}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className='col-span-6'>
                                <div className='flex flex-col gap-y-3'>
                                    <label htmlFor='fileInput'>Event Banner</label>
                                    <div className='border relative border-borderInput min-h-36 rounded-lg'>
                                        <input
                                            type='file'
                                            id='fileInput'
                                            className='hidden'
                                            onChange={handleFileChange}
                                        />
                                        <div
                                            className='cursor-pointer'
                                            onClick={() => document.getElementById('fileInput').click()}
                                        >
                                            {file ? (
                                                <img
                                                    src={URL.createObjectURL(file)}
                                                    alt={file.name}
                                                    width={30}
                                                    className='absolute w-full h-full object-cover rounded-lg'
                                                />
                                            ) : (
                                                <img
                                                    src='assets/images/Category/create/fileinput.svg'
                                                    width={30}
                                                    alt='Default icon'
                                                    className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
                                                />
                                            )}
                                        </div>
                                    </div>
                                    {file && (
                                        <p className='text-sm text-white'>
                                            {file.name}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 mt-5'>
                        <PrimaryButton size='large'>Create Event</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCategory
