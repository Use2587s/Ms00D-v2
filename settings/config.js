require("dotenv").config();
module.exports = {
    TOKEN: process.env.TOKEN || "", 
    PREFIX: process.env.PREFIX || "", 
    OWNER_ID: process.env.OWNER_ID || "", 
    EMPTY_LEAVE: 60, 
    LEAVE_EMPTY: true, 
    LEAVE_FINISH: true, 
    LEAVE_STOP: true,
}
