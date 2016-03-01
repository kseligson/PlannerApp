function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    // FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
    window.location.href = '/';
  }
  else {
    window.location.href = '/login';
  }
}

window.fbAsyncInit = function() {
  console.log('Checking login state.');

  FB.init({
    appId      : '979702358778307',
    xfbml      : true,
    version    : 'v2.5'
  });

  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      // the user is logged in and has authenticated your
      // app, and response.authResponse supplies
      // the user's ID, a valid access token, a signed
      // request, and the time the access token 
      // and signed request each expire
      var uid = response.authResponse.userID;
      var accessToken = response.authResponse.accessToken;
      console.log(uid);
      FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
    } else if (response.status === 'not_authorized') {
      // the user is logged in to Facebook, 
      // but has not authenticated your app
      window.location.href = '/';
    } else {
      // the user isn't logged in to Facebook.
      window.location.href = '/';
    }
  });
};

function changeUser(response) {
  console.log('Changing Facebook user.');
  console.log(response);
  $('#name').text(response.first_name);
  $('#profile-picture').attr('src', response.picture.data.url);
}