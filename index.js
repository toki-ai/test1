import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello");
})

app.listen(port, () => {
    console.log(`Server already at port ${port}.`)
}); 

// Features
// 1. Post Creation: Users should be able to create new posts.

// 2. Post Viewing: The home page should allow the user to view all their posts.

// 3. Post Update/Delete: Users should be edit and delete posts as needed.

// 3. Styling: The application should be well-styled and responsive, ensuring a good user experience on both desktop and mobile devices.