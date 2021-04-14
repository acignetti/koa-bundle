import users from "../domain/users.js";

const filterByEmail = (users, filter) => filter ? users.filter(user => user.email.toLowerCase().includes(filter.toLowerCase())) : users

const reduceToFields = (users, fields) => {
    if (!fields) return users;

    return users.map(user => {
        let newUser = {}
        fields.forEach(element => newUser[element] = user[element]);
        return newUser
    })
}

export default async ctx => {
    const query = ctx.query;
    let filteredUsers = filterByEmail(users, query.emailContains);
    ctx.body = reduceToFields(filteredUsers, query.fields);
}