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
