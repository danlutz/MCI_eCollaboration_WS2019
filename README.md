[![Netlify Status](https://api.netlify.com/api/v1/badges/b9b20866-710f-4ad6-8bd7-d86f4fc400b7/deploy-status)](https://app.netlify.com/sites/mci-ecollaboration/deploys)

# eCollaboration

This repository contains all source code and data used on the website

## Technologies

We have used the following open-source technologies to build our ePortfolio:

### Languages / Engines

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [SASS/SCSS](https://sass-lang.com/)

### Frameworks

- [React](https://reactjs.org/)
- [Gatsby](https://www.gatsbyjs.org/)
- [Netlify CMS](https://www.netlifycms.org/)
- [Bootstrap](https://getbootstrap.com/)

### Code Quality Tooling

- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)

For a full list of 3rd party modules see [package.json](./package.json) dependencies/devDependencies.

## Running the app locally

- Install [Node.js](https://nodejs.org/en/)
- Execute the following commands in your local repository:

```sh
npm install
npm start
```

You can then access the frontend on [http://localhost:8000](http://localhost:8000)

## Accessing the CMS

When your app is running locally, navigate to [http://localhost:8000/admin](http://localhost:8000/admin)

## Deployment

This app is hosting-agnostic, but can be deployed to [Netlify](https://www.netlify.com/) with one click:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/danlutz/MCI_eCollaboration_WS2019&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

### Enabling CMS Features

Inside you Netlify app settings:

- Active Netlify Identity
- Activate Git Gateway and connect it to your repository

## Environment Variables

The following environment variables are required:

- `GATSBY_ORIGIN`: Domain of host, including protocol
