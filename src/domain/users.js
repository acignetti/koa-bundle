import fs from "fs";

const DB_SOURCE = "./src/domain/USERS.json";

const users = JSON.parse(fs.readFileSync(DB_SOURCE, "utf8"));

export default users;
