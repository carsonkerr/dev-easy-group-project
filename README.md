# Dev Easy Project
## The group that worked on this was Carson Kerr, Reed Willis, Tatum Duthu, and Cohen Cantrell

<details> 
  <summary>Attribution</summary>
  <p>https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/</p>
  <p>https://www.w3schools.com/js/js_arrays.asp</p>
  <p>https://www.w3schools.com/howto/howto_css_searchbar.asp</p>
</details>

### Here is a code snippet from the project that is the <strong>search</strong> feature!
https://github.com/carsonkerr/dev-easy-group-project/blob/855182b442ab6371de20a31ab8683ebb4f895276/scripts/card-script.js#L20-L32


### This is how we created our sorting functions for all the facts.
```javascript
function alpha_sorted() {
  const alphaSorted = facts.sort((a, b) => a.fact.localeCompare(b.fact));
  renderFacts(alphaSorted);
}


function reverse_sorted() {
  const reverseAlphaSorted = facts.sort((a, b) => b.fact.localeCompare(a.fact));
  renderFacts(reverseAlphaSorted);
}


function random_sorted() {
  const randomSorted = facts.sort(() => Math.random() - 0.5);
  renderFacts(randomSorted);
}
```
