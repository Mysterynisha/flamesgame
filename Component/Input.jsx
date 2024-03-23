import React from 'react'
import { useRef } from 'react'
 import { useState } from 'react'
const Input = () => {
    let input1=useRef()
    let input2=useRef()
    const [emoji, setEmoji] = useState("");
    const audioRef = useRef(null);

     const[relationship,setrelationship]=useState("")
    function handle()
    {
        let name1=input1.current.value.toLowerCase().replace(/\s/g, '');
        let name2=input2.current.value.toLowerCase().replace(/\s/g, '');
       // console.log(userinput1);
       // console.log(userinput2);
      
       


       let flames = ["Friends", "Love", "Affection", "Marriage", "Enemies", "Siblings"];

       // Count the number of letters in each name after removing common letters
       let commonLetters = 0;
       for (let i = 0; i < name1.length; i++) {
           if (name2.includes(name1[i])) {
               name2 = name2.replace(name1[i], '');
               commonLetters++;
           }
       }
       let totalLetters = name1.length + name2.length;
   
       // Calculate the index to find the relationship status
       let index = totalLetters % flames.length;
   
       // Determine the relationship status
       let relationshipStatus = flames[index];
      

       let emojiMap = {
        "Friends": "👫",
        "Love": "❤️",
        "Affection": "😊",
        "Marriage": "💍",
        "Enemies": "👿",
        "Siblings": "👨‍👩‍👧‍👦"
    };
     // console.log(relationshipStatus);
     let emojiForRelationship = emojiMap[relationshipStatus] || "";
      setrelationship(relationshipStatus)
      setEmoji(emojiForRelationship)


      // Play the audio
      if (audioRef.current) {
        audioRef.current.play();
    }

    }

  
    function clear()
    {
      input1.current.value = '';
        input2.current.value = '';
        setrelationship("");
        setEmoji("");

        // Pause the audio
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0; // Reset audio to beginning
      }
    }


    
  return (
    
    <>
    <h1>FLAMES GAME</h1>
    <div className='content'>
          <label>Your Name: </label>
        <input type='text'placeholder=' your name' ref={input1}/>
        
        <label>Crush name : </label>
         <input type='text' placeholder='crush name' ref={input2}/>
         
         <button onClick={handle}>Calculate relationship</button>
         <button onClick={clear}>Clear</button>
         
           <div className='card'>
         <h3>{relationship}{emoji}</h3>
         
         </div>
           {/* Audio player */}
           <div className='audio-container'>
                    <audio controls ref={audioRef} className='audio-player'>
                        <source src="https://www.pendujatt.net/hindi-songs/song/phir-kabhi-arijit-singh-anshe.html" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>

    </div>
      
    
    </>
    
  )
}

export default Input