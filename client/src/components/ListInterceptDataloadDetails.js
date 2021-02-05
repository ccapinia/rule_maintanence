import React, { Fragment, useEffect, useState } from "react";
//import EditInterceptDataloadDetails from "./EditInterceptDataloadDetails";

const ListInterceptDataloadDetails = ( {InterceptDataloadRule} ) => {

    const [InterceptDataloadDetails, setInterceptDataloadDetails] = useState([]);

    //delete rule

    const deleteInterceptDataloadDetails = async id => {
        try {
            const deleteInterceptDataloadDetails = await fetch(`http://localhost:5000/intercept_dataload_details/${id}`, {
                method: "DELETE"
            });

            console.log(deleteInterceptDataloadDetails);
            setInterceptDataloadDetails(InterceptDataloadDetails.filter(InterceptDataloadDetails => InterceptDataloadDetails.intercept_dataload_detail_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getInterceptDataloadDetails = async () => {
        try {
            const response = await fetch(`http://localhost:5000/intercept_dataload_details`);
            const jsonData = await response.json();

            setInterceptDataloadDetails(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getInterceptDataloadDetails();
    }, []);

    console.log(InterceptDataloadDetails);
    return (
        <Fragment>
            {" "}
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Intercept Dataload Detail ID</th>
                        <th>Rule ID</th>
                        <th>Intercept Field</th>
                        <th>Operation</th>
                        <th>Value 1</th>
                        <th>Value 2</th>
                        <th>Edit</th>
                        <th>Delete</th> 
                    </tr>
                </thead>
                <tbody>
                    {/* 
                        <EditInterceptDataloadDetails InterceptDataloadDetails={InterceptDataloadDetails}/>
                    */}
                    {InterceptDataloadDetails.map(InterceptDataloadDetails => (
                        <tr key={InterceptDataloadDetails.intercept_dataload_detail_id}>
                            <td>{InterceptDataloadDetails.intercept_dataload_detail_id}</td>
                            <td>{InterceptDataloadDetails.rule_id}</td>
                            <td>{InterceptDataloadDetails.intercept_field}</td>
                            <td>{InterceptDataloadDetails.operation}</td>
                            <td>{InterceptDataloadDetails.value}</td>
                            <td>{InterceptDataloadDetails.value2}</td>
                            <td>
                                
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteInterceptDataloadDetails(InterceptDataloadDetails.alert_users_userid)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListInterceptDataloadDetails;