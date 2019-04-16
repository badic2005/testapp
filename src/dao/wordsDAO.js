let words;

exports = module.exports = class WordsDAO {
  static async injectDB(conn) {
    if (words) {
      return;
    }
    try {
      words = await conn.db("hebdict").collection("word");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in wordsDAO: ${e}`
      );
    }
  }

  static async getWords({ filters = null, page = 0, wordsPerPage = 20 } = {}) {
    return words.find().toArray();
  }
}
