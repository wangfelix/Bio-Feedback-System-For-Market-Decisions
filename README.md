# Bio-Feedback-System-For-Market-Decisions

<br></br>

## Installation

- Prerequisites
    1. Git
    2. Node.js for using the Node package manager.
    3. Google Chrome or any other chromium browser, like Brave or Edge.

1. **Clone the project** to any directory by running 
    ```
    $ git clone git@github.com:wangfelix/Bio-Feedback-System-For-Market-Decisions.git
    ```

2. **Install Dependencies**

    1. In your terminal, navigate to the root direcotry of the frontend project `Bio-Feedback-System-For-Market-Decisions/Services/FrontendApplication` and run
        ```
        $ npm i
        ```
        to install the dependencies for the frontend project.
       > ⚠️ In case of an npm error regarding conflicting peer dependencies, install using the command `npm i --legacy-peer-deps`

    3. In your terminal, navigate to the directory `Bio-Feedback-System-For-Market-Decisions/Services/BackendApplication` and run
        ```
        $ npm i
        ```
        to install all backend dependencies.


3. **Starting the application**

    1. **Starting the Frontend Application**
       The frontend application can be started by executing following command inside the directory `Bio-Feedback-System-For-Market-Decisions/Services/FrontendApplication`:
       ```
        $ npm start
       ```
       This command starts the webpack dev server and serves the application on port 8080.
       If the port is already in use, you can specify a different port using the `--port` CLI option in the script section of `package.json`:

       ```
        "start": "webpack-dev-server --open --mode development --hot --port [your desired port]",
       ```

      2. **Starting the Backend Application**
       The backend application can be started by executing following command inside the directory `Bio-Feedback-System-For-Market-Decisions/Services/BackendApplication`:
       ```
        $ npm start
       ```
       This command starts nodemon and serves the application on port 5200.
       If the port is already in use, you can specify a different port inside `Bio-Feedback-System-For-Market-Decisions/Services/BackendApplication/index.ts`:

         ```
          14 const port: number = [your desired port];
         ```
    
    4. Access the application inside your browser by visiting `http://localhost:8080/`.
       > :warning: If you want to access the Admin Page, log in as the admin with the credentials **email**: "a" and **password** "a".
