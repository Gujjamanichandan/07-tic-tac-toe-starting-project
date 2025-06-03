import { Player } from './components/player'
import GameBoard from './components/gameBoard'

function App() {
	return (
		<main>
			<div id="game-container">
				<ol id="players">
					<Player intialName="Player 1" symbol="X" />
					<Player intialName="Player 2" symbol="O" />
				</ol>
				<GameBoard />
			</div>
			
		</main>
	)
}

export default App
