import './App.css';
import { students } from './data/StudentsDb';
import StudentTable from './components/StudentTable';

function App() {
  return (
    <div className="App">
    <h1>Student Information Portal</h1>
    <hr/>
    
    <table width="100%">
      <tbody>
        <tr>
          <td>    
            <StudentTable students={students}/>
            </td>
        </tr>
        </tbody>
    </table>
    </div>
  );
}

export default App;