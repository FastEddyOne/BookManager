# MERN Book Library App

This is a simple web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The app allows users to view a list of books and filter them by category. Users can also add new books to the library.

## Features

- View a list of books
- Filter books by category
- Add a new book with an image thumbnail

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
   ```https://github.com/FastEddyOne/BookManager.git```

2. Navigate to the project directory:
    ```cd BookManager```

3. Install the required dependencies:
    ```npm install```

4. Create a `.env` file in the root directory and add your MongoDB connection string:
    ```MONGODB_URI=your_mongodb_connection_string```


5. Start the backend server:
    ```cd server npm run dev```

6. In another terminal, navigate to the client directory and start the React app:
    ```cd client npm start```

The app should now be running on `http://localhost:3000`.

### API Endpoints

- `GET /api/books`: Retrieves a list of all books
- `GET /api/books?category=categoryName`: Retrieves books filtered by category
- `POST /api/books`: Adds a new book

## Screenshots

Coming soon

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
