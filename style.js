
var cardContainer = $('.card-container');
var submit = $('.submit-btn');
var image= $(`.confetti`)

submit.on("click", appendSomeoneJoins);

function appendSomeoneJoins(event) {
  event.preventDefault();
  var name = $('.name').val();

  cardContainer.append(`
    <p class="name-card"> Hooray, ${name} joined the newsletter!🥳🎉</p>
  `);
}
