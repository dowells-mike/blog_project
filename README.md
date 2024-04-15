# Blog Project

This is a comprehensive blog application built with Node.js, Express, and MongoDB. The application is designed to provide a platform for users to share their thoughts and ideas in the form of blog posts.

## Features

- **User Registration and Authentication:** Users can register for an account and log in. User authentication is handled securely with hashed passwords.

- **Blog Post Management:** Registered users can create new blog posts, and update or delete their own posts. Each blog post includes a title and content.

- **Admin Privileges:** Admin users have the ability to manage all blog posts, including the ability to update and delete any post.

- **Search Functionality:** Users can search for blog posts using keywords. The search results will include all posts that contain the keywords in the title or content.

## Local Development

Before you begin, ensure you have Node.js and MongoDB installed on your machine.

1. Clone this repository and navigate into the directory in your terminal.
2. Run `npm install` to install all necessary dependencies for the project.
3. Create a `.env` file in the root of your project. Add your MongoDB connection string as an environment variable:

    ```
    MONGODB_URI=your-mongodb-connection-string
    ```

4. Run `npm start` to start the application. You should be able to access it at `http://localhost:3000`.

## Deployment

This application is ready to be deployed on Heroku with a few setup steps:

1. Create a new Heroku app.
2. Set the `MONGODB_URI` config var to your MongoDB connection string.
3. Push your code to the Heroku remote.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
