# 💻 TypeScript API - Clean Architecture

<h1 align="center">
  <img 
  alt="clean-arch" 
  title="clean-arch" 
  src="https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg" 
  width="400px"
  height="300px"
  />
</h1>

This is a simple CRUD of users implemented in [TypeScript](https://www.typescriptlang.org/)
using the patterns of Architecture defined in the Clean Architecture.

## Project Structure

The application has a CA module for each main feature, so the
CRUD of users has its own CA module and each of those modules
are composed by three layers:

* Domain - Application logic
* Adapters - Adapters between external requests and the domain layer
* Data - Data sources, drivers, DBs...

## Implementations

The implementatios of data sources was did using [TypeORM](https://typeorm.io/) and [MongoDB](https://www.mongodb.com/),
so, because of CA, it's super easy to change what data source the server
will use.

## Tests

Alongside with the Clean Architecture was used TDD Outside-In, but as
this was a proof-of-concept project, not all layers are tested.

## General Concepts Used

* Clean Architecture
* Clean Code
* SOLID
* TDD
* BDD