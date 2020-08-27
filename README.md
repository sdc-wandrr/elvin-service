# HostileWorld Property Info Component

Contains a fullstack React module with components for displaying a hostel's description, a map of it's location, and the hostel's specific rules and policies.

## Related Projects

  - https://github.com/hrr47-karev/imageCarousel
  - https://github.com/hrr47-karev/Reviews-Service
  - https://github.com/hrr47-karev/AvailabilityComponent
  - https://github.com/hrr47-karev/property-info-proxy

## Table of Contents

1. [Requirements](#requirements)
2. [Development](#development)
3. [API](#api)


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node v12.18.1
  - https://nodejs.org/
- MySQL v5.7.31
  - https://dev.mysql.com/


## Development

Before you start, you have to chage the properties (host, user, database, password) of the object being passed to mysql.createConnection in server/database/database.js file.

To run the dev client:
- ```npm run build-dev```

To run the dev server:
- ```npm run start-dev```

To seed the database:
- ```npm run seed```

### Installing Dependencies

You must have access to the running instance of mysql server.

From within the root directory:

```
npm install
```

## API

All **GET, PUT, and DELETE** endpoints define the "id" (e.g. "/api/house/:id/hostel" -> "/api/house/100/hostel") parameter that references the respective record on which the operation is being performed.

All **POST and PUT** endpoints expect json formated payload that defines the values of the record to be created or updated, respectively.

All **GET, POST, and PUT** endpoints return json formated record that was requested, created, or updated, respectively.

Examples of the requests/responses can be found at [this gist](https://gist.github.com/miraclestyle/52dcb9c16745c944cef1d4d56b7bea6b).


### Hostel

The following are the endpoints for operating on the *hostel* table records:

- POST /api/house/hostel
- GET /api/house/:id/hostel
- PUT /api/house/:id/hostel
- DELETE /api/house/:id/hostel


### Description

The following are the endpoints for operating on the *description* table records:

- POST /api/house/description
- GET /api/house/:id/description
- PUT /api/house/:id/description
- DELETE /api/house/:id/description


### Address

The following are the endpoints for operating on the *address* table records:

- POST /api/house/address
- GET /api/house/:id/address
- PUT /api/house/:id/address
- DELETE /api/house/:id/address


### Rules

The following are the endpoints for operating on the *rules* table records:

- POST /api/house/rules
- GET /api/house/:id/rules
- PUT /api/house/:id/rules
- DELETE /api/house/:id/rules
