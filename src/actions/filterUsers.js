import users from "../domain/users.js";
import havershine from "../helper/havershine.js";

const filterByEmail = (users, filter) =>
  filter
    ? users.filter((user) =>
        user.email.toLowerCase().includes(filter.toLowerCase())
      )
    : users;

const filterByPosition = (users, coordinates, radius = 10) =>
  coordinates
    ? users.filter(
        (user) =>
          havershine(
            coordinates[0],
            coordinates[1],
            user.address.geo.lat,
            user.address.geo.lng
          ) <= radius
      )
    : users;

const reduceToFields = (users, fields) =>
  fields
    ? users.map((user) =>
        fields.reduce((result, key) => ({ ...result, [key]: user[key] }), {})
      )
    : users;

export default async (ctx) => {
  const query = ctx.query;
  let filteredUsers = filterByEmail(users, query.emailContains);
  filteredUsers = filterByPosition(
    filteredUsers,
    query.coordinate,
    query.radius
  );
  ctx.body = reduceToFields(filteredUsers, query.fields);
};
