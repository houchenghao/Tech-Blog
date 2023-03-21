const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const post = await Post.create({
            title: req.body.title,
            body: req.body.body,
            userid: req.session.user_id,
            updated_at: req.body.dateNow
        });
        res.status(200).json(post);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.put('/:id', withAuth, async (req,res) => {
    try{
        await Post.update(
            {
                title: req.body.title,
                body: req.body.content
            },
            {
                where: {
                    id: req.params.id
                },
            }
        );
        res.status(200).json({message: `post updated successful`});

    } catch (err) {
        res.status(400).json(err);
    }
});


router.delete('/:id', withAuth, async (req,res) => {
    try{
        await Post.destroy({
            where:{
                id: req.params.id,
            }
        });

        res.status(200).json({message: `post delete successful`});

    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;