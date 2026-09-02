import { useState } from 'react'
import './App.css'
function App() {
 const [isUser1Turn, setIsUser1Turn] = useState(true);
 const [isUser2Turn, setIsUser2Turn] = useState(false);

 const [currentSimbolX, setCurrentSimbolX] = useState(false);
 
 const [wasSpace1Clicked, setWasSpace1Clicked] = useState(false);
 const [wasSpace2Clicked, setWasSpace2Clicked] = useState(false);
 const [wasSpace3Clicked, setWasSpace3Clicked] = useState(false);
 const [wasSpace4Clicked, setWasSpace4Clicked] = useState(false);
 const [wasSpace5Clicked, setWasSpace5Clicked] = useState(false);
 const [wasSpace6Clicked, setWasSpace6Clicked] = useState(false);
 const [wasSpace7Clicked, setWasSpace7Clicked] = useState(false);
 const [wasSpace8Clicked, setWasSpace8Clicked] = useState(false);
 const [wasSpace9Clicked, setWasSpace9Clicked] = useState(false);
 

  function handleClickedSpace1(){
      setWasSpace1Clicked(currentSimbolX ? 'X' : 'O')
      setCurrentSimbolX(!currentSimbolX)
       
  }

  function handleClickedSpace2(){
    setWasSpace2Clicked(currentSimbolX ? 'X' : 'O')
      setCurrentSimbolX(!currentSimbolX)
  }

  function handleClickedSpace3(){
    setWasSpace3Clicked(currentSimbolX ? 'X' : 'O')
      setCurrentSimbolX(!currentSimbolX)
  }

  function handleClickedSpace4(){
    setWasSpace4Clicked(currentSimbolX ? 'X' : 'O')
      setCurrentSimbolX(!currentSimbolX)
  }

  function handleClickedSpace5(){
    setWasSpace5Clicked(currentSimbolX ? 'X' : 'O')
      setCurrentSimbolX(!currentSimbolX)
  }

  function handleClickedSpace6(){
    setWasSpace6Clicked(currentSimbolX ? 'X' : 'O')
      setCurrentSimbolX(!currentSimbolX)
  }

  function handleClickedSpace7(){
    setWasSpace7Clicked(currentSimbolX ? 'X' : 'O')
      setCurrentSimbolX(!currentSimbolX)
  }

  function handleClickedSpace8(){
    setWasSpace8Clicked(currentSimbolX ? 'X' : 'O')
      setCurrentSimbolX(!currentSimbolX)
  }

  function handleClickedSpace9(){
    setWasSpace9Clicked(currentSimbolX ? 'X' : 'O')
      setCurrentSimbolX(!currentSimbolX)
  }

  function restartGame(){
    setWasSpace1Clicked(false)
    setWasSpace2Clicked(false)
    setWasSpace3Clicked(false)
    setWasSpace4Clicked(false)
    setWasSpace5Clicked(false)
    setWasSpace6Clicked(false)
    setWasSpace7Clicked(false)
    setWasSpace8Clicked(false)
    setWasSpace9Clicked(false)
  }
  return (
    <div style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center',width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div>
        <h1>Jogo da Coroa</h1>
        <div style={{width:'401px', height: '402px', display: 'flex', flexWrap: 'wrap'}}>
          <div className="space1" onClick={() => handleClickedSpace1()}>{wasSpace1Clicked}</div>
          <div className='space2' onClick={() => handleClickedSpace2()}>{wasSpace2Clicked}</div>
          <div className='space3' onClick={() => handleClickedSpace3()}>{wasSpace3Clicked}</div>
          <div className='space4' onClick={() => handleClickedSpace4()}>{wasSpace4Clicked}</div>
          <div className='space5' onClick={() => handleClickedSpace5()}>{wasSpace5Clicked}</div>
          <div className='space6' onClick={() => handleClickedSpace6()}>{wasSpace6Clicked}</div>
          <div className='space7' onClick={() => handleClickedSpace7()}>{wasSpace7Clicked}</div>
          <div className='space8' onClick={() => handleClickedSpace8()}>{wasSpace8Clicked}</div>
          <div className='space9' onClick={() => handleClickedSpace9()}>{wasSpace9Clicked}</div>
        </div>
        <div>
          <div>User 1 Simbol : {currentSimbolX ?  'X' : 'O'} </div>
          <div>User 2 Simbol : {currentSimbolX ?  'O' : 'X'}</div>
          <button onClick={() => setCurrentSimbolX(!currentSimbolX)}>Shift Simbol</button>
          <button onClick={() => restartGame()}>Restart</button>
        </div>
      </div>
    </div>
  )
}

export default App
