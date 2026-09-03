# Assignment: Create a Basic React Component with TypeScript

## Introduction

In this assignment, we will develop and deploy reusable React components using TypeScript. The project will focus on creating modular, type-safe components that dynamically render personalized greetings, display user details, and showcase interactive elements. We'll leverage TypeScript for type safety, React's functional components, scoped styling using CSS Modules, and runtime prop validation with `prop-types`. By the end of this assignment, you'll have hands-on experience building robust, maintainable React components that integrate seamlessly into modern web applications.

## Starter Files

The starter files for this assignment are provided in the `start` folder under the `code` directory.

---

## Requirements

We'll be working with React and TypeScript to develop reusable components. Here's what we need to accomplish:

### Set Up the Development Environment

We need to:

- Install Node.js and npm (if not already installed). 

- Use **Vite** to scaffold a new React project with TypeScript support:

  ```bash
  npm create vite@latest my-ts-app --template react-ts
  cd my-ts-app
  npm install
  ```

- Install additional dependencies for runtime prop validation:
  ```bash
  npm install prop-types
  ```

- Start the development server to ensure everything is working:

  ```bash
  npm run dev
  ```

### Build the Core Features

We need to implement the following functionalities:

#### Component Creation:

- Develop **5 reusable functional React components**:  
  - `GreetingCard`: Displays personalized greetings with props like `name`, `age`, and `colors`.  
  - `Header`: A reusable header component that accepts a `title` prop.  
  - `Footer`: A reusable footer component that accepts a `text` prop.  
  - `Button`: A customizable button component with `label` and `onClick` props.  
  - `List`: A dynamic list component that accepts an array of items as props.  

- Define TypeScript interfaces to enforce type safety for props in each component.  
- Render dynamic content such as the user's name, optional message, age, favorite colors, and more.  

#### UI Components:

- Use core React components such as `div`, `h2`, `p`, `ul`, `button`, and `footer`.  
- Style each component using scoped CSS Modules for a clean and modular design.  

#### Type Safety:

- Define interfaces for each component's props (e.g., `GreetingCardProps`, `HeaderProps`, etc.).  
- Leverage TypeScript to enforce type checks throughout the components.  

#### Default Props:

- Provide default values for optional props to ensure consistent behavior. For example, the `message` prop in `GreetingCard` should default to "Welcome to our site!".

#### Prop Validation:

- Add runtime validation using `prop-types` to complement TypeScript's static type checking.  

### Test the Component

We need to verify:

- Each component renders correctly with required and optional props.  
- Dynamic data (e.g., names, messages, ages, and colors) is displayed accurately.  
- The first color in the `colors` array is applied as the background color in the `GreetingCard` component.  
- Interactive elements like buttons trigger the correct actions.  
- The app runs smoothly in the development environment.

---

## Deliverables

The deliverable of this assignment is a working React application that meets all the requirements above. We need to submit:

1. **Public GitHub Repository**: Containing the source code of the project.  
2. **Screenshots**: Showing:  
   - The `GreetingCard` component rendering different user data.  
   - Favorite colors listed dynamically.  
   - The `Button` component triggering an alert when clicked.  
   - The `List` component displaying a dynamic list of items.  
3. **README File**: Explaining how to set up and run the app locally, including installation instructions and usage details.

---

## Conclusion

Creating reusable React components with TypeScript is an excellent way to practice type safety, component creation, and scoped styling. By completing this exercise, you've learned how to build modular, maintainable components that integrate seamlessly into modern web applications. These skills form the foundation for developing more complex and feature-rich applications in the future.