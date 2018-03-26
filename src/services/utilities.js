import $ from 'jquery-ajax'

console.log('made it to utilities.js from container')


export function queryGithub(query) {
  var term = query.replace(/\s/, '+');
  var url = `http://api.github.com/repos/cloudflare/issues/10/${term}`

  return $.getJSON(url).then((res) => res["Search"]);

}
