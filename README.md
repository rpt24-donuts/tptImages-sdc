# tptImageModule

> A recreation of the image module from TeachersPayTeachers. Designed to be used in the proxy server under [Related Projects](#Related).

- https://www.teacherspayteachers.com/

Highlighted Technologies: React, Express, Mongo, Jest, Webpack, Grunt, AWS S3 + EC2

![Image Module Screenshot](./image_module_screenshot.png)

## Table of Contents

1. [Getting Started](#Getting)
2. [Testing](#Testing)
3. [Related Projects](#Related)
4. [CRUD](#CRUD)

## Getting Started

From within the root directory:

```
npm install
```

To run on a local machine the mongo database uris in server/index.js and database/index.js will need to be changed from my (now stopped) EC2 instance and put your mongo credentials in a new mongo_creds.js. You will also need to set up your own S3 bucket of images, change the bucket name in databse/seed.js and put the credentials in a new aws_config.js. An additional S3 bucket is needed for grunt to send the bundle.js - change the bucket name in webpack.config.js.

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

## CRUD

#### Create / POST - create a new item

#### Read / GET - read an item

Input

```
`/:id/images`
```

Output

```
{
  Product ID Number : [Array of up to 5 url strings],
   item: "Product ID Number",
}

example:
  {
    "1":
    [
      "https://tpt-imagesmodule-sdc.s3.amazonaws.com/SDC Images/tptImages (906).jpg",
      "https://tpt-imagesmodule-sdc.s3.amazonaws.com/SDC Images/tptImages (857).jpg",
      "https://tpt-imagesmodule-sdc.s3.amazonaws.com/SDC Images/tptImages (736).jpg",
      "https://tpt-imagesmodule-sdc.s3.amazonaws.com/SDC Images/tptImages (987).jpg"
    ],
    "item": 1,
  "_id":"6009259601b8416eff82e903"}
```

#### Update / PUT - update an item

Input

```
`/:id/images`

Request Body:
{ Product ID Number : [Array of up to 5 url strings] }

example:
{
    "4": [
        "https://tpt-imagesmodule-sdc.s3.amazonaws.com/SDC Images/tptImages (979).jpg",
        "https://tpt-imagesmodule-sdc.s3.amazonaws.com/SDC Images/tptImages (418).jpg",
        "https://tpt-imagesmodule-sdc.s3.amazonaws.com/SDC Images/tptImages (500).jpg"
    ]
 }
```

Output

- If successful, 200 status code.
- If product ID does not exist, 404 status code.

```
Product ID not found
```

#### Delete / DELETE - delete an item

Input

```
`/:id/images`
```

Output

- If successful, 200 status code.
- If product ID does not exist, 404 status code.

```
Product ID not found
```
