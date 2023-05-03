# Integration Docs

## Copy the code folders/files

- Copy components folder inside the main project as components2 or something else

- Copy the hooks the folder inside main project.

- Copy the constants folder inside main project.

## Instalation of dependencies:

- Add the below to the dependencies list:

  ```
    "react-icons": "^4.8.0",
    "react-spinners": "^0.13.8"
  ```

- Run installation script: `npm install`

## import components

- Import the necessary components where ever required:
  eg: You need the Natting component inside the natting page, you would do it as:

  ```jsx
  import { Natting } from 'components';
  ```

  in order to use this component you would do this:

  ```jsx
  <Natting />

  // See App.jsx for more examples.
  ```

## Styling issue?

- If it seems that styles are not properly applied then try importing `components2/css/global.css` in the `App.jsx` file.

## Usage of reusable stuff:

### Constants

- Inside constants we have a file `index.js` where in we have a constant named `BACKEND_BASE_URL` which we can import anywhere in our project as:

  ```jsx
  import { BACKEND_BASE_URL } from '../constants';
  ```

### Components2/utils:

- Inside the `components2/utils` folder we have three reusable components.

  - `Loading.jsx`: Can be used while something is being loaded.

  - `Error.jsx`: When something goes wrong while loading some data or anything else.

  - `Success.jsx`: When something is successful.

- import:

  ```jsx
  import { Loading, Error, Success } from '../utils';
  ```
