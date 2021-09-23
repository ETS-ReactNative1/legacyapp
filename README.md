[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Legacy Network (React Native)

A rewrite of the legacy Ionic app.

## Getting Started with Modern JavaScript

Modern JS allows to do more with less. This isn't your grandfather's JavaScript; get started
cacthing up.

### Resources on Modern JavaScript

- [ES6 Mini Crash Course: How to Write Modern JavaScript (Dev Community)](https://dev.to/chrisachard/es6-mini-crash-course-javascript-can-actually-be-fun-to-write-3b9l)
- [Modern JavaScript, 10 things you should be using, starting today (Dev Community)](https://dev.to/itnext/modern-javascript-10-things-you-should-be-using-starting-today-22dp)

### Functional Programming in JavaScript

#### Why Functional Programming

- [The Rise and Fall and Rise of Functional Programming (Eric Elliott on Medium)](https://medium.com/javascript-scene/the-rise-and-fall-and-rise-of-functional-programming-composable-software-c2d91b424c8c)
- [Why Learn Functional Programming in JavaScript? (Eric Elliott on Mediuim)](https://medium.com/javascript-scene/why-learn-functional-programming-in-javascript-composing-software-ea13afc7a257)
- [Why functional programming matters (Hackernoon)](https://hackernoon.com/why-functional-programming-matters-c647f56a7691)
- [Object-Oriented Programming — The Trillion Dollar Disaster (Ilya Suzdalnitski on Medium)](https://medium.com/better-programming/object-oriented-programming-the-trillion-dollar-disaster-92a4b666c7c7)

#### Resources on Functional Programming in JavaScript

- [Functional Programming Principles in Javascript (Dev Community)](https://dev.to/teekay/functional-programming-principles-in-javascript-26g7)
- [An Adequate Introduction to Functional Programming (Dev Community)](https://dev.to/mr_b/an-adequate-introduction-to-functional-programming-1gcl)
- [Basic Functional Programming Patterns in JavaScript (Dev Community)](https://dev.to/nestedsoftware/basic-functional-programming-patterns-in-javascript-49p2)

### The React Bits

#### The Rationale for React

- [What is React.js and why it’s worth to learn? (Dev Community)](https://dev.to/duomly/what-is-react-js-and-why-it-s-worth-to-learn-1m9o)
- [What is React.js? (Quora)](https://www.quora.com/What-is-React-js-1)

#### Getting Started With React

- [A Complete Beginner's Guide to React (Dev Community)](https://dev.to/aspittel/a-complete-beginners-guide-to-react-2cl6)
- [🔥 Learn React in 10 Tweets (with hooks) (Dev Community)](https://dev.to/chrisachard/learn-react-in-10-tweets-with-hooks-59bc)
- [10 Things NOT To Do When Building React Applications (Dev Community)](https://dev.to/jsmanifest/10-things-not-to-do-when-building-react-applications-58a7)

### Getting Started with React Hooks

Write components as functions; manage lifecycle plus local and shared state with hooks.

#### The Case for Hooks

- [Introducing Hooks (React Documentation)](https://reactjs.org/docs/hooks-intro.html)
- [How Are Function Components Different from Classes? (Overreacted)](https://overreacted.io/how-are-function-components-different-from-classes/)

#### Resources on Hooks

- [Hooks at a Glance (React Documentation)](https://reactjs.org/docs/hooks-overview.html)
- [Why React Hooks? (Dev Community)](https://dev.to/tylermcginnis/why-react-hooks-51lj)
- [Making Sense of React Hooks (Dev Community)](https://dev.to/dan_abramov/making-sense-of-react-hooks-2eib)
- [React Hooks Mini Crash Course (Dev Community)](https://dev.to/chrisachard/react-hooks-mini-crash-course-4gcb)
- [The Definitive React Hooks Cheatsheet (Dev Community)](https://dev.to/antjanus/the-definitive-react-hooks-cheatsheet-2ebn)
- [Simplify React Apps with React Hooks (Egghead.io)](https://egghead.io/courses/simplify-react-apps-with-react-hooks)

### Getting Started with React's Context API

This project makes use of React's Context API coupled with Hooks to manage global state.
Take some time to learn the the basics.

#### Resources on Context API

- [Sharing state using React's Context API (Dev Community)](https://dev.to/sunnysingh/sharing-state-using-reacts-context-api-3623)
- [Using the React Context API  -  getting started (Dev Community)](https://dev.to/spences10/using-the-react-context-api---gettingstarted-nje)

### The React Native Bits

#### Getting Started with React Native

- [What are the main differences between ReactJS and React-Native? (Medium)](https://medium.com/@alexmngn/from-reactjs-to-react-native-what-are-the-main-differences-between-both-d6e8e88ebf24)
- [Saving objects using AsyncStorage (Medium)](https://medium.com/@luisbajana/saving-objects-using-asyncstorage-2d8696275667)
- [React Native Resources (Dev Community)](https://dev.to/guergana/react-native-resources-46jm)

#### Project-Specific Resources

- [Expo Documentation (Expo)](https://docs.expo.io/versions/latest/)
- [React Navigation Documentation (React Navigation)](https://reactnavigation.org/docs/en/getting-started.html)
- [Native Base Documentation (Native Base)](https://docs.nativebase.io)

## Coding Style

### A Few Words on Coding Style


#### Line Breaks Are Your Friend

Don't be afraid to put line breaks — allow your code to breathe, for Chist's sake. It's very exhausting to read huge chunks of code when it's a huge chunk of text. Writing a condition after variable declarations? Line break. Reached the function's return statement? Line break.

Group blocks of code that do related things; line breaks are your friend.

### Code Commits


### Closing Open Issues

Issue tracking on this repo has been set up. Open issues can be closed in `git cz` by defining the commit as
affecting open issues and speificiying which issue numbers are affected. Do not close open issues
manually. Only do so when needed like instances where you forget to resolve the issues in your commit.
[Learn more](https://confluence.atlassian.com/bitbucket/resolve-issues-automatically-when-users-push-code-221451126.html).


## Seting up Your Environment

### Node Environment

Install these globally on your machine.

#### Expo

```
npm i -g expo-cli
```


### Setting up your Editor

The guide below is for VS Code and Sublime Text users, but feel free to use any editor
you're comfortable with. I say, however, that the extra productivity the aforementioned
editors give you is too hard to pass up — even if VS Code eats up a ton of RAM.

## Running the App

Runinng the app locally is relatively easy. Just know that you need to have the right
SDKs to build for your target platform.

Install the project's npm packages first:

```
npm i
```

Then: to start the metro

```
npx react-native start
```

Then: to run the app ios

```
npx react-native run-ios
```

Then: to run the app android

```
npx react-native run-android
```

## Why This (Readme) is Here

Because Rico Puerto won't be here forever.
