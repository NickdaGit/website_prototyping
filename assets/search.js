// assets/search.js – tiny offline search
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('search-input');
  const resultsDiv = document.getElementById('search-results');

  input.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    resultsDiv.innerHTML = '';

    if (!term) return;

    // For now it searches the visible text on the page
    const allText = document.body.innerText.toLowerCase();
    if (allText.includes(term)) {
      resultsDiv.innerHTML = `<p style="color:#ffcc00">Found something about <strong>${term}</strong> – check Knowledge or Fun sections!</p>`;
    } else {
      resultsDiv.innerHTML = `<p>No matches yet… but we’re still building the full library!</p>`;
    }
  });
});
