var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

const { db } = require("./config/admin");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
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
      return res.status(200).json(items);
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});
// delete
app.delete("/api/todos/:docId", async (req, res) => {
  const docId = req.params.docId;
  // call firebase
  const courseRef = db.collection("todoss");
  try {
    courseRef
      .doc(docId)
      .delete()
      .then((snapshot) => {
        return res.status(200).json(snapshot);
      });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

// add
app.post("/api/todos", async (req, res) => {
  const body = req.body;
  // call firebase
  const courseRef = db.collection("todoss");
  try {
    courseRef.add(body).then((snapshot) => {
      return res.status(200).json(snapshot);
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

// update
app.post("/api/todos/:docId", async (req, res) => {
  const docId = req.params.docId;
  const body = req.body;
  // call firebase
  const courseRef = db.collection("todoss");
  try {
    courseRef
      .doc(docId)
      .set(body)
      .then((snapshot) => {
        return res.status(200).json(snapshot);
      });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});
