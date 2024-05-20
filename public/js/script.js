document.addEventListener('DOMContentLoaded', function() {
    const allButtons = document.querySelectorAll('.searchBtn');
    const searchBar = document.querySelector('.searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.getElementById('searchClose');
  
    // Check if the elements exist
    if (allButtons.length > 0 && searchBar && searchInput && searchClose) {
        allButtons.forEach(button => {
            button.addEventListener('click', function() {
                searchBar.style.visibility = 'visible';
                searchBar.classList.add('open');
                this.setAttribute('aria-expanded', 'true');
                searchInput.focus();
            });
        });
    
        searchClose.addEventListener('click', function() {
            searchBar.style.visibility = 'hidden';
            searchBar.classList.remove('open');
            allButtons.forEach(button => button.setAttribute('aria-expanded', 'false'));
        });

        // Close the search bar if the user clicks outside of it
        document.addEventListener('click', function(event) {
            if (!searchBar.contains(event.target) && !Array.from(allButtons).some(button => button.contains(event.target))) {
                searchBar.style.visibility = 'hidden';
                searchBar.classList.remove('open');
                allButtons.forEach(button => button.setAttribute('aria-expanded', 'false'));
            }
        });
    }
});
