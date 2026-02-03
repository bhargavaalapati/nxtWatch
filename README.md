# NxtWatch - A Video Streaming Platform Clone

NxtWatch is a dynamic and responsive video streaming application, developed as a single-page application (SPA) using React. It is designed to emulate the core functionalities of modern video platforms like YouTube, featuring user authentication, categorized video browsing, a detailed video player, and personalized features like saving videos and theme switching.

This project demonstrates a comprehensive understanding of modern frontend development, including routing, state management, API integration, and creating a seamless user experience.

## Acknowledgements

This project was built as part of the curriculum for the **NxtWave CCBP 4.0 program**. I would like to express my gratitude to the NxtWave team for providing the detailed project requirements, the necessary APIs, and the valuable hands-on learning experience that made this project possible.

-----

## Key Features

  - **Authentication**: Secure login/logout functionality using JWT tokens, with client-side session management via cookies.
  - **Protected Routes**: Certain routes are only accessible to authenticated users, redirecting to the login page if accessed otherwise.
  - **Dynamic Theming**: Users can toggle between a **Light** and **Dark** theme, with all components adapting accordingly. This is managed globally using React Context.
  - **Content Discovery**:
      - **Home Page**: Displays a list of all videos, with a banner and a search functionality to filter results.
      - **Trending Page**: Fetches and displays a curated list of trending videos.
      - **Gaming Page**: Fetches and displays a curated list of gaming-related videos.
  - **Video Player**:
      - A dedicated route for watching a selected video, using `react-player`.
      - Displays detailed information like title, view count, publication date, and channel details.
  - **User Interaction**:
      - Ability to **Like**, **Dislike**, and **Save/Un-save** videos.
      - The saved videos are managed globally via React Context.
  - **Saved Videos Page**: A personalized page that displays all the videos a user has saved.
  - **API Handling**: Asynchronous API calls to fetch data, with elegant handling of loading and failure states using loaders and dedicated failure-view components.
  - **Responsive Design**: The user interface is fully responsive and optimized for various screen sizes, from mobile to desktop.
  - **Not Found Page**: A custom 404 page for handling invalid URL paths.

-----

## Technologies Used

  - **Core Framework**: React.js
  - **Styling**: Styled-Components (CSS-in-JS)
  - **Routing**: React Router DOM
  - **State Management**: React Context API
  - **API Communication**: Browser Fetch API
  - **Authentication**: JWT (JSON Web Tokens), `js-cookie` for cookie management
  - **Libraries & Packages**:
      - `react-player`: For embedding the video player.
      - `react-loader-spinner`: For displaying loading indicators.
      - `react-icons`: For scalable vector icons.
      - `date-fns`: For formatting video publication dates (e.g., "2 years ago").
      - `reactjs-popup`: For the logout confirmation modal.

-----

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/nxtwatch-clone.git
    cd nxtwatch-clone
    ```

2.  **Install dependencies:**
    This project uses `npm` as the package manager. Run the following command in the project's root directory.

    ```bash
    npm install
    ```

3.  **Start the development server:**
    This will launch the application in your default browser, usually at `http://localhost:3000`.

    ```bash
    npm start
    ```

4.  **Login Credentials:**
    Use the following credentials to log in to the application:

      - **Username:** `rahul`
      - **Password:** `rahul@2021`

-----

## API Endpoints Used

The application fetches data from the following external API endpoints:

  - **Login**: `POST https://apis.ccbp.in/login`
  - **Home Videos**: `GET https://apis.ccbp.in/videos/all?search=<query>`
  - **Trending Videos**: `GET https://apis.ccbp.in/videos/trending`
  - **Gaming Videos**: `GET https://apis.ccbp.in/videos/gaming`
  - **Video Details**: `GET https://apis.ccbp.in/videos/:id`

-----
