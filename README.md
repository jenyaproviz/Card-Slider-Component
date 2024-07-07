# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

Card Slider App - README
Overview
The Card Slider App is a React-based application that showcases a 3D card carousel. The application is designed to display various user cards with different payment systems and roles, and includes interactive navigation buttons for sliding through the cards. The project structure is organized to ensure modularity, maintainability, and ease of testing.

Project Structure
Components
Button.tsx

Description: A reusable button component for navigation within the card slider.
Props:
onClick: Function to handle button clicks.
direction: Direction of the button, either "left" or "right".
Dependencies: FontAwesomeIcon from @fortawesome/react-fontawesome for the arrow icons.
Usage: This component is used to create navigation buttons on either side of the card slider.
Card.tsx

Description: A card component that displays user information and payment system details.
Props:
PaymentSystem: Type of payment system ("Visa" or "MasterCard").
FirstName, LastName: User's first and last names.
CardNumber: User's card number.
Role, Status: User's role and status.
Logo: URL to the user's logo image.
Dependencies: Card properties are imported from the types/index file.
Usage: This component is used to display individual cards in the card slider.
CardSlider.tsx

Description: A 3D carousel component that displays a collection of cards.
Props:
cards: Array of card objects to be displayed.
State:
currentIndex: The index of the currently displayed card.
Dependencies: Carousel from react-spring-3d-carousel, config from react-spring, Card, and Button components.
Usage: This component renders the card carousel with navigation buttons for sliding through the cards.
Data
SampleData.ts
Description: Provides sample card data for testing and development.
Exports:
CardProps: Interface defining the properties of a card.
sampleCards: Array of sample card objects.
Usage: Sample data is used in the App.tsx file to populate the card slider.
Storybook Files
Button.stories.tsx

Description: Storybook configuration for the Button component.
Stories:
LeftButton: Example story for the left navigation button.
RightButton: Example story for the right navigation button.
Usage: Provides a visual test bed for the Button component.
Card.stories.tsx

Description: Storybook configuration for the CardSlider component.
Stories:
ExampleCardSlider1: Example story displaying a set of cards.
Usage: Provides a visual test bed for the CardSlider component.
Types
index.ts
Description: Defines TypeScript interfaces for the project.
Exports:
CardProps: Interface defining the properties of a card.
Usage: Used for type-checking throughout the project to ensure consistency and reliability.
Application
App.tsx

Description: The main application component.
Dependencies: CardSlider component, sampleCards data, FontAwesomeIcon from @fortawesome/react-fontawesome.
Structure:
Header: Displays the application title.
Nav: Navigation bar with options to add and show cards.
Main: Contains the CardSlider component.
Footer: Footer with buttons for card details, limits, freeze, and block actions.
Usage: Entry point for the application, rendering the card slider and navigation elements.
index.tsx

Description: The entry point for the React application.
Dependencies: App component, ReactDOM.createRoot.
Usage: Initializes and renders the App component into the DOM.
Public
index.html
Description: The HTML template for the application.
Structure:
Head: Contains metadata and links to the stylesheet.
Body: Contains the root div where the React app is rendered.
Usage: Provides the basic HTML structure for the React application.
Rationale
The project structure and components are designed to follow best practices for React development. Each component is modular and reusable, promoting maintainability and scalability. TypeScript is used to enforce type safety, ensuring robust and error-free code. Storybook is integrated for component visualization and testing, aiding in development and QA processes.

This structure and approach ensure that the application is easy to understand, extend, and maintain, providing a solid foundation for future development.
