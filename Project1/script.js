$(function() {

  // `mainController` holds shared site functionality
  var mainController = {

    // compile underscore template for nav links
    navTemplate: _.template($('#nav-template').html()),

    // get current (logged-in) user
    showCurrentUser: function() {
      // AJAX call to server to GET /api/users/current
      $.get('/api/users/current', function(user) {
        console.log(user);

        // pass current user through template for nav links
        $navHtml = $(mainController.navTemplate({currentUser: user}));

        // append nav links HTML to page
        $('#nav-links').append($navHtml);
      });
    }
  };

  mainController.showCurrentUser();

});