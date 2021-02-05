import React, { Fragment, useState } from "react";

const InputAlertGroupTeamUsers = () => {
    const [intercept_id, setInterceptId] = useState();

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { intercept_id };
            const response = await fetch("http://localhost:5000/alert_group_team_users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            
            console.log(response);
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <h1 className="text-center mt-5">InputAlertGroupTeamUsers List</h1>
            <form
                className="d-flex mt-5"
                onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="form-control"
                    value={ intercept_id }
                    onChange={e => setInterceptId(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputAlertGroupTeamUsers;