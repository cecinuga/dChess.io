import React from 'react';
import { useMoralisQuery, useNewMoralisObject } from "react-moralis";
import { newGame } from '../menuAPI';
import { store } from '../../../app/store';
import { useMoralis } from "react-moralis";

export default function BtnMatchM({ name, img, classes, current }) {

    return (
        <div className={"Btn BtnMatchM inline-block mr-2 mt-2 bg-white p-1 text-red-800 rounded border-2 border-solid border-red-800 mb-2"+classes}>
            <button className="" onClick={()=>{ store.dispatch(newGame()).then(()=>{console.log(store.getState())}) }}>{name}</button>
        </div>
    );
}