import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const listCleared = [
    {id: 1, symbol: '', class:'space1', isSymbolWinner: false, wasSpaceClicked: false},
    {id: 2, symbol: '', class:'space2', isSymbolWinner: false, wasSpaceClicked: false},
    {id: 3, symbol: '', class:'space3', isSymbolWinner: false, wasSpaceClicked: false},
    {id: 4, symbol: '', class:'space4', isSymbolWinner: false, wasSpaceClicked: false},
    {id: 5, symbol: '', class:'space5', isSymbolWinner: false, wasSpaceClicked: false},
    {id: 6, symbol: '', class:'space6', isSymbolWinner: false, wasSpaceClicked: false},
    {id: 7, symbol: '', class:'space7', isSymbolWinner: false, wasSpaceClicked: false},
    {id: 8, symbol: '', class:'space8', isSymbolWinner: false, wasSpaceClicked: false},
    {id: 9, symbol: '', class:'space9', isSymbolWinner: false, wasSpaceClicked: false}
  ];
  const [listSpaces, setListSpaces] = useState(listCleared);
  const [userOneTurn, setUserOneTurn] = useState(true);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameFinished, setIsGameFinshed] = useState(false);
  const [userOneSymbol, setUserOneSymbol] = useState('O');
  const [userTwoSymbol, setUserTwoSymbol] = useState('X');
  const [moves, setMoves] = useState(0);
  const [isGameTied, setIsGameTied] = useState(false);


  useEffect(() => {
    verifyWinner()
  }, [userOneTurn]);
 
  function handleSpaceClick(item) {
    setListSpaces(
      listSpaces.map((space) => {
       if (space.wasSpaceClicked === false && isGameFinished === false){
        if (space.id === item.id) {
          setIsGameStarted(true)
          setUserOneTurn(!userOneTurn)
          return { ...space, symbol: userOneTurn ? userOneSymbol: userTwoSymbol, wasSpaceClicked: true}; 
        }
      }
      return space;
      })
    );
  }

  function handleShiftClick(){
    if(!isGameStarted){
      setUserOneSymbol(userTwoSymbol);
      setUserTwoSymbol(userOneSymbol)
    }else{
      alert('Você não pode alterar o simbolo pois o jogo já começou')
    }
  }

  function handleRestartClick(){
    setListSpaces(listCleared);
    setUserOneTurn(true);
    setIsGameStarted(false);
    setIsGameFinshed(false);
    setUserOneSymbol('O');
    setUserTwoSymbol('X');
    setIsGameTied(false)
    setMoves(0);
  }

  function verifyWinner(){
    const space1 = listSpaces[0];
    const space2 = listSpaces[1];
    const space3 = listSpaces[2];
    const space4 = listSpaces[3];
    const space5 = listSpaces[4];
    const space6 = listSpaces[5];
    const space7 = listSpaces[6];
    const space8 = listSpaces[7];
    const space9 = listSpaces[8];
    
    if(space1.symbol && space1.symbol === space2.symbol && space2.symbol === space3.symbol){
      setListSpaces(prevSpaces => prevSpaces.map((space) => {
        if(space.id === space1.id || space.id === space2.id || space.id === space3.id){
          setIsGameFinshed(true);
          return { ...space, isSymbolWinner: true}
        }
          return space
      }))
    }
  else if(space1.symbol && space1.symbol === space4.symbol && space4.symbol === space7.symbol){
      setListSpaces(prevSpaces => prevSpaces.map((space) => {
        if(space.id === space1.id || space.id === space4.id || space.id === space7.id){
          setIsGameFinshed(true);
          return { ...space, isSymbolWinner: true}
          
        }
          return space
      }))
    }else if(space1.symbol && space1.symbol === space5.symbol && space5.symbol === space9.symbol){
      setListSpaces(prevSpaces => prevSpaces.map((space) => {
        if(space.id === space1.id || space.id === space5.id || space.id === space9.id){
          setIsGameFinshed(true);
          return { ...space, isSymbolWinner: true}
        }
          return space
      }))
    }
    else if(space2.symbol && space2.symbol === space5.symbol && space5.symbol === space8.symbol){
      setListSpaces(prevSpaces => prevSpaces.map((space) => {
        if(space.id === space2.id || space.id === space5.id || space.id === space8.id){
          setIsGameFinshed(true);
          return { ...space, isSymbolWinner: true}
        }
          return space
      }))
    }
    else if(space3.symbol && space3.symbol === space6.symbol && space6.symbol === space9.symbol){
      setListSpaces(prevSpaces => prevSpaces.map((space) => {
        if(space.id === space3.id || space.id === space6.id || space.id === space9.id){
          setIsGameFinshed(true);
          return { ...space, isSymbolWinner: true}
        }
          return space
      }))
    }
    else if(space3.symbol && space3.symbol === space5.symbol && space5.symbol === space7.symbol){
      setListSpaces(prevSpaces => prevSpaces.map((space) => {
        if(space.id === space3.id || space.id === space5.id || space.id === space7.id){
          setIsGameFinshed(true);
          return { ...space, isSymbolWinner: true}
        }
          return space
      }))
    }
    else if(space4.symbol && space4.symbol === space5.symbol && space5.symbol === space6.symbol){
      setListSpaces(prevSpaces => prevSpaces.map((space) => {
        if(space.id === space4.id || space.id === space5.id || space.id === space6.id){
          setIsGameFinshed(true);
          return { ...space, isSymbolWinner: true}
        }
          return space
      }))
    }
    else if(space7.symbol && space7.symbol === space8.symbol && space8.symbol === space9.symbol){
      setListSpaces(prevSpaces => prevSpaces.map((space) => {
        if(space.id === space7.id || space.id === space8.id || space.id === space9.id){
          setIsGameFinshed(true);
          return { ...space, isSymbolWinner: true}
        }
          return space
      }))
    } else {
      if(moves ===
        
        
        9){
        setIsGameTied(true)
        setIsGameFinshed(true)
      } else{
        setMoves(prevMoves => prevMoves + 1)
      }
    }
  }

  return (
    <div className='page'>
      <div className='ticTacToeContainer'>
        <h1 className='containerTitle'>Tic-tac-toe</h1>
        <h2>{isGameFinished ? (userOneTurn  ?  'O usuario 2 ganhou': 'O usuario 1 ganhou'): ''}</h2>
        {isGameTied && <h2 style={{color: 'red'}}>Empatado</h2>}
        <div className='tictactoeTable'>
          {listSpaces.map((item) => (<div key={item.id} onClick={() => handleSpaceClick(item)} className={`${item.class} ${item.isSymbolWinner && 'winner' }`}><p className='symbol'>{item.symbol}</p></div>))}
        </div>

        <div>
          <div className='userContainer'>User 1: {userOneSymbol}</div>
          <div className='userContainer'>User 2: {userTwoSymbol}</div>
          <button onClick={() => handleShiftClick()}>Shift symbol</button>
          <button onClick={() => handleRestartClick()}>Restart</button>
        </div>
      </div>
    </div>
  )
}
export default App
