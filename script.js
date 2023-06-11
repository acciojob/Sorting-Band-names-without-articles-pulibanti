//your code here
// An array of band names
let bandNames = ['The Beatles', 'Red Hot Chili Peppers', 'Aerosmith', 'The Rolling Stones', 'Nirvana', 'The Who'];

// Function to remove articles from the band names
function removeArticles(name) {
  const articles = ['the', 'a', 'an'];
  const words = name.split(' ');
  const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));
  return filteredWords.join(' ');
}

// Sort the band names in lexicographic order excluding articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Get the ul element with the id 'band'
const bandList = document.getElementById('band');

// Create li elements and append band names to the ul element
bandNames.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  bandList.appendChild(li);
});

