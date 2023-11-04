### SBA 308A: JavaScript Web Application

This assessment measures your capability to implement advanced JavaScript tools and features in a practical manner. You have creative freedom in the topic, material, and purpose of the web application you will be developing, so have fun with it!

#### Objectives

- Use asynchronous JavaScript tools to build a responsive web application.
- Demonstrate understanding of the JavaScript event loop.
- Generate asynchronous code using Promises and async/await syntax.
- Use fetch and/or Axios to interact with an external web API.
- Organize files using modules and imports.

## The Plant Food Info App

https://eat-plants.netlify.app/

![Alt text](<Screen Shot 2023-11-04 at 5.58.15 PM.png>)

- **Type in a fruit, vegetable, nut, seed, any plant food in the search bar and hit enter or the 'Search' button to get your results!**

- This app origanally started to showcase over 40 different fruits with photos and nutrients, although now allow to search for any plant food

- This app uses the pexel API and the Food Central API

- This app also uses AXIOS and BOotstrap CSS via CDN


####  Requirements

- Use the fetch API or Axios to communicate with an external web API. Use the data provided by this API to populate your application’s content and features.

- Create user interaction with the API through a search feature, paginated gallery, or similar. This feature should use GET requests to retrieve associated data.

```
// const query = e.target.value;
    const query = fruitSelect.value;

    const photoReq = await axios.get(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
        headers: {
            Authorization: 'XRED6LegsN79wJHnL9al2BepoyiYr3DVV6jyuLlhdXLsfwMuiJ3yzUzO'
        }
    })

    const photo = await photoReq.data
```

Organize your JavaScript code into at least three (3) different module files, and import functions and data across files as necessary.

```

getFruitNames.js
getNutrients.js
getPhoto.js

```

#### Reflection

What could you have done differently during the planning stages of your project to make the execution easier?

```

I could have abandond the first API I wanted to use and moved onto to another sooner. I spent way to much time fiddling with one API when other options were great.

```
Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?

```

I may have spent too much time researching different APIs and thinking of projects when I could have used a simple known one and still done something cool or implemented advanced features

```

What would you add to, or change about your application if given more time?

```
I would have liked to implement more info about each food and implemented a POST request by having a comment or favorites input and UI section

```
