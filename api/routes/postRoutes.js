const express = require("express");
const controller = require("../controllers/postController");

const router = express.Router();

router.route("/").get(controller.getAllPosts).post(controller.createPost);

router.route("/post-stats").get(controller.getPostStats);

router
    .route("/:id")
    .get(controller.getPost)
    .patch(controller.updatePost)
    .delete(controller.deletePost);

module.exports = router;
