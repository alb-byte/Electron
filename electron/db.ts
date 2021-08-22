const low = require("lowdb");
// import * as _ from "lodash";
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);
db.defaults({ links: [] }).write();

// db.chain = _.chain(db.data);
export default db;
