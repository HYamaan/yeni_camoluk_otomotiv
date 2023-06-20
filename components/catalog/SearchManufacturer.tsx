"use client"
import {ISearchManufacturerProps} from "@/types";
import {manufacturers} from "@/constants";
import { Combobox ,Transition} from '@headlessui/react';
import Image from "next/image";
import {Fragment, useState} from "react";
const SearchManufacturer=({manufacturer,setManufacturer}:ISearchManufacturerProps)=>{
const [query,setQuery]=useState<string>('');

const filteredCars= query === '' ? manufacturers :
    manufacturers.filter((car)=>{
        return car.toLowerCase()
            .replace(/\s+/g,"")
            .includes(query.toLowerCase());
    })
    return <>
        <div className="search-manufacturer ">
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full">
                <Combobox.Button className="absolute top-[14px]">
                    <Image
                        src="/car-logo.svg"
                        alt="car_logo"
                        width={20}
                        height={20}
                        className="ml-4"/>
                </Combobox.Button>
                    <Combobox.Input className="search-manufacturer__input"
                    placeholder="Vokswagen"
                    displayValue={(manufacturer:string)=>manufacturer}
                    onChange={(e)=>setQuery(e.target.value)}
                    />
                    <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                    afterLeave={()=>setQuery('')}
                    >
                    <Combobox.Options className="max-h-60 overflow-y-auto">
                        {filteredCars.length === 0 &&
                        query !== '' ?(
                            <Combobox.Option
                                value={query}
                            className="search-manufacturer__option"
                        >
                                Create {query}
                        </Combobox.Option>
                        ): (
                            query.length>0 &&
                                filteredCars.map((car,i)=>(
                                    <Combobox.Option
                                        key={i}
                                        value={car}
                                        className={({active})=>
                                            `relative search-manufacturer__option
                                             ${active ? 'bg-primary-blue' : 'text-gray-700'}`}
                                    >
                                        {car}
                                    </Combobox.Option>
                                ))
                            )}
                    </Combobox.Options>
                </Transition>
                </div>
            </Combobox>
        </div>
    </>
}
export default SearchManufacturer;