import '../styles/WorkTab.css'
import tictactoe from '../assets/tictactoe.png'
import odblogweb from '../assets/odblogweb.png'
import salespree from '../assets/salesspree.png'
import membersonly from '../assets/membersonly.png'
import whereswally from '../assets/wheresod.png'
import todolist from '../assets/todolist.png'

import WorkSection from '../components/WorkSection'

function WorkTab() {
  const ttt = [{
    title: "Blog",
    img: odblogweb,
    dsc: "A RESTful API Express server that serves two different React front-ends. One is for general users who can view posts and post a comment. The other is a website just for me to make new posts, or delete posts and comments. Utilises a JWT token to verify whether the admin has logged in to make these changes.",
    git: "https://github.com/orangeola/od-blog-web",
    live: "https://orangeola.github.io/od-blog-web/"
  },
  {
    title: "Sale Spree",
    img: salespree,
    dsc: "A couch co-op party game made in six months with a team of six using Unity and C#. Race against the clock as you try to fulfill your randomised shopping list while battling other shoppers along the way.",
    link: "https://youtu.be/gTXo4zMmHLU",
    yt: true
  },
  {
    title: "Where's Wally",
    img: whereswally,
    dsc: "Find three things hidden in this Where's Wally inspired picture. Every click calls Firebase to check if one of the objectives have been found. Made using React.",
    git: "https://github.com/orangeola/wheres-od",
    live: "https://orangeola.github.io/wheres-od/"
  },
  {
    title: "Members Only",
    img: membersonly,
    dsc: "Any registered user may make a post here, but only members can see the name of the author. If you know the secret password, you can become a memeber... or even an admin. Utilises passpotjs to handle log in and uses bcryptjs to encrypt passwords in the database. Hosted entirely within Express using pug.",
    git: "https://github.com/orangeola/od-members-only",
    live: "https://od-members-only.orangeola.repl.co"
  },
  {
    title: "To-do List",
    img: todolist,
    dsc: "Add to-do's within topics to keep them grouped and ordered. Every topic and to-do is stored on a mongodb database.",
    git: "https://github.com/orangeola/od-todo-list",
    live: "https://orangeola.github.io/od-todo-list/"
  },
  {
    title: "Tic Tac Toe",
    img: tictactoe,
    dsc: "Tic Tac Toe in the style of the Windows XP era. Enemy AI makes decision using the minimax algorithm.",
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
