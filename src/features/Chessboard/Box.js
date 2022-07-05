import React, { Component } from 'react';
import { store } from '../../app/store';
import { Move } from './chessSlice';

export default class Box extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const state = store.getState();
        console.log(state);
        /*if(state.chess.lastMove.secondStep!=''){
            console.log(store.getState());
        }*/
    }
    
    render(){
        return(
            <div 
                id={this.props.id}
                className={
                    (this.props.color)?
                        (this.props.team)?
                            'Box bg-red-800 text-center text-white':
                            'Box bg-red-800 text-center text-black':
                        (this.props.team)?
                            'Box bg-amber-800 text-center text-white':
                            'Box bg-amber-800 text-center text-black'
                    }> 
                <input 
                    type="checkbox"
                    id={"Box-"+String(this.props.coo)} 
                    value={this.props.p}
                    className="w-12 h-12"
                    onChange={()=>{
                        store.dispatch(Move({ step:this.props.coo, piece:this.props.p, }));
                    }}
                /> {this.props.p}
            </div>
        );
    }
}
