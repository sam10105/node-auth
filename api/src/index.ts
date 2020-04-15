import express from "express";

const app = express();

app.get("/", (_, res) => res.json({ message: "OK" }));

app.listen(3000, () => console.log("Server started on http://localhost:3000"));
