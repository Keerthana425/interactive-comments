# React Comments App

A modern and interactive Comments Application built using React.js. This project allows users to add comments, like or unlike comments, and delete comments dynamically. It demonstrates core React concepts such as state management, component-based architecture, event handling, conditional rendering, and list rendering.

## Live Features

✅ Add comments instantly

✅ Like and Unlike comments

✅ Delete comments

✅ Dynamic comment count

✅ Human-readable timestamps using date-fns

✅ Random avatar colors for each user

✅ Responsive design

## Preview

The application provides a clean interface where users can:

* Enter their name
* Write a comment
* Post comments dynamically
* View comment timestamps
* Manage comments through like and delete actions

## Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* CSS3
* JSX

### Libraries

* uuid – Generates unique IDs for comments
* date-fns – Formats comment timestamps

## Key React Concepts Implemented

### State Management

Used React state to manage:

* User name input
* Comment input
* Comments list
* Total comments count

### Event Handling

Implemented handlers for:

* Adding comments
* Deleting comments
* Liking and unliking comments
* Updating form inputs

### Conditional Rendering

Used conditional rendering to:

* Toggle like button styles
* Change like icon images

### List Rendering

Rendered comments dynamically using:

```javascript
commentsList.map()
```

### Immutable State Updates

Updated state safely using:

```javascript
setState(prevState => ({
  ...
}))
```

## Installation

### Clone the Repository

```bash
git clone <repository-url>
```

### Navigate to the Project Folder

```bash
cd react-comment-system
```

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
npm start
```

The application will start on:

```text
http://localhost:3000
```

## Folder Structure

```text
src/
│
├── components/
│   ├── Comments/
│   │   ├── index.js
│   │   └── index.css
│   │
│   └── CommentItem/
│       ├── index.js
│       └── index.css
│
├── App.js
├── index.js
└── index.css
```

## Future Enhancements

* Edit existing comments
* Persist comments using Local Storage
* User authentication
* Dark mode support
* Backend integration with APIs
* Search and filter comments

## Learning Outcomes

This project helped strengthen understanding of:

* React Components
* Props and State
* Event Handling
* Conditional Rendering
* Dynamic UI Updates
* UUID Generation
* Date Formatting
* Component Reusability

## Author

**Keerthana Reddy**

Electronics and Communication Engineering Student | Full Stack Developer

## License

This project is created for learning and educational purposes.
