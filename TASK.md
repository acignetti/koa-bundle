## **KOA Application:**
 - Build a [KOA](https://koajs.com/) application that can run locally and has a single endpoint,
`/users`, that will return a json array of users from our fake database. 
 - Consider the `USERS.json` file in this gist to be our fake DB (you can just copy/paste it into a constant in your application)
 - The `/users` endpoint should accept 4 optional filter parameters:
   - emailContains (String): filters out any users who's email do not contain the value (NOT case sensitive)
   - coordinate (Array longitude,latitude): filters our users who's address is outside of the provided radius
     or 10km if no radius is provided.
   - radius (Number): if coordinate is provided it uses this value for the radius in kilometers (default 10)
   - fields (Array): the user properties to return in the response. If empty, return all properties
- The `/users` endpoint should return an empty array if no users meet the filter
- A request to any other endpoint should return a 404
- Add a fake auth check that checks the header `X-Bundle-Access-Token`. The only valid token will be `token`.
  any other value should result in an appropriate error response.
- Do take your time and try to build something that is "production ready" and not just quickly thrown together work. Think about scalability/reusability/qa/etc. If there's something that you just dont have time to build out but want to mention, add it via psuedo code or commemts
  
**example request:**
```
curl -X PUT \
  http://localhost:3000/users?emailContains=gmail&coordinate=-71.42,71.75 \
  -H 'Content-Type: application/json' \
  -H 'X-Bundle-Access-Token: token' \
```

## **Submitting:**
- Push your code to a public gh repo
- Send a link to the repo to xxxxx@xxxxxxxxxx.xx
- I will review the code and reply with any questions
- I will also try to pull and run it locally. Please make sure that's relatively easy for me
