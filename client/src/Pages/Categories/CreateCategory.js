import React from 'react';
import { PrimaryButton, SecondaryButton } from '../../Components/UiElements/Buttons';
import { LabelInput } from '../../Components/UiElements/TextInputs';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../UseContext/ContextProvider';
import { toast } from 'react-toastify';
const CreateCategory = () => {
    const { formData, setFormData, handleFileChange } = useAppContext();
    const navigate = useNavigate();

    const validation = () => {
        if (!formData.eventBanner || !(formData.eventBanner instanceof File)) {
            toast.error("Event Banner is required and should be a file.");
            return false;
        }
        if (!formData.eventLogo || !(formData.eventLogo instanceof File)) {
            toast.error("Event Logo is required and should be a file.");
            return false;
        }
        if (!formData.eventName || typeof formData.eventName !== "string" || formData.eventName.trim() === "") {
            toast.error("Event Name is required and should be a non-empty string.");
            return false;
        }
        if (!formData.eventDescription || typeof formData.eventDescription !== "string" || formData.eventDescription.trim() === "") {
            toast.error("Event Description is required and should be a non-empty string.");
            return false;
        }
        return true;
    };


    console.log(formData,"formData")
    const handleSubmit = () => {
         if(validation()){
            console.log("do")
         }


    };

    return (
        <div className='grid grid-cols-12 text-white gap-y-10'>
            <div className='col-span-12'>
                <SecondaryButton />
            </div>
            <div className='col-span-12 font-semibold text-3xl'>Event Category</div>
            <div className='lg:col-span-6 md:col-span-8 col-span-12'>
                <div className='grid grid-cols-12 gap-y-5'>
                    <div className='col-span-12'>
                        <LabelInput
                            value={formData.eventName || ''}
                            label='Event Name'
                            placeholder='Event Name'
                            onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
                        />
                    </div>
                    <div className='col-span-12'>
                        <div className='grid grid-cols-12 gap-3'>
                            <div className='col-span-12'>
                                <label htmlFor="description" className="block text-base font-semibold">Your message</label>
                            </div>
                            <div className='col-span-12'>
                                <textarea
                                    value={formData.eventDescription || ''}
                                    id="description"
                                    rows="6"
                                    className="block p-2.5 w-full text-sm bg-transparent rounded-lg border border-[#454545] focus:ring-primaryGreen focus:border-primaryBlack"
                                    placeholder="Event Description"
                                    onChange={(e) => setFormData({ ...formData, eventDescription: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12'>
                        <div className='grid grid-cols-12 lg:gap-x-10 gap-y-10'>
                            <div className='md:col-span-6 col-span-12'>
                                <div className='flex flex-col gap-y-3'>
                                    <label htmlFor='eventLogo'>Event Logo</label>
                                    <div className='border relative border-borderInput min-h-36 rounded-lg'>
                                        <input
                                            type='file'
                                            id='eventLogo'
                                            className='hidden'
                                            onChange={(e) => handleFileChange(e, 'eventLogo')}
                                        />
                                        <div
                                            className='cursor-pointer'
                                            onClick={() => document.getElementById('eventLogo').click()}
                                        >
                                            {formData.eventLogo ? (
                                                <img
                                                    src={URL.createObjectURL(formData.eventLogo)}
                                                    alt={formData.eventLogo.name}
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
                                    {formData.eventLogo && (
                                        <p className='text-sm text-white'>
                                            {formData.eventLogo.name}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className='md:col-span-6 col-span-12'>
                                <div className='flex flex-col gap-y-3'>
                                    <label htmlFor='eventBanner'>Event Banner</label>
                                    <div className='border relative border-borderInput min-h-36 rounded-lg'>
                                        <input
                                            type='file'
                                            id='eventBanner'
                                            className='hidden'
                                            onChange={(e) => handleFileChange(e, 'eventBanner')}
                                        />
                                        <div
                                            className='cursor-pointer'
                                            onClick={() => document.getElementById('eventBanner').click()}
                                        >
                                            {formData.eventBanner ? (
                                                <img
                                                    src={URL.createObjectURL(formData.eventBanner)}
                                                    alt={formData.eventBanner.name}
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
                                    {formData.eventBanner && (
                                        <p className='text-sm text-white'>
                                            {formData.eventBanner.name}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 mt-5'>
                        <PrimaryButton onClick={handleSubmit} size='large'>Create Event</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateCategory;
