$(function () {
    console.log("ready!");
  
    $.each(facts, (index, data) => {
      $("#first").append(`
      <div class="col-sm-4 mx-auto mt-5">
          <div class="card">
            <div class="card-body">${facts[index].fact}</div>
            </div>
          </div>
        </div>
        `);

    });



  });

  function search_fact() {
    let input = document.getElementById('searchBar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('card-body');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }
    }

// Got this ^^^^ from https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/

}

const random = Math.floor(Math.random() * facts.length);

$("#random").append(`
<div class="col-sm-4 mx-auto mt-5">
  <div class="card">
    <div class="card-body">${facts[random].fact}</div>
    </div>
  </div>
</div>
`);

// function alpha_sorted() {
//   const alphaSorted = facts.sort((a, b) => a.fact.localeCompare(b.fact));
//   const outputDiv = document.getElementById("first");
//   outputDiv.innerHTML = facts.map(fact => `<p>${fact.fact}</p>`).join('');
// }

// function reverse_sorted() {
//   const reverseAlphaSorted = facts.sort((a, b) => b.fact.localeCompare(a.fact));
// }

// function random_sorted() {
//   const randomSorted = facts.sort(() => Math.random() - 0.5); 
// }


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

function renderFacts(sortedFacts) {
  const outputDiv = document.getElementById("first");
  outputDiv.innerHTML = '';
  sortedFacts.forEach(fact => {
    outputDiv.innerHTML += `
      <div class="col-sm-4 mx-auto mt-5">
        <div class="card">
          <div class="card-body">${fact.fact}</div>
        </div>
      </div>
    `;
  });
}
