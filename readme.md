# React Prøductïv App in TypeScript

[Live Demo (Netlify)](https://productiv-zhl.netlify.app)

Project: Frontend React application in TypeScript for users to create, update, and delete a todo list with prioritzed items. App can also display inspirational quotes when user requests it.

## Available Scripts

### Docker (optional):
To spin up containerized application, run this in the project directory.
Open [http://localhost:3000](http://localhost:3003) to view it in browser:

    docker build -t react-productiv . && docker run -d --name productiv-app -p 3000:3000 react-productiv

### In the project directory, you can:

Install required dependencies from package.json:

    npm install

Run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in browser:

    npm start

Launch the test runner with interactive watch mode:

    npm test
