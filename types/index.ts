import {MouseEventHandler} from "react";

export interface ICustomButtonProps{
    title:string,
    containerStyles?: string;
    btnType?:"button" | "submit" | "reset";
    handleClick: MouseEventHandler<HTMLButtonElement>;

}
export interface ISearchManufacturerProps{
    manufacturer:string;
    setManufacturer:(manufacturer:string)=>void;
}