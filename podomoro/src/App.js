import React, {useRef, useState} from 'react';
import './App.css';

function padTime(time) {
    return time.toString().padStart(2, '0');
}

export default function App() {
    const timeNumber = 0.1*60
    const [title, setTitle] = useState('Count Down')
    const [timeLeft, setTimeLeft] = useState(timeNumber);
    const [isRunning, setIsRunning] = useState(false);

    const minutes = padTime(Math.floor(timeLeft / 60))
    const seconds = padTime(timeLeft - minutes * 60)

    const intervalRef = useRef(null);

    function startTimer() {
        setTitle('Count Down')
        setIsRunning(true)
        //fix if the start clicked more than once, the interval second fastened
        //Dont do anything
        if (intervalRef.current !== null)
            return

        //so the value can passable
        intervalRef.current = setInterval(() => {
            return setTimeLeft(
                //Look previous value and update it
                timeLeft => {
                    if (timeLeft >= 1) return timeLeft - 1
                    resetTimer()
                    return 0;
                });
        }, 1000)
    }



    function stopTimer() {
        //if already stopped dont do anything
        if (intervalRef.current === null)
            return
        //this fix setInterval so its dont running twice when clicked
        clearInterval(intervalRef.current)
        intervalRef.current = null
        setTitle('Stopped')
        setIsRunning(false)
    }

    function resetTimer() {
        clearInterval(intervalRef.current)
        intervalRef.current = null
        setTitle("Time Reset")
        setTimeLeft(timeNumber)
    }

    return (
        <div className="app">
            <h2>{title}</h2>

            <div className="timer">
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </div>

            <div className="buttons">
                {!isRunning && <button onClick={startTimer}>Start</button>}
                {isRunning && <button onClick={stopTimer}>Stop</button>}
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
}
