const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//#region routes intercept_dataload_rules
//create row intercept_dataload_rules
app.post("/intercept_dataload_rules", async (req, res) => {
  try {
    const { intercept_dataload_rule_id, type, comment_val, status, re_id_elnot, st_conf, sp_conf, ir_conf,
      pd_conf, mt_conf, mt_conf_new_mt, last_updated_by, creator, created_date, last_edited, email_list, ops_page,
      bbs, headcount, headcount_threshold } = req.body;
    const newInterceptDataloadRule = await pool.query(
      "INSERT INTO intercept_dataload_rules " +
      "(intercept_dataload_rule_id, type, comment_val, status, re_id_elnot, st_conf, sp_conf, ir_conf, pd_conf, mt_conf, " +
      "mt_conf_new_mt, last_updated_by, creator, created_date, last_edited, email_list, ops_page, bbs, headcount, headcount_threshold) " +
      "VALUES($1, $2, $3, $4, $5, $6) RETURNING * ",
        [intercept_dataload_rule_id, type, comment_val, status, re_id_elnot, st_conf, sp_conf, ir_conf,
          pd_conf, mt_conf, mt_conf_new_mt, last_updated_by, creator, created_date, last_edited, email_list, ops_page,
          bbs, headcount, headcount_threshold]
    );

    res.json(newInterceptDataloadRule.rows[0]);        
  } catch (err) {
    console.error(err.message);
  }
})
//update row intercept_dataload_rules
app.put("/intercept_dataload_rules/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const { type, comment_val, status, re_id_elnot, st_conf, sp_conf, ir_conf,
        pd_conf, mt_conf, mt_conf_new_mt, last_updated_by, creator, created_date, last_edited, email_list, ops_page,
        bbs, headcount, headcount_threshold } = req.body;
      const updateInterceptDataloadRule = await pool.query(
        "UPDATE intercept_dataload_rules SET type = $1, comment_val = $2, status = $3, re_id_elnot = $4, st_conf = $5, sp_conf = $6, ir_conf = $7,"
        + " pd_conf = $8, mt_conf = $9, mt_conf_new_mt = $10, last_updated_by = $11, creator = $12, created_date = $13, last_edited = $14, "
        + "email_list = $15, ops_page = $16, bbs = $17, headcount = $18, headcount_threshold = $19 WHERE intercept_dataload_rule_id = $20",
        [type, comment_val, status, re_id_elnot, st_conf, sp_conf, ir_conf,
          pd_conf, mt_conf, mt_conf_new_mt, last_updated_by, creator, created_date, last_edited, email_list, ops_page,
          bbs, headcount, headcount_threshold, id]
      );

    res.json("row updated");
  } catch (err) {
    console.error(err.message);
  }

})
//get all intercept_dataload_rules
app.get("/intercept_dataload_rules", async (req, res) => {
  try {
    const allInterceptDataloadRule = await pool.query("SELECT * FROM intercept_dataload_rules");
    res.json(allInterceptDataloadRule.rows);
  } catch (err) {
    console.error(err.message);
  }
})
//get one row intercept_dataload_rules
app.get("/intercept_dataload_rules/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const work = await pool.query("SELECT * FROM intercept_dataload_rules WHERE intercept_dataload_rule_id = $1", [id]);
    } catch (err) {
        console.error(err.message);
      }
})
//delete a row intercept_dataload_rules
app.delete("/intercept_dataload_rules/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteInterceptDataloadRule = await pool.query("DELETE FROM intercept_dataload_rules where intercept_dataload_rule_id = $1",
        [id]
      );
      res.json("deleted row");
    } catch (err) {
      console.log(err.message);
    }
})
//#endregion

