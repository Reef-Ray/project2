import './App.css';
import TableRow from "./TableRow";

function Table(props) {

    return ( <> 
            <table>
      <thead>
        <tr>
          <th>Project Title</th>
          <th>Institution</th>
          <th>City</th>
          <th>State</th>
          <th>Year Awarded</th>
          <th>Program</th>
          <th>Award Amount</th>
        </tr>
      </thead>

      <tbody>
        {grants.map((grant, index) => (
          <TableRow key={index} grant={grant} />
        ))}
      </tbody>
    </table>
    </>);
}

export default Table;