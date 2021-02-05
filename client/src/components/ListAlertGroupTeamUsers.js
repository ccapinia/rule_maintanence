import React, { Fragment, useEffect, useState } from "react";
import EditAlertGroupTeamUsers from "./EditAlertGroupTeamUsers";

const ListAlertGroupTeamUsers = () => {

    const [AlertGroupTeamUsers, setAlertGroupTeamUsers] = useState([]);

    //delete rule

    const deleteAlertGroupTeamUsers = async id => {
        try {
            const deleteAlertGroupTeamUsers = await fetch(`http://localhost:5000/alert_group_team_users/${id}`, {
                method: "DELETE"
            });

            console.log(deleteAlertGroupTeamUsers);
            setAlertGroupTeamUsers(AlertGroupTeamUsers.filter(AlertGroupTeamUsers => AlertGroupTeamUsers.alert_users_userid !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getAlertGroupTeamUsers = async () => {
        try {
            const response = await fetch("http://localhost:5000/alert_group_team_users");
            const jsonData = await response.json();

            setAlertGroupTeamUsers(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getAlertGroupTeamUsers();
    }, []);

    console.log(AlertGroupTeamUsers);
    return (
        <Fragment>
            {" "}
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Alert Group ID</th>
                        <th>Team User UserID</th>
                        <th>Edit</th>
                        <th>Delete</th> 
                    </tr>
                </thead>
                <tbody>
                    {/* 
                                <EditAlertGroupTeamUsers AlertGroupTeamUsers={AlertGroupTeamUsers}/>
                        
                    */}
                    {AlertGroupTeamUsers.map(AlertGroupTeamUsers => (
                        <tr key={AlertGroupTeamUsers.alert_users_userid}>
                            <td>{AlertGroupTeamUsers.alert_group_id}</td>
                            <td>{AlertGroupTeamUsers.team_users_userid}</td>
                            <td>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteAlertGroupTeamUsers(AlertGroupTeamUsers.alert_users_userid)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListAlertGroupTeamUsers;