import React, { useState } from 'react';
import language from "./language.json";


const TranslationDropdown: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='relative flex flex-col items-center rounded-lg'>
            <button onClick={() => setIsOpen((prev) => !prev)} className='bg-gray-300 p-2 w-full flex ite jus font-bold rounded-lg tracking-wider  border-4 border-transparent active:border-white duration-300 active:text-white'>

                Languages
                {!isOpen ? (
                    <p className='pl-2'>&darr;</p>
                ) : (
                    <p className='pl-2'>&uarr;</p>
                )}

            </button>
            {
                isOpen && (
                    <div  className='bg-gray-300 top-20 flex flex-col items-start rounded-lg p-2  w-full absolute '> 
                        {language.map((item, i) => (
                            <div key={i} className='p-2 hover:bg-slate-400 w-full flex cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4'>
                                <h3 className='font-bold '>{item?.language}</h3>
                            </div>
                        ))}
                    </div>
                )
            }

        </div>
    );
};

export default TranslationDropdown;
