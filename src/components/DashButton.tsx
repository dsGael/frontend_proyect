import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MouseEventHandler } from 'react';


interface dashButton{
    id:string;
    text:string;
    icon:IconProp;
    functionB:MouseEventHandler<HTMLButtonElement>;
}



export function DashButton({id,text,icon,functionB}:dashButton){
    return(
        <button id={id} onClick={functionB} className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div
        className="p-3 mr-4 bg-blue-100 rounded-full dark:bg-orange-500 flex items-center justify-center"
        style={{ width: '50px', height: '50px' }}
        >
        <FontAwesomeIcon  icon={icon} className="text-blue-500 dark:text-orange-100" />
        </div>

        <div>
        <p className="my-2 text-xl font-medium text-gray-600 dark:text-gray-400">
            {text}
        </p>
        </div>
        </button>
    );
}