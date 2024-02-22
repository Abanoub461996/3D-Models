## Table of contents

- [Introduction](#Intro)
- [Installation](#Installation)
- [Controller](#Controller)
- [View](#View)
- [Firebase](#Firebase)

## Introduction

This project is a presentation tool to be used for large events containing 2 screens, 1st screen for the controller with all actions that could be possibly taken by the 3D Model. the 2nd screen is for the 3D Model representation. and both are connected through a 'firebase firestore' collection to obtain a real-time database.

## Installation

the project is built using Vite and vanilla javascript.

```
npm install
npm run dev  ----> for development.
npm run build && npm run preview ----> for build serving

```

## Controller

- responsible for loading the 3d model to abstract the animation names from the model.
- add a button for each animation, which will have the same class name as its animation name.
- add on Click event handler 'fireAnimation' that is directly added to each button takes an animation_name firing a put request to the firebase containing the animation name.

```
{
    animation:animation_name,
    created: firebase.firestore.FieldValue.serverTimestamp(),
  }
```

buttons are to be positioned and styled and the 2d controller background is to be added through the style.css file.

## View

- responsible for loading the 3d model using Threejs and reading all its features like Camera, Lights ...etc.
- a snapshot listener is set to listen to the Firebase 'controllers' collection to fire the animation when it gets triggered by the controller.

## Firebase
* add firebase configuration and initialize firebase to use Firestore collection in both view and controller.
* The Firestore database is to contain 1 collection of 'controllers' containing records of the schema : 
```
{animation: string}
```