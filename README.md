# tptImageModule

> A recreation of the image module from TeachersPayTeachers. Designed to be used in the proxy server under [Related Projects](#Related).
 - https://www.teacherspayteachers.com/

 Highlighted Technologies: React, Express, Mongo, Jest, Webpack, Grunt, AWS S3 + EC2

![Image Module Screenshot](./image_module_screenshot.png)

## Table of Contents

1. [Getting Started](#Getting)
2. [Testing](#Testing)
3. [Related Projects](#Related)

## Getting Started

From within the root directory:
```
npm install
```

To run on a local machine the mongo database uris in server/index.js and database/index.js will need to be changed from my (now stopped) EC2 instance and put your mongo credentials in a new mongo_creds.js. You will also need to set up your own S3 bucket of images, change the bucket name in databse/seed.js and put the credentials in a new aws_config.js.  An additional S3 bucket is needed for grunt to send the bundle.js - change the bucket name in webpack.config.js.

To seed the database
```
npm run seed
```
To start webpack
```
npm run dev
```
Start the server
```
npm run start
```
## Testing
```
npm run test
```

## Related Projects

  - https://github.com/rpt24umami/tptQandAService
  - https://github.com/rpt24umami/tptReviewsService
  - https://github.com/rpt24umami/tptDescriptionAndStandards
  - https://github.com/rpt24umami/Proxy-Maggie
