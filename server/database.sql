CREATE DATABASE work;

  --------------------------------------------------------
--  DDL for Table ALERT_GROUPS
--------------------------------------------------------

  CREATE TABLE ALERT_GROUPS 
   (	ALERT_GROUP_ID INTEGER, 
	ALERT_GROUP_NAME VARCHAR(20)
   );
--------------------------------------------------------
--  DDL for Table ALERT_GROUP_INTERCEPT_RULES
--------------------------------------------------------

  CREATE TABLE ALERT_GROUP_INTERCEPT_RULES 
   (	INTERCEPT_DATALOAD_RULE_ID INTEGER, 
	ALERT_GROUP_ID INTEGER
   ) ;
--------------------------------------------------------
--  DDL for Table ALERT_GROUP_MODEL_RULES
--------------------------------------------------------

  CREATE TABLE ALERT_GROUP_MODEL_RULES 
   (	MODEL_SCHEDULER_RULE_ID INTEGER, 
	ALERT_GROUP_ID INTEGER
   ) ;
--------------------------------------------------------
--  DDL for Table ALERT_GROUP_TEAM_USERS
--------------------------------------------------------

  CREATE TABLE ALERT_GROUP_TEAM_USERS 
   (	ALERT_GROUP_ID INTEGER, 
	TEAM_USERS_USERID VARCHAR(10)
   )  ;

--------------------------------------------------------
--  DDL for Table INTERCEPT_DATALOAD_DETAILS
--------------------------------------------------------

  CREATE TABLE INTERCEPT_DATALOAD_DETAILS 
   (	INTERCEPT_DATALOAD_DETAIL_ID INTEGER, 
	RULE_ID INTEGER, 
	INTERCEPT_FIELD VARCHAR(80), 
	OPERATION VARCHAR(12), 
	VALUE VARCHAR(500), 
	VALUE2 VARCHAR(500)
   );
--------------------------------------------------------
--  DDL for Table INTERCEPT_DATALOAD_RULES
--------------------------------------------------------

  CREATE TABLE INTERCEPT_DATALOAD_RULES 
   (	INTERCEPT_DATALOAD_RULE_ID INTEGER, 
	TYPE INTEGER, 
	COMMENT_VAL VARCHAR(500), 
	STATUS INTEGER, 
	RE_ID_ELNOT VARCHAR(10), 
	ST_CONF INTEGER, 
	SP_CONF INTEGER, 
	IR_CONF INTEGER, 
	PD_CONF INTEGER, 
	MT_CONF INTEGER, 
	MT_CONF_NEW_MT VARCHAR(5), 
	LAST_UPDATED_BY VARCHAR(32), 
	CREATOR VARCHAR(32), 
	CREATED_DATE TIMESTAMP, 
	LAST_EDITED TIMESTAMP, 
	EMAIL_LIST VARCHAR(2000), 
	OPS_PAGE VARCHAR(6), 
	BBS VARCHAR(6), 
	HEARDCOUNT INTEGER DEFAULT 0, 
	HEARDCOUNT_THRESHOLD INTEGER DEFAULT 1
   ) ;
--------------------------------------------------------
--  DDL for Table RULE_ACTIONS
--------------------------------------------------------

  CREATE TABLE RULE_ACTIONS 
   (	RULE_ACTION_ID INTEGER, 
	INTERCEPT_ID INTEGER, 
	WRANGLER_ID VARCHAR(32), 
	RULE_TYPE VARCHAR(32), 
	RULE_NUMBER INTEGER, 
	ACTION VARCHAR(32), 
	ACTION_DATE TIMESTAMP
   );
--------------------------------------------------------
--  DDL for Table RULE_STATUS_LK
--------------------------------------------------------

  CREATE TABLE RULE_STATUS_LK 
   (	ID INTEGER, 
	NAME VARCHAR(15)
   ) ;
--------------------------------------------------------
--  DDL for Table RULE_TYPE_LK
--------------------------------------------------------

  CREATE TABLE RULE_TYPE_LK 
   (	ID INTEGER, 
	NAME VARCHAR(15)
   );


--------------------------------------------------------
--  DDL for Table TEAM_USERS
--------------------------------------------------------

  CREATE TABLE TEAM_USERS 
   (	USERID VARCHAR(10), 
	RANK VARCHAR(10), 
	NAME VARCHAR(50), 
	TEAM VARCHAR(3), 
	STATUS VARCHAR(1), 
	EMAIL_ADDRESS VARCHAR(50)
   );

