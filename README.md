# RTK Example App + setInterval dispatch

To run: `yarn start`

This is based on the code from running `npx create-react-app my-app --template redux-typescript` with the addition of a `timeSlice`.
The slice has a single property `timestamp: string` and exports a single action `updateTimestamp(newTimestamp: string)`.

The top level `App` component sets up a `setInterval` that calls `dispatch(updateTimestamp(...))` every 5 seconds.

Neither App nor any of its children ever query `timeSlice`'s state, so the expectation is that no renders ever occur without user interaction.
Turning on recording in React Profiler and waiting for a length of time shows that no renders are performed.
