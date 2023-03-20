import '../styles/WorkTab.css'
import tictactoe from '../assets/tictactoe.png'
import WorkSection from '../components/WorkSection'

function WorkTab() {
  const ttt = [{
    title: "Tic Tac Toe",
    img: tictactoe,
    dsc: "Tic Tac Toe in the style of Windows XP. Enemy AI makes decision using the minimax algorithm.",
    git: "https://github.com/orangeola/odin-tictactoe",
    live: "https://orangeola.github.io/odin-tictactoe/"
  },
  {
    title: "Tic Tac Toe",
    img: tictactoe,
    dsc: "Tic Tac Toe in the style of Windows XP. Enemy AI makes decision using the minimax algorithm.",
    git: "https://github.com/orangeola/odin-tictactoe",
    live: "https://orangeola.github.io/odin-tictactoe/"
  },
  {
    title: "Tic Tac Toe",
    img: tictactoe,
    dsc: "Tic Tac Toe in the style of Windows XP. Enemy AI makes decision using the minimax algorithm.",
    git: "https://github.com/orangeola/odin-tictactoe",
    live: "https://orangeola.github.io/odin-tictactoe/"
  },
  {
    title: "Tic Tac Toe",
    img: tictactoe,
    dsc: "Tic Tac Toe in the style of Windows XP. Enemy AI makes decision using the minimax algorithm.",
    git: "https://github.com/orangeola/odin-tictactoe",
    live: "https://orangeola.github.io/odin-tictactoe/"
  },
  {
    title: "Tic Tac Toe",
    img: tictactoe,
    dsc: "Tic Tac Toe in the style of Windows XP. Enemy AI makes decision using the minimax algorithm.",
    git: "https://github.com/orangeola/odin-tictactoe",
    live: "https://orangeola.github.io/odin-tictactoe/"
  },
  {
    title: "Tic Tac Toe",
    img: tictactoe,
    dsc: "Tic Tac Toe in the style of Windows XP. Enemy AI makes decision using the minimax algorithm.",
    git: 'https://github.com/orangeola/odin-tictactoe',
    live: 'https://orangeola.github.io/odin-tictactoe'
  },]

  return (
    <div className="WorkTab">
      {ttt.map((work)=> 
        WorkSection({workObj:work})
      )}
    </div>
  );
}

export default WorkTab;
