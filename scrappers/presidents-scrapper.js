const rp = require('request-promise');
const cheerio = require('cheerio');
const url =
  'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

async function loadPresidents() {
  try {
    const html = await rp(url);
    const $ = cheerio.load(html);
    let presidents = [];

    $('td > b > a').each((_, element) => {
      presidents.push({name:element.attribs.title});
    });

    return presidents;
  } catch (error) {
    console.log(error);
  }
}

module.exports = loadPresidents;
