# Business & List API

This directory is an example of creating serverless APIs in TypeScript and deploy on Vercel platform.

## Features
- [x] Serverless functions written in `TypeScript`  
- [x] Deployment on Vercel for main branch and pull requests    
- [x] Tests support using `Jest`  
- [x] CI setup using GitHub Actions to run tests on every push to GitHub (on every branch)  
- [x] CI setup to run tests against Vercel Preview URLs and add them as check before PR could merge. [See GitHub Action](https://github.com/hhimanshu/typescript-serverless-api-vercel/actions/workflows/preview-ci.yml)    
- [x] CI Setup to create a new release using `semantic-release`
- [x] Ability to compute function (`/address`) and also to make API calls (`/currency`)
- [x] Sample business data is sourced using [`Yelp GraphQL API`](https://www.yelp.ca/developers/graphql/guides/intro)

## Available APIs
### Local
```shell
http://localhost:3000/api/hello?name=<string>
http://localhost:3000/api/address?total=<number>&type=<addressType>
http://localhost:3000/api/currency
http://localhost:3000/api/businesses
http://localhost:3000/api/business/random
```

- The value of `number` must be between `1` and `50`(inclusive)  
- The valid values for `addressTypes` are `city`, `zipCode`  

Some examples are  
```shell
http://localhost:3000/api/hello?name=harit
http://localhost:3000/api/address?total=20&type=zipCode
http://localhost:3000/api/address?total=10&type=city
http://localhost:3000/api/currency
http://localhost:3000/api/businesses
http://localhost:3000/api/business/random
```

### Production
- https://listbusinesses.vercel.app/api/hello?name=harit  
- https://listbusinesses.vercel.app/api/address?total=20&type=zipCode  
- https://listbusinesses.vercel.app/api/address?total=10&type=city  
- https://listbusinesses.vercel.app/api/currency
- https://listbusinesses.vercel.app/api/businesses
- https://listbusinesses.vercel.app/api/business/random

## Start Developing
- Clone this repository (or better fork it so that you can make changes in your repo)  
- Run `yarn && yarn start`. This will kick-off `vercel dev` so that you can start developing your features  
- Run `yarn test` to run tests