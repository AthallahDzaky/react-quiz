import { useState } from 'react';
import Modal from './Modal';
import { cssForm } from './style';

const Test8 = () => {
  const [person, setPerson] = useState({
    name:"",
    age:"",
    address:"",
    showingModal:false
  })
  // ONLY ONE HANDLE METHOD ALLOWED
  const handleInput = (event) => {
    if (event.target.name === "showingModal") {
      let tempShowingModal = person.showingModal
      setPerson({
        ...person,
        [event.target.name]: !tempShowingModal
      })
    } else {
      setPerson({
        ...person,
        [event.target.name]: event.target.value
      })
    }
  };
  console.log(person.showingModal)

  return(
    <div>
      <ul>
        <li>User can input the form - only 1 handle method is allowed</li>
        <li>When submit display the modal</li>
        <li>Show the form value inside the modal</li>
        <li>Reset the form and close the modal when user click the reset button</li>
      </ul>
      <div className={cssForm}>
        <input type="text" placeholder="name" name="name" value={person.name} onChange={handleInput}/>
        <input type="text" placeholder="age" name="age" value={person.age} onChange={handleInput}/>
        <textarea type="text" placeholder="address" name="address" value={person.address} onChange={handleInput}/>
        <button name="showingModal" onClick={handleInput}>Submit</button>
      </div>
      {/* Only Show the modal when user clicked submit */}
      {person.showingModal && <Modal
        personData={person}
      />}
    </div>
  )
}

export default Test8;