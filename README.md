# CodeClip Frontend

CodeClip is a modern code snippet management application designed to streamline the process of saving, organizing, and sharing code snippets. This repository contains the frontend codebase of the application, built using the MERN stack with a focus on performance, scalability, and user experience.

## Features

- **User Authentication:** Secure login and registration system.
- **Snippet Management:** Create, edit, delete, and organize snippets with categories and tags.
- **Search & Filter:** Quickly find snippets using advanced search and filtering options.
- **Code Editor Integration:** Built-in code editor for previewing and editing snippets.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Tech Stack

- **React**: For building the user interface.
- **Tailwind CSS**: For styling the components and layouts.
- **Redux Toolkit**: For managing the application state.
- **Axios**: For making API requests.
- **React Router**: For navigation between pages.

## Folder Structure

```plaintext
├── src
│   ├── assets         # Static assets (images, icons, etc.)
│   ├── components     # Reusable UI components
│   ├── hooks          # Custom React hooks
│   ├── pages          # Application pages (e.g., Home, Dashboard, etc.)
│   ├── store          # Redux store configuration
│   ├── App.js         # Main application component
│   └── index.js       # Entry point of the application
```

## Getting Started

Follow the steps below to set up the project on your local machine.

### Prerequisites

- Node.js (v18 or above)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/codeclip-frontend.git
   cd codeclip-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

Update `REACT_APP_API_BASE_URL` with the backend server URL if different.

## Contributing

We welcome contributions to improve CodeClip! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact dhirajarya.ptn@gmail.com.
