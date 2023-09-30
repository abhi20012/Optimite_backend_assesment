# Task Manager App

Task Manager App is a web-based application that allows users to manage their tasks efficiently.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Overview

Task Manager App simplifies task management by providing a user-friendly interface to create, update, and delete tasks. It's a practical tool for personal and professional task organization.

## Features

- Create and store tasks with titles, descriptions, due dates, and status.
- Mark tasks as "In Progress" or "Completed."
- Edit task details and due dates.
- Delete tasks that are no longer needed.

## Getting Started

### Prerequisites

Before you get started with the Task Manager App, ensure you have the following prerequisites in place:

- [Node.js](https://nodejs.org/): Install Node.js to run the application.
- [MongoDB](https://www.mongodb.com/): Set up a MongoDB database for storing tasks.

### Installation

1. Clone the Task Manager App repository:

```bash
git clone https://github.com/abhi20012/Optimite_backend_assesment.git.git
cd task-manager-app
```

 ### Folder Structure
```
Employee Review System
    |
    |               |--->css
    |--->assets---->|--->images
    |               |---> Js
    |
    |               |--->middleware.js
    |--->config---->|--->mongoose.js
    |               |--->mongoose.js
    |               |--->passport-github-oauth2-strategy.js
    |               |--->passport-google-oauth2-strategy.js
    |               |--->passport-jwt-strategy.js
    |               |--->passport-local-strategy.js
    |
    |                  |-->api--->v1--->|usersApi.js
    |                  |
    |--->controllers-->|-->home_controller.js
    |                  |-->task_controller.js
    |                  |-->user_controller.js
    |
    |               |-->task.js
    |--->models---->|
    |               |-->user.js
    |
    |                                
    |               |--->api--->v1--->|--->index.js
    |               |--->index.js     |--->users.js
    |--->routes---->|-->index.js
    |               |-->task.js
    |               |-->user.js
    |
    |              |--->_header.ejs
    |              |--->_footer.ejs
    |              |---> dashboard.ejs
    |              |---> editPage.ejs
    |              |---> home.ejs
    |--->views---->|--->layout.ejs
    |              |--->login.ejs
    |              |--->signup.ejs
    |              
    |              
    |
    |-->node_modules
    |-->.gitignore
    |--> index.js
    |--> package-lock.json
    |-->package.json
    
```