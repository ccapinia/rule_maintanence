import React, { Fragment, useEffect, useState } from "react";
import EditRuleActions from "./EditRuleActions";

const ListRuleActions = () => {

    const [ruleActions, setRuleActions] = useState([]);

    //delete rule

    const deleteRuleActions = async id => {
        try {
            const deleteRuleActions = await fetch(`http://localhost:5000/rule_actions/${id}`, {
                method: "DELETE"
            });

            console.log(deleteRuleActions);
            setRuleActions(ruleActions.filter(ruleActions => ruleActions.rule_action_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getRuleActions = async () => {
        try {
            const response = await fetch("http://localhost:5000/rule_actions");
            const jsonData = await response.json();

            setRuleActions(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getRuleActions();
    }, []);

    console.log(ruleActions);
    return (
        <Fragment>
            {" "}
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>RuleAction</th>
                        <th>Intercept ID</th>
                        <th>Rule Number</th>
                        <th>Rule Type</th>
                        <th>Action</th>
                        <th>Date</th>
                        <th>Edit</th>
                        <th>Delete</th> 
                    </tr>
                </thead>
                <tbody>
                    {/* */}
                    {ruleActions.map(ruleActions => (
                        <tr key={ruleActions.rule_action_id}>
                            <td>{ruleActions.rule_action_id}</td>
                            <td>{ruleActions.intercept_id}</td>
                            <td>{ruleActions.rule_number}</td>
                            <td>{ruleActions.rule_type}</td>
                            <td>{ruleActions.action}</td>
                            <td>{ruleActions.action_date}</td>
                            <td>
                                <EditRuleActions ruleActions={ruleActions}/>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteRuleActions(ruleActions.rule_action_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListRuleActions;