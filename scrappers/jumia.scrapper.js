const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://www.jumia.ma';

async function loadArticles() {
  try {
    const html = await rp(url);
    const $ = cheerio.load(html);
    let menus;

    // $('td > b > a').each((_, element) => {
    //   presidents.push({name:element.attribs.title});
    // });

    menus = $('.flyout')
      .children('a.itm')
      .toArray()
      .map((el, index) => {
        console.log(cheerio.load(el).text());
        return { choice: index + 1, name: cheerio.load(el).text() };
      });

    return menus;
  } catch (error) {
    console.log(error);
  }
}

module.exports = loadArticles;
