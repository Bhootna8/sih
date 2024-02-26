import React from 'react'

const ListBox = () => {
  return (
    <div className=' h-[400px] bg-[#FFF6EE] mb-10 mt-2 flex items-center w-full justify-center'>
    <div className=' flex items-center h-[180px] my-5 w-fit bg-[#002449] rounded-lg' id='listbox'>
        <div>
            <button>View</button>
        </div>
        <div>
        <button>View</button>
        </div>
        <div>
        <button>View</button>
        </div>
        <div>
        <button>View</button>
        </div>
    </div>
    </div>
  )
}

export default ListBox