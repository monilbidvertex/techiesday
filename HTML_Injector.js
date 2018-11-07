function html_injector(id, name) {
  html = "<div class=\"player\" id='" + id + "'>";
  html += "<p class=\"player_name\">" + name + "</p>";
  html += "<p class=\"wins\">Wins: <span class=\"num_wins\">0</span></p>";
  html += "<p class=\"losses\">Losses: <span class=\"num_losses\"></span></p>";
  html += "</div>";

  return html;
}
