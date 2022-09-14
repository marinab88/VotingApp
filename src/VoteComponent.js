const VoteComponent = ({question, options}) => {

  // let votes = new Array(options.length).fill(0)

  // HW1: create and fill the array using at least 2 other variants
  //   hint: use .map()
 
  // Variant 1.
  // let votes = []
  //     votes.push(0)

  // Variant 2.
  let votes = options.map(element => {
      element = 0
      return element
  })

  // HW2: using the .map() and votes array -> show the votes in brackets
  let vote;
  // First way
  //   for (let i=0; i<votes.length; i++) {
  //     vote = votes[i]
  //   }
  
  // Second way
  votes.forEach(item => {
    vote = item 
  })
//  console.log(vote)
//  console.log(votes)

  let buttons = options.map( option => 
    <button onClick={(e) => {console.log(e)}}>
      {option} ({vote})
    </button>
  )

  return (
    <div>
      <h2>{question}</h2>
      {buttons}
    </div>
  );
}

export default VoteComponent;
