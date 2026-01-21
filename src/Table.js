import './App.css';

function Table(props) {

    return ( <> 
            <table>
                <thead>
                    <tr>
                        <th>Project Title</th>    
                        <th>Institution</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {props.grant.map((grant,index) => (<tr><td grant={grant}index={index}></td></tr>))}
                </tbody>    
            </table> 
    </>);
}

export default Table;