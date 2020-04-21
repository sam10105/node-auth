# node-auth

Authentication boilerplate in Node.js with security and scalability in mind.

## Features

- [x] login/logout/register + session expiry
- [ ] email verification (`"Confirm your email"`)
- [ ] password reset (`"Forgot password"`)
- [ ] password confirmation (`"Re-enter your password"`)
- [ ] persistent login (`"Remember me"`)
- [ ] account lockout (`"Too many failed login attempts"`)
- [ ] rate limiting (`"Too many requests"`)

## Prerequisites

- `node` and `yarn`
- `docker` and `docker-compose`
  - could also use a local `mongodb-org` and `redis-server`
  - otherwise, a remote service e.g. Atlas/mLab and Redis Labs

## Setup

```sh
# Boot Node, MongoDB & Redis containers
yarn up
```

## API

| Method    | URI       | Middleware |
| :-------- | :-------- | :--------- |
| POST      | /register | guest      |
| POST      | /login    | guest      |
| POST      | /logout   | auth       |
| GET\|HEAD | /home     | auth       |

## Schema

```ts
interface User {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  verifiedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
```
