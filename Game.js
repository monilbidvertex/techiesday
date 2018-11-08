function createPlayers() {
  var players = [];

  // Create an array of Player objects.
  for(var i=0; i<students.length; i++) {
    players.push(new Player(students[i]));
  }

  return players
}

function createGameLayout() {
  var numberOfPlayers = players.length;

  // Form the groups.
  var groupOne = players.slice(0, numberOfPlayers/2);
  var groupTwo = players.slice(numberOfPlayers/2, numberOfPlayers);

  // Get the divs for each group.
  var groupOneDiv = document.getElementById(groupDivIds["group_1"]);
  var groupTwoDiv = document.getElementById(groupDivIds["group_2"]);

  for(var i=0; i<groupOne.length; i++) {
    var name = groupOne[i].getPlayerName();
    var wins = groupOne[i].getWins();
    var losses = groupOne[i].getLosses();

    groupOneDiv.innerHTML += playerHTMLCreator(name, wins, losses);
  }

  for(var i=0; i<groupTwo.length; i++) {
    var name = groupTwo[i].getPlayerName();
    var wins = groupTwo[i].getWins();
    var losses = groupTwo[i].getLosses();

    groupTwoDiv.innerHTML += playerHTMLCreator(name, wins, losses);
  }
}

function playerHTMLCreator(name, wins, losses) {
  var totalPoints = wins - losses;

  // Generate HTML for each player's div.
  var html = "<div class=\"player\">";
  html += "<p class=\"player_name\">" + name + "</p>";
  html += "<div class=\"player_points\">";
  html += "<p class=\"wins scoring\" onclick=\"updatePoints('" + name + "', true)\">Win</p>";
  html += "<p class=\"points scoring\" id=\"" + name + "\">" + totalPoints + "</p>";
  html += "<p class=\"losses scoring\" onclick=\"updatePoints('" + name + "', false)\">Loss</p>";
  html += "</div>";
  html += "</div>";

  return html;
}

function updatePoints(name, pointIncrement) {
  var points = 1;
  if(pointIncrement == false) {
    points = -1;
  }
  var player = null;
  for(var i=0; i<players.length; i++) {
    if(players[i].getPlayerName() == name) {
      players[i].setPoints(points);
      player = players[i]
    }
  }

  // Make sure that the player was found.
  if(player == null) {
    alert("An unexpected error occurred.");
  }

  // Update player's wins on the UI.
  var playerPoints = document.getElementById(name);
  playerPoints.innerHTML = player.getPoints();
}

function generateRandomSequenceOfNumbers() {
  // Generate a random order of numbers from 0 through 19.
  var randomOrder = [];
  var maxNumber = 20;

  while(randomOrder.length<maxNumber) {
    var randomNumber = Math.floor(Math.random()*20);
    if(randomOrder.indexOf(randomNumber) > -1) continue;
    randomOrder[randomOrder.length] = randomNumber;
  }

  return randomOrder;
}

function displayQuestion() {
  // Display a new question in the game.
  if(orderOfQuestions.length == 0) {
    alert("Whoops! All out of questions. :(");
    return;
  }
  var questionDiv = document.getElementById("question");
  var lastElementOfOrderOfQuestions = orderOfQuestions[orderOfQuestions.length - 1];

  var question = questions[lastElementOfOrderOfQuestions];
  questionDiv.innerHTML = question;

  // Remove the last element of the array.
  orderOfQuestions.pop();
}
