var profile = null;

document.getElementsByTagName('button')[0].addEventListener('click', function () {
  getProfile(document.getElementsByTagName('input')[0].value);
});

function getProfile(name) {
  fetch('https://api.github.com/users/' + name)
    .then(function (file) {
      return file.json();
    })
    .then(function (jFile) {
      profile = jFile;
      fillInProfile();
    })
}

function fillInProfile() {
  document.getElementById('avatar').src = profile.avatar_url;
  document.getElementById('name').innerText = profile.name;
  document.getElementById('username').innerText = profile.login;
  document.getElementById('location').innerText = profile.location;
  document.getElementById('url').innerHTML = '<a href="' + profile.html_url + '">Check out Profile</a>'
}
