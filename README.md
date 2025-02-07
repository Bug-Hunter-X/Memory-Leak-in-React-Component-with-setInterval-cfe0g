# React setInterval Memory Leak Bug

This repository demonstrates a common bug in React components: memory leaks caused by improper cleanup of intervals created using `setInterval` within the `useEffect` hook.  The bug occurs because the cleanup function in the `useEffect` hook is only called when the component unmounts. If the component re-renders, the old interval continues to run, leading to unnecessary memory usage.  This example demonstrates the flawed approach and the correct way to handle such situations.

## Bug
The `bug.js` file contains the buggy implementation, showcasing how the `setInterval` function isn't properly cleared when the component re-renders.

## Solution
The `bugSolution.js` file presents a corrected version. The solution uses a `useRef` hook to store the interval ID. Then it clears the interval within the cleanup function, ensuring memory is freed regardless of whether the component re-renders or unmounts.

## How to Run
Clone the repository and navigate to the directory. Then run `npm install` to install dependencies and then `npm start` to launch the app and view the buggy and corrected behavior in the browser.