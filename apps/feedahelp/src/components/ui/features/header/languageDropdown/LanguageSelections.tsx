import React, { useState } from 'react';
import language from "./language.json";
import {ArrowDropDown,ArrowDropUp} from '@mui/icons-material'
import Image from 'next/image';
import {Styled} from './LanguageSelection.styled'


const LanguageSelections: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className='flex flex-col items-center'>
            <button
                onClick={toggleDropdown}
                className={`flex items-center justify-center`}
            >
                <Styled.HoverImage>
                    <Image src='/icons/languageIcon.png' height={50} width={50} alt='language-icon'/>
                </Styled.HoverImage>

                {isOpen ? <ArrowDropUp className='opacity-50'/> : <ArrowDropDown className='opacity-50'/>}

            </button>
            {isOpen && (
                <div className='bg-gray-300 top-20 flex flex-col items-start rounded-lg p-2 w-28 absolute'>
                    {language.map((item, i) => (
                        <div
                            key={i}
                            className='dropDownOption'
                        >
                            <h3 className='font-bold'>{item?.language}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LanguageSelections;
