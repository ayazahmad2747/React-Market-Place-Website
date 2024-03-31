import React from 'react'

const ChoiceBox = (props) => {
    const {AyazImg, ChoiceImage} = props
  return (
    <div className="card-item1 choice-item">
        <div className="card-img">
        <img src={ChoiceImage} alt="card" width={200} height={200} className='game' />
        </div>
        <h1 className='dog'>Radioactive Doge</h1>
        <div className="card-div">
            <img src={AyazImg} alt="profile" width={40} height={40}  id='profile'/>
            <div className="menu">
            <h2 id='menu-titel'>Ayaz Ahmad</h2>
            <p id='menu-p'>Creator</p>
            </div>
            <div className="menu">
            <h2 id='menu-titel'>50.12 wDOGE</h2>
            <p id='menu-p'>Creator</p>
            </div>
        </div>
        </div>
  )
}

export default ChoiceBox
