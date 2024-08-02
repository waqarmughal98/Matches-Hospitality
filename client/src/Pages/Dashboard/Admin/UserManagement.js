import React, { useContext, useMemo, useState } from 'react'
import { PrimaryButton } from '../../../Components/UiElements/Buttons'
import { useAppContext } from '../../../UseContext/ContextProvider';
import { LabelInput } from '../../../Components/UiElements/TextInputs';
import { Table } from '../../../Components/ReactTable/Table';
import { FaTrash } from 'react-icons/fa';
const UserManagement = () => {
  const { showBackdropWithContent, closeModal } = useAppContext();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedFile(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  console.log(selectedFile);
  const userData = [
    {
      name: 'Lorem Ipsum',
      email: 'name@gmail.com'
    },
    {
      name: 'Lorem Ipsum',
      email: 'name@gmail.com'
    },
    {
      name: 'Lorem Ipsum',
      email: 'name@gmail.com'
    },
    {
      name: 'Lorem Ipsum',
      email: 'name@gmail.com'
    },
    {
      name: 'Lorem Ipsum',
      email: 'name@gmail.com'
    },
    {
      name: 'Lorem Ipsum',
      email: 'name@gmail.com'
    },
    {
      name: 'Lorem Ipsum',
      email: 'name@gmail.com'
    },
    {
      name: 'Lorem Ipsum',
      email: 'name@gmail.com'
    }
  ]

  const users = [
    {
      users: 'This Week',
      numberOfUsers: '54,272'
    },
    {
      users: 'This Month',
      numberOfUsers: '12,098'
    },
    {
      users: 'Total User',
      numberOfUsers: '23,765'
    },
    {
      users: 'Deactivated User',
      numberOfUsers: '98,656'
    }
  ]
  // const handleShowBackdrop = () => {
  //   const content = (
  //     <div className='grid grid-cols-12 justify-center p-10 rounded-lg backdrop-blur-3xl m-auto mt-12 bg-black/40'>
  //       <button
  //         type="button"
  //         className="absolute top-4 right-4    rtl:right-auto rtl:left-4"
  //         onClick={closeModal}
  //       >
  //         <svg
  //           title="Close"
  //           className="h-4 w-4 cursor-pointer text-gray-400"
  //           xmlns="http://www.w3.org/2000/svg"
  //           viewBox="0 0 20 20"
  //           fill="currentColor"
  //           aria-hidden="true"
  //         >
  //           <path
  //             fillRule="evenodd"
  //             d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
  //             clipRule="evenodd"
  //           ></path>
  //         </svg>
  //         <span className="sr-only">Close</span>
  //       </button>
  //       <div className='col-span-12'>
  //         <div className='grid grid-cols-12 gap-y-5'>
  //           <div className='relative w-52 h-52 rounded-full bg-[#1E1E1E] flex justify-center items-center flex-col gap-y-5 m-auto col-span-6 col-start-4'>
  //             <input
  //               type='file'
  //               accept='image/*'
  //               onChange={handleFileChange}
  //               className='absolute inset-0 opacity-0 cursor-pointer'
  //             />
  //             {selectedFile ? (
  //               <img
  //                 src={selectedFile}
  //                 alt='Profile Preview'
  //                 className='w-full h-full rounded-full object-cover absolute'
  //               />
  //             ) : (
  //               <>
  //                 <p className='text-5xl font-bold text-white'>+</p>
  //                 <p className='text-primaryGreen text-xs'>Upload Profile Picture</p>
  //               </>
  //             )}
  //           </div>
  //           <div className='col-span-12'>
  //             <div className='flex flex-col gap-5 justify-center m-auto'>
  //               <LabelInput label='Enter User Name'/>
  //               <LabelInput label='Password' />
  //               <PrimaryButton size='large' className='font-semibold'>Create</PrimaryButton>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  //   showBackdropWithContent(content);
  // };

  const cols = useMemo(() => [
    {
      header: 'Name',
      cell: (row) => row.renderValue(),
      accessorKey: 'name',
    },
    {
      header: 'Email',
      cell: (row) => (
        <span>
          {row.renderValue()}
        </span>
      ),
      accessorKey: 'email',
    },
    {
      header: 'Last Bought Package',
      cell: (row) => row.renderValue(),
      accessorKey: 'package',
    },
    {
      header: 'Last Payment Date',
      cell: (row) => (
        <span>
          {row.renderValue()}
        </span>
      ),
      accessorKey: 'date',
    },
    {
      header: 'Deactivate',
      cell: (row) => (
        <div className="flex items-center gap-x-5 justify-center">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            {/* checked={row.getValue('deactivate')} */}
            <div className="relative w-9 h-5 py-2 bg-gray-400 peer-focus:outline-none rounded-full after:bg-[#E10000] peer-checked:after:translate-x-full peer-checked:after:bg-primaryGreen after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
            <span className="ms-2 text-xs text-white/80 font-semibold">Subscribed</span>
          </label>
          {/* <button className="text-red-500 hover:text-red-700">
                  <FaTrash />
              </button> */}
        </div>
      ),
      accessorKey: 'deactivate',
    },
  ], []);

  const dummyData = () => {
    const items = [];
    for (let i = 0; i < 15; i++) {
      items.push({
        id: i,
        name: `Item ${i}`,
        email: 'email@gmail.com',
        package: 'Silver',
        date: '12/02/2023',
        deactivate: 1,
      });
    }
    return items;
  };
  return (
    <div className='grid grid-cols-12 text-white xl:gap-x-10 gap-y-8'>
      <div className='col-span-12'>
        <div className='grid grid-cols-12 xl:gap-x-8 gap-y-8'>
          <div className='col-span-12 headerText'>Users</div>
          <div className='col-span-12'>
            <div className='grid grid-cols-12 xl:gap-x-5 gap-y-5'>
              {users.map((item, index) => {
                return (
                  <>
                    <div key={index} className='xl:col-span-3 md:col-span-6 col-span-12 rounded-2xl bg-cardBG border-primaryBorder border-[1px] p-7 font-roboto'>
                      <div className='grid grid-cols-12'>
                        <div className='col-span-10'>
                          <div className='flex flex-col gap-3'>
                            <span className='text-base font-semibold'>{item.users}</span>
                            <span className='text-4xl font-semibold font-roboto'>{item.numberOfUsers}</span>
                            {/* <div className='flex gap-2'>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="#00B69B" />
                              </svg>
                              <span className='text-[#00B69B]'>8.5%</span>
                              <span>
                                Up from yesterday
                              </span>
                            </div> */}
                          </div>
                        </div>
                        <div className='grid col-span-2 items-end justify-end'>
                          <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.842657" fill-rule="evenodd" clip-rule="evenodd" d="M0 30V51C0 55.9706 4.02944 60 9 60H30H51C55.9706 60 60 55.9706 60 51V30V9C60 4.02944 55.9706 0 51 0H30H9C4.02944 0 0 4.02944 0 9V30Z" fill="#88F67E" />
                            <path opacity="0.587821" fill-rule="evenodd" clip-rule="evenodd" d="M20.6667 23.3333C20.6667 26.2789 23.0545 28.6667 26 28.6667C28.9455 28.6667 31.3333 26.2789 31.3333 23.3333C31.3333 20.3878 28.9455 18 26 18C23.0545 18 20.6667 20.3878 20.6667 23.3333ZM34 28.6667C34 30.8758 35.7909 32.6667 38 32.6667C40.2091 32.6667 42 30.8758 42 28.6667C42 26.4575 40.2091 24.6667 38 24.6667C35.7909 24.6667 34 26.4575 34 28.6667Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9778 31.3335C19.6826 31.3335 14.5177 34.5689 14.0009 40.9324C13.9727 41.2791 14.6356 42.0002 14.97 42.0002H36.9956C37.9972 42.0002 38.0128 41.1941 37.9972 40.9335C37.6065 34.3911 32.3616 31.3335 25.9778 31.3335ZM45.2746 42.0002L40.1333 42.0002C40.1333 38.9989 39.1417 36.2293 37.4683 34.001C42.0103 34.0506 45.7189 36.347 45.998 41.2002C46.0092 41.3956 45.998 42.0002 45.2746 42.0002Z" fill="white" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-12'>
        <div className='grid grid-cols-12 gap-5 xl:gap-x-8 gap-y-8'>
          <div className='col-span-12 text-3xl font-semibold'>
            User Management
          </div>
          <div className='col-span-12'>
            <Table data={dummyData()} columns={cols} showNavigation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserManagement
