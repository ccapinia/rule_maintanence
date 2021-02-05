import React, { Fragment, useState } from "react";

const EditRuleActions = ({ ruleActions }) => {
  const [intercept_id, setIntercept_id] = useState(ruleActions.intercept_id);

  //edit intercept function
  const updateInterceptID = async (e) => {
    e.preventDefault();
    try {
      const body = { intercept_id };
      const response = await fetch(`http://localhost:5000/rule_actions/${ruleActions.rule_action_id}`,
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
        data-target={`#id${ruleActions.intercept_id}`}
      >
      Edit
    </button>
      <div className="modal" id={`id${ruleActions.intercept_id}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Edit RuleActions</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setIntercept_id(ruleActions.intercept_id)}
              >&times;
              </button>
            </div>
            
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={intercept_id}
                onChange={e => setIntercept_id(e.target.value)}
              />
            </div>
            
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateInterceptID(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setIntercept_id(ruleActions.intercept_id)}
              >
                Close
              </button>
          </div>
        </div>
      </div>
    </div></Fragment>);
};

export default EditRuleActions;