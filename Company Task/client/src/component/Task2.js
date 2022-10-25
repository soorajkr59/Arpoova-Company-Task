import React from "react";
import { Tasks } from "./Tasks";
import { useState } from "react";

export function Task2()
{
    
   
        const [input1, setInput1] = useState(" ");
        
        const [finalIndex, setfinalIndex] = useState();

        const wordsToCorrect = {
           realy : "really",
           wierd : "weird",
           goggle : "google",

        };
       
        function checkWordMatch(e) {
            if (e[e.length - 1] === " ") 
            {
                let finalWord = e.slice(finalIndex + 1, e.length - 1);

                let spellCheckMistakes = Object.keys(wordsToCorrect);
       
            for (let i = 0; i <= spellCheckMistakes.length - 1; i++) 
            {
                if (finalWord === spellCheckMistakes[i]) 
                {
                    e = `${e.slice(0, finalIndex)} ${wordsToCorrect[finalWord]}`;
                }
            }
            setfinalIndex(e.length - 1);
        }
        setInput1(e);
    }
    return(
        <div>
            <div>
                <Tasks/>
            </div>
            <p className="text-center mt-5"><b>Task 2 - Autocorrection App</b></p>
            <div className="t2bgcolor">
            <input type="text" className="task2-input" onChange={(event) => checkWordMatch(event.target.value)} value={input1} />
            </div>

            
        </div>
    );
}
