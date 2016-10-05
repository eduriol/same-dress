# Same Dress
Same Dress is a JavaScript app written with [Meteor](https://www.meteor.com/) & [React](https://facebook.github.io/react/) for those gals worried about attending an event just to find out that someone else is wearing their very same outfit.

## Installation
In order to install and run the platform, just follow the next steps:
```
git clone https://github.com/eduriol/same-dress.git
cd same-dress
meteor npm install
meteor
```

## Testing
To run the server-side [Mocha](https://mochajs.org/) and client-side [Enzyme](https://github.com/airbnb/enzyme) tests:
```
meteor test --driver-package practicalmeteor:mocha
```
And to run the ESLint analyzer:
```
meteor npm run lint
```

## Usage
* Login using your Facebook account.
* Fill out the form and send your next event outfit.