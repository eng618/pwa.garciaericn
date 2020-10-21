// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCz_mkfzMFtFQGhykYKUume-vW9U5RugUA',
    authDomain: 'garciaericn-dev.firebaseapp.com',
    databaseURL: 'https://garciaericn-dev.firebaseio.com',
    projectId: 'garciaericn-dev',
    storageBucket: 'garciaericn-dev.appspot.com',
    messagingSenderId: '214071154092',
  },
  gaTrackingId: 'UA-64261422-6',
};
