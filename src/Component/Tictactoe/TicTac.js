import React, { useRef, useState } from 'react';
import './Tictac.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

let val=["","","","","","","","",""];

const TicTac = () => {
    let [count,setCount]=useState(0);
    let[lock,setlock]=useState(false);//if user wins lock is true then function will not execute
    let titleRef= useRef(null);
    let box1 =useRef(null);
    let box2 =useRef(null);
    let box3 =useRef(null);
    let box4 =useRef(null);
    let box5 =useRef(null);
    let box6 =useRef(null);
    let box7 =useRef(null);
    let box8 =useRef(null);
    let box9 =useRef(null);
    //strore boxes in array 
    let boxarray = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

    const toggle = (e,num) =>{
        if(lock){
            return 0;
        }

        if(count %2===0)
        {
            e.target.innerHTML=`<img src='${cross_icon}'>`;
            val[num]="x";
            setCount(++count);
        }

        else{
            e.target.innerHTML=`<img src='${circle_icon}'>`;
            val[num]="o";
            setCount(++count);
        }

        //we have to call checkwin function after every chance to prdict the winner
        Checkwin();
    }
    

    // checking winning conditions
    const Checkwin = ()=>{

        if(val[0]==val[1]&&val[1]==val[2] && val[2]!="")
        {
           //when condition meet this is a win condition so now calling function  won
           won(val[2]);
        }

        if(val[3]==val[4]&&val[4]==val[5] && val[5]!="")
        {
           
           won(val[5]);
        }

        if(val[6]==val[7]&&val[7]==val[8] && val[8]!="")
        {
           
           won(val[8]);
        }

        if(val[0]==val[4]&&val[4]==val[8] && val[8]!="")
        {
           
           won(val[8]);
        }

        if(val[2]==val[4]&&val[4]==val[6] && val[6]!="")
        {
           
           won(val[6]);
        }

        if(val[0]==val[3]&&val[3]==val[6] && val[6]!="")
        {
           
           won(val[6]);
        }

        if(val[1]==val[4]&&val[4]==val[7] && val[7]!="")
        {
           
           won(val[7]);
        }

        if(val[2]==val[5]&&val[5]==val[8] && val[8]!="")
        {
           
           won(val[8]);
        }
    }

    const won = (winner) =>{
        //when condition meet this is a win condition so now calling so now no need to play further so initilize   lock with true to stop the game
        setlock(true);

        if(winner=='x')
        {
            titleRef.current.innerHTML=`Congratulations: <img src="${cross_icon}"> You Won`;
        }

        else{
            titleRef.current.innerHTML=`Congratulations: <img src="${circle_icon}"> You Won`;
        }
    }
    

    // reset function
    const reset = () =>{
        setlock(false);//when reset is call lock will bcme false
        val=["","","","","","","","",""];//values in array bcme null
        titleRef.current.innerHTML='Tic Tac Toe In <span>React</span>';//this heading title will be changed to previ
        //parsing the array 
        boxarray.map((e)=>{
            e.current.innerHTML="";//this will reset our box to empty .
        })
    }


    return (
        <div className='container'>
            <h1 className='title' ref={titleRef}>Tic Tac Toe Game In<span>React</span></h1>
            <div className='board'>

                <div className='row1'>
                    {/* onClick will call toggle function with element e and their index */}
                    <div className='boxes' ref={box1} onClick={(e)=>toggle(e,0)}></div> 
                    <div className='boxes' ref={box2} onClick={(e)=>toggle(e,1)}></div>
                    <div className='boxes' ref={box3} onClick={(e)=>toggle(e,2)}></div>

                </div>

                <div className='row2'>
                    <div className='boxes' ref={box4} onClick={(e)=>toggle(e,3)}></div>
                    <div className='boxes' ref={box5} onClick={(e)=>toggle(e,4)}></div>
                    <div className='boxes' ref={box6} onClick={(e)=>toggle(e,5)}></div>

                </div>

                <div className='row3'>
                    <div className='boxes'  ref={box7} onClick={(e)=>toggle(e,6)}></div>
                    <div className='boxes'  ref={box8} onClick={(e)=>toggle(e,7)}></div>
                    <div className='boxes' ref={box9} onClick={(e)=>toggle(e,8)}></div>

                </div>

            </div>
            <button className='resetGame' onClick={()=>{reset()}}>Reset</button>
            
        </div>
    )
}

export default TicTac;
