const express = require('express')
const Article = require('./../models/article')
const router = express.Router()


// new blog
router.get('/new', (req, res) => {
  res.render('articles/new', { article: new Article() })
})


//id of edit
router.get('/edit/:id', async (req, res) => {
  const article = await Article.findById(req.params.id)
  res.render('articles/edit', { article: article })
})

//for slugifying and good urls
router.get('/:slug', async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug })
  if (article == null) res.redirect('/')
  res.render('articles/show', { article: article })
})


// for new blog
router.post('/', async (req, res, next) => {
//save 
  req.article = new Article()
  next()
}, saveArticleAndRedirect('new'))



// for blog id
router.put('/:id', async (req, res, next) => {
//find id by params in the url so if user input a false url , it redirects it
  req.article = await Article.findById(req.params.id)
  

//use middlware to save and redirect
  next()
}, saveArticleAndRedirect('edit'))



// to delete
router.delete('/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.redirect('/')
})

//save and redirect
function saveArticleAndRedirect(path) {
  return async (req, res) => {
    let article = req.article
    article.title = req.body.title
    article.description = req.body.description
    article.markdown = req.body.markdown
    try {
      article = await article.save()
      res.redirect(`/articles/${article.slug}`)
    } catch (e) {
      res.render(`articles/${path}`, { article: article })
    }
  }
}

module.exports = router