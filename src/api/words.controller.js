var WordsDAO = require("../dao/wordsDAO");

exports = module.exports =  class WordsController {
  static async apiGetWords(req, res, next) {
    const wordsList = await WordsDAO.getWords();

    let response = {
      words: wordsList
      // page: 0,
      // filters: {},
      // entries_per_page: MOVIES_PER_PAGE,
      // total_results: totalNumMovies,
    };
    res.json(response);
  }
}
