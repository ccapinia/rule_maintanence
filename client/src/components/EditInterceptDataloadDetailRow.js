import React, { Fragment, useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

const EditInterceptDataloadDetailRow = ({ InterceptDataloadDetails }) => {
  const [InterceptDataloadDetailsRow, setInterceptDataloadDetailsRow] = useState([InterceptDataloadDetails.intercept_dataload_detail_id]);

  const getInterceptDataloadDetailsRow = async () => {
    try {
      const response = await fetch(`http://localhost:5000/intercept_dataload_details/${InterceptDataloadDetails.intercept_dataload_detail_id}`);
      const jsonData = await response.json();

      setInterceptDataloadDetailsRow(jsonData);
    } catch (err) {
        console.error(err.message);
    }
  };

  useEffect(() => {
    getInterceptDataloadDetailsRow();
  }, []);

  console.log(InterceptDataloadDetailsRow);
  return (
    <Fragment>
      <Button
        data-toggle="modal"
        data-target={`#id${InterceptDataloadDetails.intercept_dataload_detail_id}`}
        startIcon={<EditIcon />}
        variant="contained"
        color="primary"
      >
      Edit
    </Button>
      <div className="modal" id={`id${InterceptDataloadDetails.intercept_dataload_detail_id}`}>
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
              
            </div>
            <div className="modal-footer">
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
    </div></Fragment>);
};

export default EditInterceptDataloadDetailRow;