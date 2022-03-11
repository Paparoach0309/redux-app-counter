import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash);
    console.log(cash);

    const addCount = () => {
        dispatch({type:"ADD_COUNT", payload: 1});
    }

    const decCount = () => {
        dispatch({type:"DEC_COUNT", payload: 1});
    }

    const reset = () => {
        dispatch({type:"RESET"});
    };

	return (
		<div className="app">
			<div className="counter">{cash}</div>
            <div className= "even-number" style={(cash % 2 === 0 ? {background:'red'} : {background:'white'})}>Введено четное число</div>
            <div className="counter-buttons">
                <button className="counter-btn" onClick={decCount}>-</button>
                <button className="counter-btn" onClick={reset}>Reset</button>
                <button className="counter-btn" onClick={addCount}>+</button>
            </div>
		</div>
	);
}

export default App;