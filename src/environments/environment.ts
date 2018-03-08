// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

//setting environment variables for easy access to the Firebase Database, these setting are found in your firebase console
export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBNiohuav8n8RMVHhsYx8WKGw-WJ_jCUGY",
        authDomain: "contact-form-oranges.firebaseapp.com",
        databaseURL: "https://contact-form-oranges.firebaseio.com",
        projectId: "contact-form-oranges",
        storageBucket: "",
        messagingSenderId: "1000536478870"
    }
};
