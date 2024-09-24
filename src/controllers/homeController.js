class HomeController {
  homeGet(req, res) {
    res.render('index');
  };

  homePost(req, res) {
    res.send('oque você me enviou foi', req.body)
  };
}

export default new HomeController;
