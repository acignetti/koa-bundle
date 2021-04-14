# KOA Application

This repo contains the needed code to run a small webserver that listens on
`127.0.0.1:3000` and responds to requests to a single endpoint:

- `/users`

Such endpoint accepts 4 optional query parameters to filter the results:

- `emailContains` (String): filters out any users who's email do not contain the value (NOT case sensitive)
- `coordinate` (Array longitude,latitude): filters our users who's address is outside of the provided radius or 10km if no radius is provided.
- `radius` (Number): if coordinate is provided it uses this value for the radius in kilometers (default 10)
- `fields` (Array): the user properties to return in the response. If empty, return all properties

## Running the server

In order to run the server locally, just:

```
npm i
npm run dev
```

## Gotchas

When manually testing the application, it was found that in order for koa to
properly parse an array, the query needs to duplicate the name of the param,
so in order for the following example request to work:

```
curl -X PUT \
  http://localhost:3000/users?emailContains=gmail&coordinate=-71.42,71.75 \
  -H 'Content-Type: application/json' \
  -H 'X-Bundle-Access-Token: token'
```

it instead needs to be:

```
curl -X PUT \
  http://localhost:3000/users?emailContains=gmail&coordinate=-71.42&coordinate=71.75 \
  -H 'Content-Type: application/json' \
  -H 'X-Bundle-Access-Token: token'
```

Note the double `coordinate` query param

## Decisions and assumptions

One of the main decisions that affect how the app works is the way that urls
are mapped to actions, this is because of the way the architecture of the
app was thought to be, i.e., the handlers for an endpoint should be independent
of where they are mapped, that allows a functionality to be reused or moved
to a different location without actually needing to change much of the code.

Ideally, these `actions` should also be free of the `ctx` object, so that
the framework that was used as the API layer didn't pollute the app, which
allows for it to be changed later on if needed. In this implementation and
for simplicity, it was passed on to the `actions`.

Another decision was that the verbs for the API were not taken into
consideration, so a POST has the same effect as a GET, PUT, and so on. That
was an intentional omission in order to not overengineer the router.

Lastly, the `domain/users` folder should be were the DB connection exist to
easily mock out that during tests. That implementation would probably give
the opportunity to move some of the filters that exist on the `filterUsers`
action to the repository manager.
