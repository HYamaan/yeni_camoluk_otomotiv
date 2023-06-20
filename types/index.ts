import {MouseEventHandler} from "react";

export interface ICustomButtonProps{
    title:string,
    containerStyles?: string;
    btnType?:"button" | "submit" | "reset";
    handleClick: MouseEventHandler<HTMLButtonElement>;

}