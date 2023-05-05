# Integration Docs

## Copy the code folders/files

- Copy `components` folder inside the main project as `components2` or something else

- Copy the `hooks` the folder inside main project.

- Copy the `constants` folder inside main project.

- Copy the `index.css` into the `src` directory.

## Instalation of dependencies:

- Add the below to the dependencies list:

  ```
    "react-icons": "^4.8.0",
    "react-spinners": "^0.13.8"
  ```

- Run installation script: `npm install`

## import components

- You are required to import only MainComponent.

- But in case you want to import any other component, the necessary components where ever required:
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

- If it seems that styles are not properly applied then check the import statement for `index.css` inside the the root component, Or maybe inside the Layout component.

- You can make the adjustments inside the `index.css` to make any necessary changes in styling.

## Usage of reusable stuff:

### Constants

- Inside constants we have a file `index.js` where in we have a constant named `BACKEND_BASE_URL`. This the url/ip of the server where the flask app is running, which we can import anywhere in our project as:

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

## Locating Components:

- To see which component is inside which file refer to `components/index.js` which must provide the clear idea about the structure of folders and files.

- For most of the components it should be self explanatory.


