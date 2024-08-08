import React, { useEffect, useMemo, useState } from 'react';
import { useAppContext } from '../../../UseContext/ContextProvider';
import { Table } from '../../../Components/ReactTable/Table';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { axiosInstance, URL } from '../../../utilities/ConstantData';
import Loader from '../../../Components/UiElements/Loader';
import { PrimaryButton } from '../../../Components/UiElements/Buttons';
import UserModal from '../../../Components/Modal/User/NewUserModal';

const UserManagement = () => {
  const { handleErrors, showBackdropWithContent} = useAppContext();
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [statistics, setStatistics] = useState([]);
  const [newUser, setNewUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [newUser]);

  const fetchData = async () => {
    try {
      const res = await axiosInstance().get(`${URL}/all-users`);
      setLoading(false);
      const data = res.data.data;
      console.log(process.env.REACT_APP_ADMIN_SECRET, "secret")
      const filteredData = data.filter(item => item.userType != 'ap%4k45a5sd')
      setAllUsers(filteredData);
      setStatistics(res.data.statistics)
    } catch (error) {
      setLoading(false);
      const errors = error?.response?.data?.errors;
      const statusCode = error?.response?.status;
      if (statusCode == 401) {
        toast.error(errors);
        try {
          localStorage.removeItem('userData')
        } catch (error) {
          console.log(error)
        } finally {
          navigate("/Login")
        }
      } else {
        handleErrors(error);
      }
    }
  };

  const updateStatics = (status) => {
    setStatistics(prevStats =>
      prevStats.map(stat =>
        stat.title === 'Deactivated Users'
          ? { ...stat, numberOfUsers: status == "active" ? stat.numberOfUsers + 1 : stat.numberOfUsers - 1 }
          : stat
      )
    )
  }

  const handleToggleStatus = async (userId, currentStatus) => {
    setLoading2(true)
    const newStatus = currentStatus === 'active' ? 'deactive' : 'active';
    updateStatics(currentStatus)
    axiosInstance().patch(`${URL}/change-user-status/${userId}`, { status: newStatus })
      .then(() => {
        toast.success(`User ${newStatus}d successfully`);
        setLoading2(false)
        setAllUsers(prevUsers => prevUsers.map(user =>
          user._id === userId ? { ...user, status: newStatus } : user
        ));
      })
      .catch((error) => {
        setLoading2(false)
        const errors = error?.response?.data?.errors;
        const statusCode = error?.response?.status;
        if (statusCode === 401) {
          toast.error(errors);
          try {
            localStorage.removeItem('userData')
          } catch (error) {
            console.log(error)
          } finally {
            navigate("/Login")
          }
        } else {
          handleErrors(error);
        }
      });
  };

  const cols = useMemo(() => [
    {
      header: 'Name',
      cell: (row) => row.renderValue() || 'N/A',
      accessorKey: 'userName',
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
      cell: 'Silver Package',
      accessorKey: 'package',
    },
    {
      header: 'Last Payment Date',
      cell: (row) => (
        <span>
          10-2-2024
        </span>
      ),
      accessorKey: 'date',
    },
    {
      header: 'Status',
      cell: (row) => (
        <div className="flex items-center gap-x-5 ps-24">
          <label className="inline-flex items-center cursor-pointer">
            <input
              checked={row.getValue('status') === 'active'}
              type="checkbox"
              disabled={loading2}
              className="sr-only peer"
              onChange={() => handleToggleStatus(row.row.original._id, row.getValue('status'))}
            />
            <div className="relative w-9 h-4 py-2 bg-white/90 peer-focus:outline-none rounded-full after:bg-red-600 peer-checked:after:translate-x-3 peer-checked:after:bg-primaryGreen after:content-[''] after:absolute after:top-[4.8px] after:start-[4px] after:rounded-full after:h-1.5 after:w-4 after:transition-all"></div>
            <span className="ms-4 text-base text-white/80">{row.getValue('status') === 'active' ? 'Active' : 'Deactivated'}</span>
          </label>
        </div>
      ),
      accessorKey: 'status',
    },
  ], []);

  const handleBackdrop = () => {
    
    const content = (
      <UserModal setNewUser={setNewUser}/>
    )
    showBackdropWithContent(content)
  }

  return loading ? <Loader /> : (
    <div className='grid grid-cols-12 text-white xl:gap-x-10 gap-y-8'>
      <div className='col-span-12'>
        <div className='grid grid-cols-12 xl:gap-x-8 gap-y-8'>
          <div className='col-span-12'>
            <div className='flex justify-between items-center'>
              <div className='headerText'>
                Users Management
              </div>
              <PrimaryButton size='medium' onClick={handleBackdrop}>Create User</PrimaryButton>
            </div>
          </div>
          <div className='col-span-12'>
            <div className='grid grid-cols-12 xl:gap-x-5 gap-y-5'>
              {statistics.map((item, index) => (
                <div key={index} className='xl:col-span-3 md:col-span-6 col-span-12 rounded-2xl bg-cardBG border-primaryBorder border-[1px] p-7'>
                  <div className='grid grid-cols-12'>
                    <div className='col-span-10'>
                      <div className='flex flex-col gap-3'>
                        <span className='text-base font-semibold'>{item.title}</span>
                        <span className='text-4xl font-semibold '>{item.numberOfUsers}</span>
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
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-12'>
        <div className='grid grid-cols-12 gap-5 xl:gap-x-8 gap-y-8'>
          {/* <div className='col-span-12 headerText'>
            All Users
          </div> */}
          <div className='col-span-12'>
            <Table data={allUsers} columns={cols} showNavigation search={true} header='All Users' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
