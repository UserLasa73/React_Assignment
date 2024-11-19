import '../assets/css/compo.css'
import profile from './profile'
import {useState} from 'react'


export default function StudentTable(props){
    const [stu,setStu]=useState(props.students[0]);

    return(
        <div className="outerDiv">
            <div className="leftDiv">
                <table border='1'>
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Course</td>
                            <td>Country</td>
                            <td>Profile</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.students.map(student=>
                                <tr>
                                    <td>{student.firstname}</td>
                                    <td>{student.lastname}</td>
                                    <td>{student.course}</td>
                                    <td>{student.address.country}</td>
                                    <td><button onClick={()=>{setStu(student)}}>view</button></td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className="rightDiv">
                    <profile student={stu}/>
            </div>
        </div>
    )
}