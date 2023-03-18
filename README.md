# react-dialog-confirm
### _the simple modal react component_



[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

`react-dialog-confirm` is a React component that provides a simple way to display confirmation dialogs in your application.

A flexible and customizable dialog/modal component for React. This component can be used to display various types of messages to users and allow them to confirm or cancel an action...

[demo](https://react-dialog-confirm.netlify.app)

## Features

- Easy to use and implement in React applications.
- Supports two different button types for confirmation and cancellation. 
- Option to display an icon in the dialog box. 
- Ability to customize the icon color and size. 
- Callback function for handling confirmation actions. 
- Can be used to confirm actions before performing them. 
- Accessibility-friendly with keyboard navigation and screen reader support. 
- Compatible with both mobile and desktop devices. 
- Can be styled using CSS to match the overall look and feel of your application.

## Installation
You can install `react-dialog-confirm` using npm:
``` shell
npm install react-dialog-confirm
```
or
``` shell
yarn add react-dialog-confirm
```

## Usage
To use `react-dialog-confirm`, you need to import it into your React component:
```javascript
import { DialogProvider } from 'react-dialog-confirm';
```
cover your App component

```javascript
import {DialogProvider} from 'react-dialog-confirm';

export default function index() {
  return (
    <DialogProvider>
      <App />
    </DialogProvider>
  )
}

```
callback open modal function to open modal dialog.

```jsx
import { DialogModal, useModal } from "react-dialog-confirm";
...
//in component
const { openModal } = useModal();

openModal(
  <DialogModal
    icon='success'
    title='Welcome'
    description={'welcome to react-dialog-confirm component'}
  />)
...
```

## Props

Here are the available props for the DialogModal component:

| Prop       | Type         | 	Options                         | Default   | Description |
|------------|--------------|----------------------------------|-----------| ----------- |
| icon       | string       | 'success','info,'warning','error | -         |	The icon to display in the dialog header. |
| title      | string       | your message                     | -         |	The title of the confirmation dialog. |
| titleStyle      | style object | -                                | -         |	CSS styles to apply to the title |
| description    | 	string      | 	-                               | 	-        |	The message to be displayed in the confirmation dialog.|
| descriptionStyle      | style object | -                                | -         |	CSS styles to apply to the description |
| confirm    | 	string      | 	-                               | 	"OK"     |	The label for the confirm button. |
| cancel     | 	string      | 	-                               | 	"Cancel" |	The label for the cancel button. |
| onConfirm  | 	function    | 	-                               | 	() => {} |	The callback function that will be called when the user confirms the action. |
| onCancel   | 	function    | 	-                               | 	() => {} |	The callback function that will be called when the user cancels the action. |
| hasCancel       | 	boolean     | 	-                               | 	false    |	Whether to display a cancel button |

## Examples
Here are some examples of how you can use react-dialog-confirm in your React application:

_app.js
```jsx
import {DialogProvider} from 'react-dialog-confirm';

export default function App({ Component, pageProps }) {
  return (
    <DialogProvider>
      <Component {...pageProps} />
    </DialogProvider>
  )
}

```

Mypage.js
```jsx
import React from "react";
import { DialogModal, useModal } from "react-dialog-confirm";

const Mypage = () => {

    const openModal = useModal()?.openModal;

    const handleClick = () => {
        openModal(
        <DialogModal
        icon='success'
        title='Welcome'
        description={'welcome to react-dialog-confirm component'}
        />)
    }
    return(
        <div>
            <button onClick={handleClick}>Open modal</button>
        </div>
    )
}

export default Mypage;
```

## License

This component is licensed under the MIT License.
