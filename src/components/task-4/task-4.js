import "./task4.scss"

function Task4({tr}){

return(
    <div>
    <table className="transaction-history">
  <thead>
    <tr className="list-names4">
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    
{tr.map(e=>(
    <tr className="list-items4" key={e.id}>
    <td>{e.type}</td>
    <td>{e.amount}</td>
    <td>{e.currency}</td>
  </tr>
))}
  </tbody>
</table>
</div>
)
    
}
export default Task4;

