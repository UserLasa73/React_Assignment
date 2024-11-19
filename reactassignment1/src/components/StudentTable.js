import "../assets/css/compo.css"
import Profile from "./Profile";
import {useState} from"react";

export default function StudentTable(props){
    const [stu,setStu]=useState( props.students[0]);
    const [font,setFont]=useState(16);
    return (
    
    <div>
        <div align='left'>
            Fonst Size: 
            <button onClick={()=>setFont(14)}>S</button>
            <button onClick={()=>setFont(18)}>M</button>
            <button onClick={()=>setFont(20)}>L</button>
        </div>
       
        <hr/>
         <div className="outerDiv">
            <div className="leftDiv"> 
                <table border="1" style={{fontSize:`${font}px`}}>
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>course</td>
                            <td>Country</td>
                            <td>Profile</td>
                         
                        </tr>
                    </thead>
                    <tbody>
                    {
                        props.students.map( student=>
                        <tr>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.course}</td>
                            <td>{student.address.country}</td>
                            <td><button onClick={()=>setStu(student)}>View</button></td>
                          
                        </tr>
                        ) 
                    }
                    </tbody>
                </table>
               </div>
               <div className="rightDiv">
                        <Profile stu={stu}/>
                    </div> 
            </div>   
    </div>
    
);
}