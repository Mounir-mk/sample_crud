# Sample CRUD done in a workshop @WildCodeSchool

It is a challenge realized at the wcs, whose goal is to create an api with a simple crud, on a database comprising a table user composed of two columns: email and password.

## INSTALL DEPENDENCIES, AND START THE PROJECT

-npm install (installing DEPENDENCIES)

-Put your db username and password in .env.sample file and rename it .env

-npm run migrate

-npm run dev (START THE PROJECT)

-Try the routes with something like Postman

## API Reference

#### Get all users

```http
  GET /api/users
```

#### Get one user

```http
  GET /api/users/${id}
```

#### Create one user

```http
  POST /api/users
```

#### Update one user

```http
  PUT /api/users/${id}
```

#### Delete one user

```http
  DELETE /api/users/${id}
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_USER`

`DB_PASSWORD`

`DB_NAME`
