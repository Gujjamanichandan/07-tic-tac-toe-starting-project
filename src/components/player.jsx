import { useState } from 'react';

export function Player( {intialName, symbol}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(intialName);

  function handleEditCLick() {
    setIsEditing(editing=> !editing);
  }

  function handleNameChange(event){
    setPlayerName(event.target.value);
  }

  let FplayerName = <span className="player-name">{playerName}</span>;

  if(isEditing) {
    FplayerName = <input type="text" required value={playerName} onChange={handleNameChange}/>;
  }

    return ( <li>
        <span className="player">
        {FplayerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditCLick}>{isEditing ? 'Save' : 'Edit'}</button>
      </li> )
}