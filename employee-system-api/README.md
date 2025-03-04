# Employee Management System - Backend

## Overview

This is the backend of the Employee Management System, built with **Spring Boot**, **MySQL**, and **Spring JPA**. It provides RESTful APIs for managing employee data.

## Setup

1. Clone the repository.
2. Navigate to the `api` folder.
3. Configure the `application.properties` file with your MySQL credentials.
4. Run the application using your IDE or `mvn spring-boot:run`.
5. Access the application at `http://localhost:8080`.

## API Documentation

- **GET /employees**: Fetch all employees
- **POST /employees**: Add a new employee
- **PUT /employees/{id}**: Update an employee
- **DELETE /employees/{id}**: Delete an employee

## Tech Stack

- **Spring Boot**: Backend framework
- **MySQL**: Database
- **Spring JPA**: ORM

## Database Configuration

Configure the `application.properties` file with the following MySQL database details:

```properties
spring.application.name=employee-system-api
server.port=8082
spring.datasource.url=jdbc:mysql://localhost:3306/employee_schema
spring.jpa.hibernate.ddl-auto=update
spring.datasource.username=****
spring.datasource.password=*****
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.show-sql=true
```
