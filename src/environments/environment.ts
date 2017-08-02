// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCXrxNZUp6mPff2PZXfxqsFlHTpwJYqilo",
    authDomain: "resturant-management.firebaseapp.com",
    databaseURL: "https://resturant-management.firebaseio.com",
    projectId: "resturant-management",
    storageBucket: "resturant-management.appspot.com",
    messagingSenderId: "397015028745"
  }
}