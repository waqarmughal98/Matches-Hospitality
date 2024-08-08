import React, { useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../../Components/UiElements/Buttons';
import { LabelInput } from '../../Components/UiElements/TextInputs';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../UseContext/ContextProvider';
import { toast } from 'react-toastify';
import { axiosInstance2, URL as Api_URl } from '../../utilities/ConstantData';
const CreateCategory = () => {
    const { handleErrors} = useAppContext();
    const [loading , setLoading] = useState(false)
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        categoryName: '',
        categoryDescription: '',
        categoryLogo: null,
        categoryBanner: null,
    });

    const handleFileChange = (event, fieldName) => {
        const file = event.target.files[0];
        if (file) {
          setFormData(prevData => ({
            ...prevData,
            [fieldName]: file
          }));
        }
      };


    const validation = () => {
        if (!formData.categoryName) {
            toast.error("Event Name is required and should be a non-empty string.");
            return false;
        }
         if (!formData.categoryDescription) {
            toast.error("Event Description is required and should be a non-empty string.");
            return false;
        }
         if (!formData.categoryBanner || !(formData.categoryBanner instanceof File)) {
            toast.error("Event Banner is required and should be a file.");
            return false;
        }
        return true;
    };

    const handleSubmit = () => {
         if(validation()){
            CreateCategory()
         }
    };

    const CreateCategory = async () => {
        setLoading(true)
        const data = new FormData();
        data.append('name', formData.categoryName);
        data.append('description', formData.categoryDescription);
        data.append('logo', formData.categoryLogo);
        data.append('banner_image', formData.categoryBanner);

        axiosInstance2().post(`${Api_URl}/category/create`, data)
        .then(()=>{
            toast.success("Category created successfully")
            navigate("/all-events")
            setLoading(false)
        })
        .catch ((error)=> {
            setLoading(false)
            const errors=error?.response?.data?.errors
            const statusCode=error?.response?.status
            if(statusCode==401){
                toast.error(errors);
                try {
                    localStorage.removeItem('userData')
                  } catch (error) {
                    console.log(error)
                  } finally {
                    navigate("/Login")
                  }
            }else{
                handleErrors(error)
            }
        })
    };

    return (
        <div className='grid grid-cols-12 text-white gap-y-10'>
            <div className='col-span-12'>
                <SecondaryButton />
            </div>
            <div className='col-span-12 headerText'>Event Creation</div>
            <div className='lg:col-span-6 md:col-span-8 col-span-12'>
                <div className='grid grid-cols-12 gap-y-5'>
                    <div className='col-span-12'>
                        <LabelInput
                            value={formData.categoryName || ''}
                            label='Category Name'
                            placeholder='Name...'
                            onChange={(e) => setFormData({ ...formData, categoryName: e.target.value })}
                        />
                    </div>
                    <div className='col-span-12'>
                        <div className='grid grid-cols-12 gap-3'>
                            <div className='col-span-12'>
                                <label htmlFor="description" className="primaryText">Category Description</label>
                            </div>
                            <div className='col-span-12'>
                                <textarea
                                    value={formData.categoryDescription || ''}
                                    id="description"
                                    rows="6"
                                    className="block p-2.5 w-full text-sm bg-transparent rounded-lg border border-borderInput focus:outline-none focus:border-primaryGreen"
                                    placeholder="Description..."
                                    onChange={(e) => setFormData({ ...formData, categoryDescription: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12'>
                        <div className='grid grid-cols-12 lg:gap-x-10 gap-y-10'>
                            <div className='md:col-span-6 col-span-12'>
                                <div className='flex flex-col gap-y-3'>
                                    <label htmlFor='categoryLogo' className='primaryText'>Category Logo</label>
                                    <div className='border relative border-borderInput min-h-36 rounded-lg'>
                                        <input
                                            type='file'
                                            id='categoryLogo'
                                            className='hidden'
                                            onChange={(e) => handleFileChange(e, 'categoryLogo')}
                                        />
                                        <div
                                            className='cursor-pointer'
                                            onClick={() => document.getElementById('categoryLogo').click()}
                                        >
                                            {formData.categoryLogo ? (
                                                <img
                                                    src={URL.createObjectURL(formData.categoryLogo)}
                                                    alt={formData.categoryLogo.name}
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
                                    {formData.categoryLogo && (
                                        <p className='text-sm text-white'>
                                            {formData.categoryLogo.name}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className='md:col-span-6 col-span-12'>
                                <div className='flex flex-col gap-y-3'>
                                    <label htmlFor='categoryBanner' className='primaryText'>Category Banner</label>
                                    <div className='border relative border-borderInput min-h-36 rounded-lg'>
                                        <input
                                            type='file'
                                            id='categoryBanner'
                                            className='hidden'
                                            onChange={(e) => handleFileChange(e, 'categoryBanner')}
                                        />
                                        <div
                                            className='cursor-pointer'
                                            onClick={() => document.getElementById('categoryBanner').click()}
                                        >
                                            {formData.categoryBanner ? (
                                                <img
                                                    src={URL.createObjectURL(formData.categoryBanner)}
                                                    alt={formData.categoryBanner.name}
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
                                    {formData.categoryBanner && (
                                        <p className='text-sm text-white'>
                                            {formData.categoryBanner.name}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 mt-5'>
                        <PrimaryButton onClick={handleSubmit} size='large'>{loading ? "Creating category.." : "Create Category"}</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateCategory;
