$('form').on('submit', function (e) {
    e.preventDefault();
    let reroller = true;
    let randomClass;

    while (reroller) {
        randomClass = (Math.floor(Math.random() * 10000)).toString();
        if ($(`.${randomClass}`).length === 0) {
            reroller = false;
        }
    }

    const $movieTitle = $('#movieTitle').val();
    const $movieRating = $('#movieRating').val();
    const deleteBtn = $('<button>Remove</button>').addClass(randomClass);
    if ($movieTitle.length < 2 || $movieRating > 10 || $movieRating < 0) {
        return alert('Title must be at least 2 characters long and Rating between 0 and 10')
    }

    const movieTitleDiv = $('<div>').append($movieTitle).addClass(randomClass);
    const movieRatingDiv = $('<div>').append($movieRating).addClass(randomClass);
    const movieDeleteDiv = $('<div>').append(deleteBtn).addClass(randomClass)

    $('#movieList').append(movieTitleDiv);
    $('#ratingList').append(movieRatingDiv);
    $('#delete').append(movieDeleteDiv);
})

$('#movieContainer').on('click', 'button', function (e) {
    const $movieTitle = $('button').attr('class');
    $('div').remove(`.${$movieTitle}`);
})