import users from "../domain/users.js";

const filterByEmail = (users, filter) => filter ? users.filter(user => user.email.toLowerCase().includes(filter.toLowerCase())) : users

export default async ctx => {
    const query = ctx.query;
    let response = filterByEmail(users, query.emailContains);
    ctx.body = response;
}