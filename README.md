# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

1. Fork
1. Feature
1. Clone
1. Pull Request

![React](https://www.import.io/wp-content/uploads/2017/10/React-logo-1.png)

# [Create React App](https://facebook.github.io/create-react-app)

![](stocks-app.png)

## Start Here

Inside this repo, run the following command to create a new react app:

```sh
npx create-react-app stocks-app
```

Use `npm start` to start a server that will serve your new React application:

```bash
cd stocks-app
npm start
```
**This will be a mobile-first project.**

This project will use the https://iexcloud.io API to grab stock data. Please signup on the website and grab your API secret/token.

The API URL you will construct will look something like this: https://cloud.iexapis.com/stable/stock/fb/quote?token=sk_63cb8aca56dc4f5687425f679a6b62d2

> Remember to use your own token/secret

![](postman.png)

Test your API URL on [Postman](https://www.getpostman.com).
You should be able to query a stock on Postman.

Your job will be to implement the following:

1. A Header component
1. A Stock component

You can do your API call inside of the App components, and passing your stocks as props to the Stock component.

**Required**
- Your app should resemble the mockup as closely as possible - that means styling, fonts, and colors.
- This project will assess you CSS and Flexbox knowledge.

**Tips:**
- Store the tickers in state, loop through the tickers and make an API call for each ticker
- Use map inside of the Stock component to render each stock
- Use [Postman](https://www.getpostman.com)

**Bonus**
- Build Search

