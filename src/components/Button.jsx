import React from 'react'

function Button({ name }) {
    return (
        <div className='px-6 py-2 bg-[#509cdb] hover:bg-[#0e69b4] rounded-3xl cursor-pointer text-white font-medium'>
            {name}
        </div>
    )
}

export default Button