// PACKAGES

const express = require("express");
const app = express();
const cors = require("cors");
const ArticleRouter = express.Router();

// MIDDLEWARES

app.use(cors());
app.use(express.json());

// EXPRESS ROUTES

const {
  getArticle,
  PostArticle,
  getParamsArticle,
  updateArticle,
  deleteArticle,
  findBySlug,
} = require("../controller/ArticleContentController");

ArticleRouter.get("/article", getArticle);
ArticleRouter.post("/article", PostArticle);
ArticleRouter.get("/article/:id", getParamsArticle);
ArticleRouter.patch("/article/:id", updateArticle);
ArticleRouter.delete("/article/:id", deleteArticle);
ArticleRouter.get("/article/slug/:slug", findBySlug);

module.exports = ArticleRouter;
