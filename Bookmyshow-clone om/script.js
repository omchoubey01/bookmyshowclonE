const allCards = document.querySelectorAll('.card');
allCards.forEach(card => {
    // Do something with each card element
    console.log();
});
document.addEventListener('allcard', function() {
    function openNextPage() {
        // Specify the URL of the next page you want to open
        var nextPageUrl = "http://127.0.0.1:5500/App.html";
        // Open the next page in the same tab
        window.location.href = nextPageUrl;
});


