import "./task3.scss"

function Task3({fr}){

return(
<div>
<ul className="friend-list3">
    {fr.map(e=>(
        <li className="item3" key={e.id}>
         <span className="status3" style={{color: e.isOnline ? 'green' : 'red'}}>⬤</span>
         <img className="avatar3" src={e.avatar} alt="User avatar" width="48" />
         <p className="name3">{e.name}</p>
       </li>
    )  
   )
}
</ul>   
</div>
)
}

export default Task3;