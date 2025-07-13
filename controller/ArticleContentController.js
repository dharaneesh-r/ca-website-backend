const Article = require("../models/ArticleContentModel");

// GET all articles
const getArticle = async (req, res) => {
  try {
    const data = await Article.find({});
    if (!data || data.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "No articles found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Articles fetched successfully",
      length: data.length,
      data,
    });
  } catch (err) {
    res.status(500).json({
      // 500 for server errors
      status: "error",
      message: err.message,
    });
  }
};

// POST a new article
const PostArticle = async (req, res) => {
  try {
    const data = await Article.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Article created successfully",
      data,
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        status: "fail",
        message: "Article with this slug already exists",
      });
    }
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// GET article by ID
const getParamsArticle = async (req, res) => {
  try {
    const data = await Article.findById(req.params.id);
    if (!data) {
      return res.status(404).json({
        status: "fail",
        message: "Article not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Article fetched successfully",
      data,
    });
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({
        status: "fail",
        message: "Invalid article ID",
      });
    }
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

// UPDATE article by ID
const updateArticle = async (req, res) => {
  try {
    const data = await Article.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!data) {
      return res.status(404).json({
        status: "fail",
        message: "Article not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Article updated successfully",
      data,
    });
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({
        status: "fail",
        message: "Invalid article ID",
      });
    }
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// FIND article by slug
const findBySlug = async (req, res) => {
  try {
    const data = await Article.findOne({ slug: req.params.slug });
    if (!data) {
      return res.status(404).json({
        status: "fail",
        message: "Article not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Article fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

// DELETE article by ID
const deleteArticle = async (req, res) => {
  try {
    const data = await Article.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({
        status: "fail",
        message: "Article not found",
      });
    }
    res.status(204).json();
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({
        status: "fail",
        message: "Invalid article ID",
      });
    }
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = {
  getArticle,
  PostArticle,
  getParamsArticle,
  updateArticle,
  findBySlug,
  deleteArticle,
};
