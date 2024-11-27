import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const userData = useContext(AuthContext); // Ensure `AuthContext` provides user data directly

  return (
    <div className='bg-[#1C1C1C] p-5 mt-5 rounded h-56'>
      {/* Header */}
      <div className='mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5'>New Task</h3>
        <h3 className='text-lg font-medium w-1/5'>Active Task</h3>
        <h3 className='text-lg font-medium w-1/5'>Completed Task</h3>
        <h3 className='text-lg font-medium w-1/5'>Failed Task</h3>
      </div>

      {/* Task List */}
      <div id='noscrollbar' className='h-[80%] overflow-auto'>
        {userData && userData.length > 0 ? (
          userData.map((elem, idx) => (
            <div
              key={idx}
              className='border-2 border-emerald-500 py-2 px-4 flex justify-between mb-2'
            >
              <h2 className='text-lg font-medium w-1/5'>{elem?.firstName || 'N/A'}</h2>
              <h3 className='text-lg font-medium w-1/5 text-blue-600'>
                {elem?.taskCount?.newTask ?? 0}
              </h3>
              <h3 className='text-lg font-medium w-1/5 text-yellow-400'>
                {elem?.taskCount?.active ?? 0}
              </h3>
              <h3 className='text-lg font-medium w-1/5 text-green-600'>
                {elem?.taskCount?.completed ?? 0}
              </h3>
              <h3 className='text-lg font-medium w-1/5 text-red-600'>
                {elem?.taskCount?.failed ?? 0}
              </h3>
            </div>
          ))
        ) : (
          <p className='text-center text-gray-500'>No user data available</p>
        )}
      </div>
    </div>
  );
};

export default AllTask;
