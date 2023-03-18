# react-dialog-confirm
### _the simple modal react component_



[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

`react-dialog-confirm` is a React component that provides a simple way to display confirmation dialogs in your application.

A flexible and customizable dialog/modal component for React. This component can be used to display various types of messages to users and allow them to confirm or cancel an action...

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

## License

This component is licensed under the MIT License.
