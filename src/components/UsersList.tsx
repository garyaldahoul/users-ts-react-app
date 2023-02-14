import React from "react";
import {IState as IProps} from "../App"


// interface IProps{
//     users:{
//       name:string,
//       age:number,
//       url_img:string,
//       note?:string
//     }[]
//   }

// const UserList (props:IProps)=>{
// const UserList ({people}:IProps)=>{
const UsersList:React.FC<IProps> =({users})=>{

    const renderList =():JSX.Element[]=>{
        return  users.map((user)=>{
            return(
                <div  className="user-item"  key={user.name}>
                    <img className="user-img" src={user.url_img} />
                    <div className="info-container">
                        <h4>{user.name}</h4>
                        <p>{user.note}</p>
                    </div>
                   
                </div>
            )
        })
    }
    return(
        <div className="users-list-container">
        {renderList()}

        </div>
    )
}

export default UsersList;