import React, {useState} from 'react'

const PersonCard = (props) => {
  const {firstname,lastname,age,haircolor} = props
  const [aged, setAged] = useState(age)
  const bday = () => {
    setAged ( aged+1 )
  }
  return (
    <div>
        <h1>{lastname}, {firstname} </h1>
        <h3>Age : {aged} </h3>
        <h3>Hair Color : {haircolor} </h3>
        <button onClick={bday} >Birthday Button for {firstname} {lastname} </button>
    </div>
  )
}

export default PersonCard