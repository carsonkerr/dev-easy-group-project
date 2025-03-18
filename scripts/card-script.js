$(function () {
    console.log("ready!");
  
    $.each(facts, (index, data) => {
      $("#gameRow").append(`
      <div class="col-sm-4 mx-auto mt-5">
          <div class="card">
            <div class="card-body">${facts[index].fact}</div>
            <div class="card-footer">
              <button class="btn btn-primary">Like</button>
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