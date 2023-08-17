import React, { useState } from 'react'
import {ArrowDropDown,ArrowDropUp} from '@mui/icons-material'
import Image from 'next/image'

const CurrencyDropDown: React.FC = () => {

    const currency = ['USD', 'EUR', 'GBP', 'JPY','DKK','BDT']

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className='relative flex flex-col items-center rounded-lg'>
            <button
                onClick={toggleDropdown}
                className={`bg-gray-300 w-full flex items-center justify-center font-bold rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 ${isOpen ? 'active:text-white' : ''
                    }`}
            >
                <Image src='/icons/currencyIcon.png' height={42} width={42} alt='currency-icon'/>
                
                <p className='pl-2'>{isOpen ? <ArrowDropUp/> : <ArrowDropDown/>}</p>
            </button>
            {isOpen && (
                <div className='bg-gray-300 top-20 flex flex-col items-start rounded-lg p-2 w-full absolute'>
                    {currency.map((item, i) => (
                        <div
                            key={i}
                            className='p-2 hover:bg-slate-400 w-full flex cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4'
                        >
                            <h3 className='font-bold'>{item}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CurrencyDropDown;
