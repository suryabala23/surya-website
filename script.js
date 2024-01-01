function toggleSearch() {
    var searchContainer = document.getElementById('searchContainer');
    searchContainer.style.display = (searchContainer.style.display === 'none' || searchContainer.style.display === '') ? 'flex' : 'none';
}

function toggleLogin() {
    var loginContainer = document.getElementById('loginContainer');
    loginContainer.style.display = (loginContainer.style.display === 'none' || loginContainer.style.display === '') ? 'flex' : 'none';
}
