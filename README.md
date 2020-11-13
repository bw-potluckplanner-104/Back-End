# Potluck Planner - Back-End Docs

## Users

### Helper Methods

`getUsers()`: Returns an array of all users currently in the database.

`getUserById(id)`: Returns a user object.

`findBy(filter)`: Search for a user by their id, username, email, or password. Returns a user object.

`add(newUser)`: Adds a new user to the database, then returns an object containing the new user.

### Endpoints

| Action             | URL        | Method | Response       |
| :----------------- | :--------- | :----- | :------------- |
| View list of users | /users     | GET    | Array of users |
| View specific user | /users/:id | GET    | A user object  |

### **_ Auth _**

#### Endpoints

| Action             | URL     | Method | Response             |
| :----------------- | :------ | :----- | :------------------- |
| Adds a new user    | /signup | POST   | The newly added user |
| Authenticates user | /login  | POST   | Authenticated user   |

---

## Potlucks

### Helper Methods

`find()`: Returns an array of all potlucks currently in the database.

`getUserById(id)`: Returns a potluck object.

### Endpoints

| Action                | URL           | Method | Response          |
| :-------------------- | :------------ | :----- | :---------------- |
| View list of potlucks | /potlucks     | GET    | Array of potlucks |
| View specific potluck | /potlucks/:id | GET    | A potluck object  |

---

## Potluck Items

### Helper Methods

`find()`: Returns an array of all potluck items currently in the database.

`getUserById(id)`: Returns an item object.

### Endpoints

| Action                     | URL               | Method | Response               |
| :------------------------- | :---------------- | :----- | :--------------------- |
| View list of potluck items | /potluck-item/all | GET    | Array of potluck items |
| View specific potluck item | /potluck-item/:id | GET    | A potluck item object  |
