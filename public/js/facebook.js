function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
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
      if (window.location.pathname == '/login') {
        window.location.href = '/';
      }

      var uid = response.authResponse.userID;
      var accessToken = response.authResponse.accessToken;
      console.log('Facebook user ID: ' + uid);
      FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
    } else if (response.status === 'not_authorized') {
      // the user is logged in to Facebook, 
      // but has not authenticated your app
      if (window.location.pathname != '/login') {
        window.location.href = '/login';
      }
    } else {
      // the user isn't logged in to Facebook.
      if (window.location.pathname != '/login') {
        window.location.href = '/login';
      }
    }
  });
};

function changeUser(response) {
  console.log('Changing Facebook user.');
  console.log(response);
  $('#first-name').text(response.first_name);
  $('#name').text(response.name);
  $('#profile-picture').attr('src', response.picture.data.url);
}