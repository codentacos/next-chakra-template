# Next Chakra Template

A starter template using Next.js, Chakra UI and Passport.js with pre-configured local authentication with MongoDB.

# Installation

First you will need to clone a local copy of the repo by running
```git
git clone https://github.com/codentacos/next-chakra-template.git
```
In the root directory of the project run this command
```git
yarn install
```

# Usage
To start up the project run the following
```git
yarn dev
```
You will need to create a `.env.local` file and add a connection string for your MongoDB.
The connection string environment variable is used in the `database.js` middlware here
```javascript
await mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
```
