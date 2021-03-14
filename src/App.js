import './App.css';
/*  import { useState } from 'react'; */


/* Create an empty  Set (to deal with duplicate) */
let setNumber = new Set();
let gridNumber = [];
/*  add random number  until the size is equal to 7 which is the target number for the grid part */



while (setNumber.size < 7){
  setNumber.add(getRandomInt(1,50))
}

/* Generate a random int with min and max value */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let int = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive

  return int;
}

/* Push the number into the array */
setNumber.forEach ( number =>{gridNumber.push( number + "  " )
})

/* Sort the array in ascending order */
gridNumber.sort(function(a, b){return a-b});

/* Custom display */
let displayNumber = gridNumber.map((number)=>{ return <div className="grid-number">{ number }</div> })


const handleClick = ()=>{window.location.reload()}


/* Do the same for the star number with array of 2 and int between 1 and 12 */
/* If an API exists : Check numbers with the numbers picked : Need to store the number somewhere.. */
/* Send a mail with the result and the number of correct choices */


function App() {
  const name = 'Syd';
  
  return (
    <div className='App'>
      <div className='content'>
      <p>Welcome { name } </p>
      {/* Display the array  */}
      <p> Your winning numbers are : </p> <div className='Grid-num-list'> { displayNumber } </div>
      <button onClick={handleClick} className="random-btn">Random</button>



      </div>
    </div>

  );
}

export default App;
