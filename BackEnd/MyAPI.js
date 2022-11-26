var express = require("express");
var app = express();
var cors = require('cors');

const { db } = require("./config/admin");
app.use(cors());

app.listen(5555, function () {
  console.log("Server is running...");
});

//API
// const items = [
//   {
//     id: 1,
//     name: "Learn Python: The Complete Python Programming Course",
//     img: "https://img-c.udemycdn.com/course/480x270/394676_ce3d_5.jpg",
//   },
//   {
//     id: 2,
//     name: "Learn HTML: The Complete HTML Programming Course",
//     img: "https://img-c.udemycdn.com/course/480x270/394676_ce3d_5.jpg",
//   },
//   {
//     id: 3,
//     name: "Learn Python: The Complete Python Programming Course",
//     img: "https://img-c.udemycdn.com/course/480x270/394676_ce3d_5.jpg",
//   },
//   {
//     id: 4,
//     name: "Learn Python: The Complete Python Programming Course",
//     img: "https://img-c.udemycdn.com/course/480x270/394676_ce3d_5.jpg",
//   },
// ];
app.get("/api/todos", async (req, res) => {
  // call firebase
  const courseRef = db.collection("todoss");
  try {
    courseRef.get().then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(items);
      return res.status(201).json(items);
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});
// delete
const apiName = 'MyApiName';
const path = '/path';
const myInit = {
  headers: {} 
};
