import React from 'react'
import { useAppContext } from '../../UseContext/ContextProvider'
const DeleteModal = ({handleDelete,id,item='item'}) => {
    const { closeModal} = useAppContext()

    return (
        <div className='flex-1 w-[40rem]'>
            <div class="relative text-center rounded-lg bg-black/30 backdrop-blur-xl sm:p-16 shadow-lg">
                <button  onClick={()=> closeModal()} type="button" class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <svg class="text-white dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
               {
                item == 'team' ?
                <p class="mb-4 text-gray-500 dark:text-gray-300">{`Are you sure you want to delete this team? Deleteing this team will also remove all associated matches.`}</p>
                :
                <p class="mb-4 text-gray-500 dark:text-gray-300">{`Are you sure you want to delete this ${item}? `}</p>                
               }
                <div class="flex justify-center items-center space-x-4">
                    <button  onClick={()=> closeModal()}  data-modal-toggle="deleteModal" type="button" class="py-2 px-3 text-sm font-medium text-gray-300 bg-transparent rounded-lg border border-borderInput focus:z-10 transition-opacity duration-100 ease-linear">
                        No, cancel
                    </button>
                    <button onClick={()=>handleDelete(id)} type="submit" class="py-2 px-3 text-sm font-medium text-center text-white bg-red-800 rounded-lg">
                        Yes, I'm sure
                    </button>
                </div>
            </div>
        </div>

    )
}

export default DeleteModal