//#region routes intercept_dataload_details
//create row intercept_dataload_details
app.post("/intercept_dataload_details", async (req, res) => {
  try {
    const { intercept_dataload_detail_id, rule_id, intercept_field, operation, value, value2} = req.body;
    const newInterceptDataloadDetail = await pool.query(
      "INSERT INTO intercept_dataload_details " +
      "(intercept_dataload_detail_id, rule_id, intercept_field, operation, value, value2) RETURNING * ",
        [intercept_dataload_detail_id,  rule_id, intercept_field, operation, value, value2]
    );

    res.json(newInterceptDataloadDetail.rows[0]);        
  } catch (err) {
    console.error(err.message);
  }
})
//update row intercept_dataload_details
app.put("/intercept_dataload_details/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const { rule_id, intercept_field, operation, value, value2 } = req.body;
      const updateInterceptDataloadDetail = await pool.query(
        "UPDATE intercept_dataload_details SET rule_id = $1, intercept_field = $2, operation = $3, value = $4, value2 = $5" +
        " WHERE intercept_dataload_rule_id = $6",
        [rule_id, intercept_field, operation, value, value2, id]
      );

    res.json("row updated");
  } catch (err) {
    console.error(err.message);
  }

})
//get all intercept_dataload_details
app.get("/intercept_dataload_details", async (req, res) => {
  try {
    const allInterceptDataloadDetail = await pool.query("SELECT * FROM intercept_dataload_details");
    res.json(allInterceptDataloadDetail.rows);
  } catch (err) {
    console.error(err.message);
  }
})
//get one row intercept_dataload_details
app.get("/intercept_dataload_details/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const rowInterceptDataloadDetail = await pool.query("SELECT * FROM intercept_dataload_details WHERE rule_id = $1", [id]);
      res.json(rowInterceptDataloadDetail.rows);
  } catch (err) {
      console.error(err.message);
    }
})
//delete a row intercept_dataload_details
app.delete("/intercept_dataload_details/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteInterceptDataloadDetails = await pool.query("DELETE FROM intercept_dataload_details where intercept_dataload_detail_id = $1",
      [id]
    );
    res.json("deleted row");
  } catch (err) {
    console.log(err.message);
  }
})
//#endregion

//#region routes alert_group_team_users
//create row alert_group_team_users
app.post("/alert_group_team_users", async (req, res) => {
  try {
    const { alert_group_id, team_users_userid} = req.body;
    const newAlertGroupTeamUsers = await pool.query(
      "INSERT INTO alert_group_team_users " +
      "(alert_group_id, team_users_userid) RETURNING * ",
        [alert_group_id,  team_users_userid]
    );

    res.json(newAlertGroupTeamUsers.rows[0]);        
  } catch (err) {
    console.error(err.message);
  }
})
//update row alert_group_team_users
app.put("/alert_group_team_users/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const { alert_group_id, team_users_userid} = req.body;
      const updateAlertGroupTeamUsers = await pool.query(
        "UPDATE alert_group_team_users SET alert_group_id = $1" +
        " WHERE alert_group_id = $2",
        [alert_group_id, id]
      );

    res.json("row updated");
  } catch (err) {
    console.error(err.message);
  }

})
//get all alert_group_team_users
app.get("/alert_group_team_users", async (req, res) => {
  try {
    const allAlertGroupTeamUsers = await pool.query("SELECT * FROM alert_group_team_users");
    res.json(allAlertGroupTeamUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
})
//get one row alert_group_team_users
app.get("/alert_group_team_users/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const work = await pool.query("SELECT * FROM alert_group_team_users WHERE alert_group_id = $1", [id]);
  } catch (err) {
      console.error(err.message);
    }
})
//delete a row alert_group_team_users
app.delete("/alert_group_team_users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAlertGroupTeamUsers = await pool.query("DELETE FROM AlertGroupTeamUsers where team_users_userid = $1",
      [id]
    );
    res.json("deleted row");
  } catch (err) {
    console.log(err.message);
  }
})
//#endregion

//#region routes RuleAction
//create row RuleAction

//create rule
app.post("/rule_actions", async (req, res) => {
  try {
    const { intercept_id, wrangler_id, rule_type, rule_number, action, action_date } = req.body;
    const newRuleAction = await pool.query(
      "INSERT INTO rule_actions (intercept_id, wrangler_id, rule_type, rule_number, action, action_date) VALUES($1, $2, $3, $4, $5, $6) RETURNING * ",
        [intercept_id, wrangler_id, rule_type, rule_number, action, action_date]
    );
    res.json(newRuleAction.rows[0]);        
  } catch (err) {
    console.error(err.message);
  }
})

//update a row
app.put("/rule_actions/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const { intercept_id } = req.body;
    const updateRuleAction = await pool.query("UPDATE rule_actions SET intercept_id = $1 WHERE rule_action_id = $2",
      [intercept_id, id]
    );

    res.json("row updated");
  } catch (err) {
    console.error(err.message);
  }

})

//get all rows
app.get("/rule_actions", async (req, res) => {
  try {
    const allRuleActions = await pool.query("SELECT * FROM RULE_ACTIONS");
    res.json(allRuleActions.rows);
  } catch (err) {
    console.error(err.message);
  }
})

//get one row
app.get("/rule_actions/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const work = await pool.query("SELECT * FROM rule_actions WHERE rule_action_id = $1", [id]);
  } catch (err) {
      console.error(err.message);
    }
})

//delete a row
app.delete("/rule_actions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteRuleActions = await pool.query("DELETE FROM rule_actions where rule_action_id = $1",
      [id]
    );

    res.json("deleted row");
  } catch (err) {
    console.log(err.message);
  }
})
//#endregion

//port
app.listen(5000, () => {
    console.log("server has started on port 5000");
});