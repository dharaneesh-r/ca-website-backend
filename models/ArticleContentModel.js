const mongoose = require("mongoose");
const slugify = require("slugify");

// KEYWORD SCHEMA
const keyPointSchema = mongoose.Schema(
  {
    points: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

// SECTION SCHEMA
const sectionItemSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    keypoints: {
      type: keyPointSchema,
    },
  },
  { timestamps: true }
);

const headingContentSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keypoints: {
    type: keyPointSchema,
  },
});

const headingItemSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    description: [headingContentSchema],
  },
  { timestamps: true }
);

const faqSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const articleContentSchema = mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    points: {
      type: keyPointSchema,
    },
    sections: {
      type: [sectionItemSchema],
    },
    headings: {
      type: [headingItemSchema],
    },
    faq: {
      type: [faqSchema],
    },
  },
  { timestamps: true }
);

// Auto-generate slug from topic before saving

articleContentSchema.pre("save", function (next) {
  if (this.isModified("topic")) {
    this.slug = slugify(this.topic, {
      lower: true,
      strict: true,
      remove: /[*+~.()'"!:@]/g,
    });
  }
  next();
});

const ArticleContent = mongoose.model("ArticleContent", articleContentSchema);

module.exports = ArticleContent;
