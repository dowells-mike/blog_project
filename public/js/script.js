document.getElementById('toggle-search').addEventListener('click', function() {
    var searchForm = document.getElementById('search-form');
    if (searchForm.style.maxWidth === '200px') {
        searchForm.style.maxWidth = '0';
    } else {
        searchForm.style.maxWidth = '200px';
    }
});