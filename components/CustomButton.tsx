"use client"

import Image from "next/image";
import {ICustomButtonProps} from "@/types";

const CustomButton=({title,containerStyles,handleClick,btnType}:ICustomButtonProps)=>{

    return<>
        <button
        disabled={false}
        type = {btnType || "button"}
        className={`custom-btn`}
        onClick={()=>{handleClick}}
        >
            <span className={`flex-1 ${containerStyles}`}>
                {title}
            </span>
        </button>
    </>
}
export default CustomButton;