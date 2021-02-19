import React, { Fragment, useEffect, useState } from "react";
import EditInterceptDataloadDetailRow from "./EditInterceptDataloadDetailRow";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const EditInterceptDataloadDetails = ({ InterceptDataloadRule }) => {
  const [InterceptDataloadDetails, setInterceptDataloadDetails] = useState([InterceptDataloadRule.intercept_dataload_rule_id]);

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
      const response = await fetch(`http://localhost:5000/intercept_dataload_details/${InterceptDataloadRule.intercept_dataload_rule_id}`);
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
      <Button
        data-toggle="modal"
        data-target={`#id${InterceptDataloadRule.intercept_dataload_rule_id}`}
        startIcon={<EditIcon />}
        variant="contained"
        color="primary"
      >
      Edit
    </Button>
      <div className="modal" id={`id${InterceptDataloadRule.intercept_dataload_rule_id}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title">Edit Intercept Dataload Details</h1>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
              >&times;
              </button>
            </div>

            <div className="modal-body">
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Intercept Dataload Detail ID</th>
                        <th>Rule ID</th>
                        <th>Intercept Field</th>
                        <th>Operation</th>
                        <th>Value 1</th>
                        <th>Value 2</th>
                        <th>Functions</th> 
                    </tr>
                </thead>
                <tbody>
                    {/* 
                      <button className="btn btn-danger" onClick={() => deleteInterceptDataloadDetails(InterceptDataloadDetails.intercept_dataload_detail_id)}>Delete</button>
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
                            <EditInterceptDataloadDetailRow InterceptDataloadDetails={InterceptDataloadDetails}/>
                            <Button
                                onClick={() => deleteInterceptDataloadDetails(InterceptDataloadDetails.intercept_dataload_detail_id)}
                                startIcon={<DeleteIcon />}
                                variant="contained"
                                color="secondary">
                                Delete
                              </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
              </table>
              
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
              >
                Save All
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
          </div>
        </div>
      </div>
     </div>
    </Fragment>);
};

export default EditInterceptDataloadDetails;