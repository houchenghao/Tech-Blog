const router = require('express').Router();
const {User,Post,Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      // Get All post and JOIN with user data
      const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
      // Serialize data so the template can read it
      const posts = postData.map((post) => post.get({ plain: true }));
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        posts, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  // Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const postData = await Post.findAll({
        // attributes:['id','title','body','created_at','userid'],
        where: [{userid: req.session.user_id}],
        include: [
            { 
                model: User,
                attributes:{
                    exclude: ['password']
                },
            },
        ],
      });
  
      const posts = postData.map((post) => post.get({ plain: true }));
  
      res.render('dashboard', {
        posts,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});


router.get('/login', (req, res) => {
// If the user is already logged in, redirect the request to another route
if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
}
res.render('login');
});

router.get('/signup', (req, res) => {
// If the user is already logged in, redirect the request to another route
res.render('signup');
});

router.get('/newpost', (req,res) =>{
    res.render('newpost',{
      logged_in: req.session.logged_in
    });
});

router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        attributes: ['title','body','created_at']
      });
  
      const post = postData.get({ plain: true });
  
      res.render('post', {
        ...post,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/comment/:id', withAuth, async (req,res) => {
  try{
    const commentData = await Comment.findAll({
      where: {
        postid: req.params.id,
      },
      include:[{
        model: User,
        attributes:{
            exclude: ['password']
        },
      },
      {
        model: Post,
        attributes: ['title','body']
      }]
    });

    const postData = await Post.findAll({
        attributes:['title','body'],
        where: {
            id: req.params.id,
        },
        include:{
            model: User,
            attributes:
            {
                exclude: ['password']
            }
        }
    });
    const comments = commentData.map((comment) => comment.get({plain: true}));
    const posts = postData.map((post) => post.get({plain: true}));

    const data = [comments, posts]
    // res.send(data[0][0]);

    res.render('comment', {
        data,
        logged_in: req.session.logged_in
    });

  } catch {
    res.status(500).json(err);
  }
})



module.exports = router;