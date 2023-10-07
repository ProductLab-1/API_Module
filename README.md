## API Module
 Welcome to the API Module of ProductLab. Last week you learned about data storage and manipulation. This week you'll learn how to access that data via API. You'll start by getting familiar with Postman, a powerful development tool. Then you'll use your new postman skills to experiment with REST and graphQL APIs. Finally, you'll be challenging yourself by building your APIs from scratch!

 ## Housekeeping
 Please watch this repo by selecting the "watch" button, which is directly above the bright green "Code" button. This will help us keep track of participation.

 Your projects this week will be on Udemy, Strapi and other sites. To keep a central record of your accomplishments you will need to create a repository called 'Data_Module_yourname' and then upload each project to the repository. This will allow your instructors to easily review your work! Your final project will also link to this repo to demonstrate your Data skillset. 

 This repo will serve as both your solution files as well as the rubric for how you should name and structure your files. 

 ## Assignments: Academic 
 Before working on the hands on material please review the following: 

1. [An introduction into APIs for Product Managers](https://medium.com/swlh/a-product-managers-guide-to-apis-c5fffff0e5e0) 

2. [How to think through competing priorities in relation to APIs](https://www.linkedin.com/pulse/demystifying-apis-product-managers-erin-howell/)
    * The begining of this article will repeat a lot of what you covered in the previous article. Feel free to skim until you reach the section "What should Product Managers be thinking about when prioritising an API on their product roadmap?"

3. [A quick introduction to Swagger](https://swagger.io/docs/specification/2-0/what-is-swagger/)
    * You'll learn more about Swagger during your hands on assignments but this is a good place to start

4. [API Management](https://cloud.google.com/learn/what-is-api-management#:~:text=API%20management%20is%20the%20process,cloud%2C%20or%20a%20hybrid%20environment.%20https://blog.hubspot.com/website/api-management)
    * This is directly relevant to your role as a PM so pay attention! 
    * [Also, in case you're curious, here is an example of an API Management platform called MuleSoft.](https://www.mulesoft.com/platform/enterprise-integration)

5. [Asynchronouse code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
    * This article is specific to JavaScript but the concepts you'll learn around asynchronous code are relevant in most languages. 
    * [Here are some best practices from experts in the industry](https://stackify.com/when-to-use-asynchronous-programming/)


## Assignments: Hands On
Enough reading! Time to make some stuff! 
1. Create a new repository in your Github called "API_Module_yourname"
    * This is where you will store your work for the module. 

2. [REST APIs with Postman for Absolute Beginners](https://eylearning.udemy.com/course/api-with-postman-for-absolute-beginners/learn/lecture/18670210#overview) 
    * This is an awesome Udemy course, please take advantage of it!
    * Assigned sections: All
    * **Required work to be uploaded to your github repository:** 
        1. Assignment: DELETE
            * upload a screenshot of your successful DELETE request on Postman. The filename in your repo should be "DELETE_postman_screenshot_yourname"
        2. Assignment: gif upload
            * upload a screenshot of the address of your giph upload. The filename in your repo should be "gif_postman_screenshot_yourname"
        3. Query a real world open API from [this list](https://www.postman.com/explore)
            * review the schema of the APIs on this postman site. Pick one and then run a request in postman. Include a screenshot of your request
            * the filename in your repo should be "realworld_api_request_yourname"

3. Now its time to build your own APIs and databases. There are one of two options you can choose. (Only do one!)
    * Option 1: [Build and query your own non-relational database](https://docs.strapi.io/dev-docs/quick-start#_1-install-strapi-and-create-a-new-project)
        * Once you complete setting up your Strapi db experiment with some REST API queries. Review the possible queries [here](https://docs.strapi.io/dev-docs/api/rest)
        * **Required work to be uploaded to your github repository:** 
            * The entire file structure of the Strapi DB you have built 
            * Screenshots of queries you made to your DB in Postman (include at least one example of GET, POST and DELETE)

    * Challenge Option: [Build a full stack GraphQL solution](https://www.howtographql.com/graphql-js/0-introduction/)
        * **This is a challenge but its very do-able and you will feel very cool after you finish**
        * This tutorial will walk you through how to setup graphQL APIs by building your own server. You'll also have the opportunity to spin up a database and connect it to your server. If you'd like you can also enhance your server to have authentication functionality and advanced queries. However, if you pick this option you only need to get through the "Connecting the Server and Database with Prisma Client" section
        * Before you dive in you may want to review [this material](https://www.howtographql.com/basics/0-introduction/) only go until the "Big Picture (Architecture) section. Its not required but will give context you may find helpful during the project
        * Some tips for this project:
            * When following the instructions on specific commands to put in your terminal pay attention to the text directly above the grey box where the commands are. It is telling you what file you should be in before you initiate the command. [For example](image.png) here you should be in the hackernews-node file. If you try this command in a different file, you'll get an error!
            * When you download apollo-server and graphql you may get a response about packages needing funding or vulnerabilities. Ignore them, its not important for us
            * When it tells you to open a file, just open it in vsCode. To make it easier just open the API_Module file as a window in vsCode so you can navigate between the files you need. Also DON'T FORGET TO SAVE A FILE before you try running it

        * Challenge: 
            * Continue through the tutorial to add authentication and other features. 
            * Can you refactor the project to store different information. Links are great, but what if you re-built this project to keep track of animals in the NYC Zoo, or players in your fantasy football league? 
        * **Required work to be uploaded to your github repository:**
            * The entire file structure of your GraphQL project (should be called "hackernews-node"), inclusive of the server and database files
            * Screenshot of the Link database view within Prisma Studio

## Add ons
Want to learn more? Check out these additional learning resources

1. [A deeper dive into graphQL queries](https://graphql.org/learn/queries/)

2. [A lecture on API Product Management](https://www.youtube.com/watch?v=9I-uCjhCRSI)

3. [A deeper dive into promises and asynchronouse code in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)

## Assignment Format 
At the end of the week we expect your Github repo to have the following files: 

1. DELETE_postman_screenshot_yourname.png
2. giph_postman_screenshot_yourname.png
3. realworld_api_request_yourname.png
4. strapi or hackernews-node file structures
    * one or the other
5. prisma_studio_screenshot_yourname.png

## Troubleshooting

If you have any trouble navigating the GitHub repo or working on the exercises, please don't hesitate to ask for help. The Admin Team and your Instructors are always happy to help.