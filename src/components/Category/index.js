import * as React from 'react'
import { faImage, faBurger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Category = ({ items, onClick }) => {

    return (
        <div onClick={onClick} className="bg-white text-center rounded-3xl border w-32 max-w-lg hover:shadow-xl m-2" style={{cursor:'pointer'}}>
            <div className="flex items-center mb-4 justify-center">
                {/* <span>{items.name}</span> */}
                <span className='text-5xl text-center mt-1.5'>
                    <FontAwesomeIcon icon={faBurger} size={70} />
                </span>
            </div>
            <div>
                <span className='font-medium'>{items.name}</span>
            </div>
        </div>
    )
}

export default Category;