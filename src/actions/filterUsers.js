import users from "../domain/users.js";

const filterByEmail = users => {
    return users
}

export default async ctx => {
    ctx.body = filterByEmail(users);
}