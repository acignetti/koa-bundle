import users from "../domain/users.js";
import havershine from "../helper/havershine.js"

const filterByEmail = (users, filter) => filter ? users.filter(user => user.email.toLowerCase().includes(filter.toLowerCase())) : users

const filterByPosition = (users, coordinates, radius = 10) => {
    if (!coordinates) return users;
    return users.filter(user => {
        const distance = havershine(coordinates[0], coordinates[1], user.address.geo.lat, user.address.geo.lng)
        if (distance <= radius) return user
    })
}

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
    filteredUsers = filterByPosition(filteredUsers, query.coordinate, query.radius)
    ctx.body = reduceToFields(filteredUsers, query.fields);
}