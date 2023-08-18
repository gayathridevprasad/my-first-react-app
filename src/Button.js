import {useState} from 'react';

const Button = () =>
{
    const [number,setNumber]=useState(100); //destructuring
    const handleClickIncrement=()=>{
        setNumber(number+10);//100+10  
    }
    const handleClickDecrement=()=>{
        setNumber(number-10);//100-10      
    }
    return (
    <div>     
    <button onClick={handleClickIncrement}>+</button>
    <span>{number}</span>
    <button onClick={handleClickDecrement}>-</button>
    </div>
    );
}

export default Button;