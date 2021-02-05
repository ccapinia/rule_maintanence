import React, { Fragment, useState } from "react";

const InputInterceptDataloadRuleID = () => {
    const [intercept_dataload_rule_id, setInterceptDataloadRuleID] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { intercept_dataload_rule_id };
            const response = await fetch("http://localhost:5000/work", {
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
            <h1 className="text-center mt-5">Intercept Dataload Rule ID List</h1>
            <form
                className="d-flex mt-5"
                onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="form-control"
                    value={ intercept_dataload_rule_id }
                    onChange={e => setInterceptDataloadRuleID(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputInterceptDataloadRuleID;