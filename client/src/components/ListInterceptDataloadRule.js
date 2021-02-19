import React, { Fragment, useEffect, useState } from "react";
import EditInterceptDataloadRule from "./EditInterceptDataloadDetails";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const ListInterceptDataloadRule = () => {

    const [InterceptDataloadRule, setInterceptDataloadRule] = useState([]);

    //delete rule

    const deleteInterceptDataloadRule = async id => {
        try {
            const deleteInterceptDataloadRule = await fetch(`http://localhost:5000/intercept_dataload_rules/${id}`, {
                method: "DELETE"
            });

            console.log(deleteInterceptDataloadRule);
            setInterceptDataloadRule(InterceptDataloadRule.filter(InterceptDataloadRule => InterceptDataloadRule.intercept_dataload_rule_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getInterceptDataloadRule = async () => {
        try {
            const response = await fetch("http://localhost:5000/intercept_dataload_rules");
            const jsonData = await response.json();

            setInterceptDataloadRule(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getInterceptDataloadRule();
    }, []);

    console.log(InterceptDataloadRule);
    return (
        <Fragment>
            {" "}
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Intercept Dataload Rule ID</th>
                        <th>Type</th>
                        <th>Comment Value</th>
                        <th>Status</th>
                        <th>RE ID Elnot</th>
                        <th>ST Conf</th>
                        <th>SP Conf</th>
                        <th>IR Conf</th>
                        <th>PD Conf</th>
                        <th>MT Conf</th>
                        <th>MT Conf New MT</th>
                        <th>Last Updated By</th>
                        <th>Creator</th>
                        <th>Created Date</th>
                        <th>Last Edited</th>
                        <th>Hreadcount</th>
                        <th>Hreadcount Threshold</th>
                        <th>Functions</th> 
                    </tr>
                </thead>
                <tbody>
                    {/*
                        <button
                                    className="btn btn-danger"
                                    onClick={() => deleteInterceptDataloadRule(InterceptDataloadRule.intercept_dataload_rule_id)}>
                                    Delete
                        </button>
                    */}
                    {InterceptDataloadRule.map(InterceptDataloadRule => (
                        <tr key={InterceptDataloadRule.intercept_dataload_rule_id}>
                            <td>{InterceptDataloadRule.intercept_dataload_rule_id}</td>
                            <td>{InterceptDataloadRule.type}</td>
                            <td>{InterceptDataloadRule.comment_val}</td>
                            <td>{InterceptDataloadRule.status}</td>
                            <td>{InterceptDataloadRule.re_id_elnot}</td>
                            <td>{InterceptDataloadRule.st_conf}</td>
                            <td>{InterceptDataloadRule.sp_conf}</td>
                            <td>{InterceptDataloadRule.ir_conf}</td>
                            <td>{InterceptDataloadRule.pd_conf}</td>
                            <td>{InterceptDataloadRule.mt_conf}</td>
                            <td>{InterceptDataloadRule.mt_conf_new_mt}</td>
                            <td>{InterceptDataloadRule.last_updated_by}</td>
                            <td>{InterceptDataloadRule.creator}</td>
                            <td>{InterceptDataloadRule.created_date}</td>
                            <td>{InterceptDataloadRule.last_edited}</td>
                            <td>{InterceptDataloadRule.heardcount}</td>
                            <td>{InterceptDataloadRule.heardcount_threshold}</td>
                            <td>
                                <ButtonGroup
                                    orientation="vertical">
                                    <EditInterceptDataloadRule InterceptDataloadRule={InterceptDataloadRule}/>
                                    <Button
                                        onClick={() => deleteInterceptDataloadRule(InterceptDataloadRule.intercept_dataload_rule_id)}
                                        startIcon={<DeleteIcon />}
                                        variant="contained"
                                        color="secondary">
                                        Delete
                                    </Button>
                                </ButtonGroup>                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListInterceptDataloadRule;