import { useState } from 'react'
// any variable that should impact the UPDATE
//MUST BE changed using STATE mechanism

// using STATE HOOK
// useState()
const VoteComponent = ({question, options}) => {
  // let votes = new Array(options.length).fill(0)
  let [votes, setVotes] = useState(new Array(options.length).fill(0))

  // HW1: create and fill the array using at least 2 other variants
  //   hint: use .map()
 
  // Variant 1.
  // let votes = []
  //     votes.push(0)

  // Variant 2.
  // let votes = options.map(element => {
  //     element = 0
  //     return element
  // })

  // HW2: using the .map() and votes array -> show the votes in brackets
  // let vote;
  // First way
  //   for (let i=0; i<votes.length; i++) {
  //     vote = votes[i]
  //   }
  
  // Second way
  // votes.forEach(item => {
  //   vote = item 
  // })
//  console.log(vote)
//  console.log(votes)

  let buttons = options.map( (option, index ) => 
    <button data-idx={index} onClick={(e) => {
      let idx = e.target.getAttribute('data-idx')
      votes[idx]++
      // One way
      // setVotes(votes.map(e => e))
      // react STATE values are considered IMMUTABLE !!!
      // Another way
      setVotes([...votes])
      // console.log(votes)
      }
    }>
      {option} ({votes[index]})
    </button>
    // e(SyntheticBaseEvent) .nativeEvent ----> PointerEvent
    // .target
  )

  // HW3: render total votes 
  // console.log(votes)
  let totalVotes = votes.reduce((sum, value) => {
    return sum + value
  }, 0)
  // console.log(totalVotes)
  
  return (
    <div>
      <h2>{question}</h2>
      <h4>Total votes: {totalVotes}</h4>
      {buttons}
    </div>
  );
}

export default VoteComponent;


/*
   container
----------------
|              |
|initial_value |----> ReactDOM
|              |
----------------
    |      ^new_value
    |      |
 variable setVariable
    |      |
    V      |
const someFunctionComponent = () => {
  let [variable, setVariable] = useState(initial_value)

  setVariable(new_value)

  return (
    ...
    template(variable)
    ...
  )
}

*/
