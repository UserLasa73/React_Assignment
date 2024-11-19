export default function(){
    return(
        <>
            <table>
                <tr>
                    <td rowSpan={7}>
                        <img src={require("../assets/img/1.jpg")} alt="profile picture" />
                    </td>
                    <td>ID{props.stu.studentId}</td>
                </tr>
            </table>
        </>
    )
}