import React from 'react'

function layout({ childern }) {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-gray-200">
            {childern}
        </div>
    )
}

export default layout