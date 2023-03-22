const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/:id', withAuth, async (req, res) => {
    try {
        const post = await Comment.create({
            body: req.body.newCommentContent,
            created_at: req.body.dateNow,
            updated_at: req.body.dateNow,
            postid: req.params.id,
            userid: req.session.user_id,
        });
        res.status(200).json(post);
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;