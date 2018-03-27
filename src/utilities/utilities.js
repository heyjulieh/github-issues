console.log('made it to utilities.js from container')

import $ from 'jquery-ajax'

export function queryGithub(query) {
  var term = query.replace(/\s/, '+');
  var url = `http://api.github.com/twbs/issues/?q=${term}`

  return $.getJSON(url).then((res) => res["Search"]);

}
