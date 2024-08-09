import React, { useEffect, useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../../Components/UiElements/Buttons';
import { LabelInput } from '../../Components/UiElements/TextInputs';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../UseContext/ContextProvider';
import { axiosInstance2, URL as Api_URl } from '../../utilities/ConstantData';
import { toast } from 'react-toastify';
const EditCategory = () => {
    const { selectedEditCategory , handleErrors} = useAppContext();
    const [loading , setLoading] = useState(false)
    const [Data, setData] = useState({
        name: '',
        description: '',
        categoryLogo: '',
        categoryBanner: '',
    });
    const navigate = useNavigate();
    
    useEffect(() => {
        if(selectedEditCategory && Object.keys(selectedEditCategory).length > 0){
            setData({
                name: selectedEditCategory.name || '',
                description: selectedEditCategory.description || '',
                categoryLogo: selectedEditCategory.logo || null,
                categoryBanner: selectedEditCategory.banner_image || null,
            });
        }
        else{
            navigate("/all-events")
        }   
    }, []);

    const handleFileChange = (event, fieldName) => {
        const file = event.target.files[0];
        if (file) {
          setData(prevData => ({
            ...prevData,
            [fieldName]: file
          }));
        }
      };


      const validation = () => {
        if (!Data.name) {
            toast.error("Event Name is required and should be a non-empty string.");
            return false;
        }
        if (!Data.description) {
            toast.error("Event Description is required and should be a non-empty string.");
            return false;
        }
         if (!Data.categoryBanner) {
            toast.error("Event Banner is required and should be a file.");
            return false;
        }
        return true;
    };


    const HandleEdit=() => {
         if(validation()){
            EditCategory()
         }
    };


    const EditCategory = async () => {
        setLoading(true)
        const data = new FormData();
        data.append('name', Data.name);
        data.append('description', Data.description);
        if(Data.logo != "string"){
            data.append('logo', Data.categoryLogo);
        }
        if(Data.banner_image != "string"){
            data.append('banner_image', Data.categoryBanner);
        }

        axiosInstance2().put(`${Api_URl}/category/edit/${selectedEditCategory._id}`, data)
        .then(()=>{
            setLoading(false)
            toast.success("Category updated successfully")
            navigate("/all-events")
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

    console.log(Data)

    return (
        <div className='grid grid-cols-12 text-white gap-y-10'>
            <div className='col-span-12'>
                <SecondaryButton />
            </div>
            <div className='col-span-12 font-semibold text-3xl'>Edit Event</div>
            <div className='lg:col-span-6 md:col-span-8 col-span-12'>
                <div className='grid grid-cols-12 gap-y-5'>
                    <div className='col-span-12'>
                        <LabelInput
                            value={Data.name}
                            label='Event Name'
                            placeholder='Name...'
                            onChange={(e) => setData({ ...Data, name: e.target.value })}
                        />
                    </div>
                    <div className='col-span-12'>
                        <div className='grid grid-cols-12 gap-3'>
                            <div className='col-span-12'>
                                <label htmlFor="description" className="block primaryText">Event Description</label>
                            </div>
                            <div className='col-span-12'>
                                <textarea
                                    value={Data.description}
                                    id="description"
                                    rows="6"
                                    className="block p-2.5 w-full text-sm bg-transparent rounded-lg border border-[#454545] focus:ring-primaryGreen focus:border-primaryBlack"
                                    placeholder="Description..."
                                    onChange={(e) => setData({ ...Data, description: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12'>
                        <div className='grid grid-cols-12 lg:gap-x-10 gap-y-10'>
                            <div className='md:col-span-6 col-span-12'>
                                <div className='flex flex-col gap-y-3'>
                                    <label htmlFor='categoryLogo'>Event Logo</label>
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
                                            {typeof Data.categoryLogo=="string" ? (
                                                <img
                                                    src ={`../../uploads/${selectedEditCategory.logo}`}
                                                    alt={"logo"}
                                                    width={30}
                                                    className='absolute w-full h-full object-cover rounded-lg'
                                                />
                                            ) : Data.categoryLogo ? (
                                                <img
                                                    src={URL.createObjectURL(Data.categoryLogo)}
                                                    alt={Data.categoryLogo.name}
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
                                    {Data.categoryLogo && (
                                        <p className='text-sm text-white'>
                                            { typeof Data.categoryLogo=="string" ? Data.categoryLogo : Data.categoryLogo.name }
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className='md:col-span-6 col-span-12'>
                                <div className='flex flex-col gap-y-3'>
                                    <label htmlFor='categoryBanner'>Event Banner</label>
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
                                            {typeof Data.categoryBanner=="string" ? (
                                                <img
                                                    src={`../../uploads/${selectedEditCategory.banner_image}`}
                                                    alt={"Banner image"}
                                                    width={30}
                                                    className='absolute w-full h-full object-cover rounded-lg'
                                                />
                                            ): Data.categoryBanner ? (
                                                <img
                                                    src={URL.createObjectURL(Data.categoryBanner)}
                                                    alt={Data.categoryBanner.name}
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
                                    {Data.categoryBanner && (
                                        <p className='text-sm text-white'>
                                            { typeof Data.categoryBanner == "string"  ? Data.categoryBanner  : Data.categoryBanner.name }
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 mt-5'>
                        <PrimaryButton onClick={()=>HandleEdit()} size='large'>{loading ? "Updating event..." : "Update Event"}</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditCategory;
