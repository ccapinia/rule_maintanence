import React, { Fragment, useState } from "react";

const EditAlertGroupTeamUsers = ({ AlertGroupTeamUsers }) => {
  const [groupID, setgroupID] = useState([AlertGroupTeamUsers.alert_group_id]);

  //edit user function
  const updateAlertGroupTeamUsers = async (e) => {
    e.preventDefault();
    try {
      const body = { groupID };
      const response = await fetch(`http://localhost:5000/alert_group_team_users/${AlertGroupTeamUsers.alert_group_id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${AlertGroupTeamUsers.groupID}`}
      >
      Edit
    </button>
      <div className="modal" id={`id${AlertGroupTeamUsers.groupID}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Edit Alert Group Team Users</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setgroupID(AlertGroupTeamUsers.groupID)}
              >&times;
              </button>
            </div>
            
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={groupID}
                onChange={e => setgroupID(e.target.value)}
              />
            </div>
            
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateAlertGroupTeamUsers(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setgroupID(AlertGroupTeamUsers.groupID)}
              >
                Close
              </button>
          </div>
        </div>
      </div>
    </div></Fragment>);
};

export default EditAlertGroupTeamUsers;