# YouTubeSubscriber-Backend 

This is a backend part of youtubesubscriber project. 
In this we create API's to get data from DataBase.

Here, we use MongoDB cluster DataBase.




## Tech Stack

**Client:**  React, Node.js, Express.js, MongoDB, Mongoose, Nodemon




## Run Locally

Clone the project

```bash
  git clone https://github.com/cc22ji/YouTubeSubscriber-Backend
```

Install dependencies

```bash
  npm init
```

Start the server

```bash
  node app.js 
```


## Deployment

For Deployment of this project we use render.

First the project is push to git and through render we connect out git. After this the deployment is so easy we set couple of terms and click for deployment.

Keep in mind during deployment put...
* build command is  `node build`
* start command is `node app.js`



## Documentation

[Api Documentation](https://documenter.getpostman.com/view/26908207/2s9YeD7Cr1)


## API Reference

#### Get all subscriber data

```http
  GET /subscriber
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `-` | `JSON` | Its fetch name & channel name of all subscriber|

#### Get name & channel name only

```http
  GET /subscriber/name
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `-` | `JSON` | Its fetch name & channel name of all subscriber |

#### Get item

```http
  GET /subscriber/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `JSON` | **Required**. Id of item to fetch |



## Environment Variables

To run this project, we created a env file and  add the following environment variables in .env file

`MONGO_URL`

`PORT` (optional)


## Demo
Here a link of demostartion video -

 - [YouTubeSubscriber-Backend]()


# Hi, I'm Chetan! 👋


## 🚀 About Me
I'm a Student learning Full Stack web Development.


 


## 🛠 Skills
React, Javascript, JSX, HTML, CSS, Bootstrap, tailwind,...


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/chetan-chouhan-06b954167)



## Feedback

If you have any feedback, please reach out to me at chetanchouhan222@gmail.com


## Contributing

Contributions are always welcome!



