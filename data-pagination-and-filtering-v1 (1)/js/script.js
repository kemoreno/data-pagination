/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page){
   let startIndex = (page * 9) - 8;
   let endIndex = page * 9;
   const ul = document.querySelector(".student-list");
   ul.innerHTML = "";

   for(let i = 0; i < list.length; i++){
      if(i >= startIndex && i <= endIndex){
         const li = document.createElement("li");
         li.className = "student-item cf";
         const div = document.createElement("div");
         div.className = "student-details";
         const img = document.createElement("img");
         img.className = "avatar";
         img.src = `${list[i].picture.thumbnail}`;
         const h3 = document.createElement("h3");
         h3.textContent= `${list[i].name.first}`;
         const span = document.createElement("span");
         span.className = "email";
         span.textContent = `${list[i].email}`;

         const div2 = document.createElement("div");
         div2.className = "joined-details";
         const span2 = document.createElement("span");
         span2.className = "date";
         span2.textContent = `${list[i].registered.date}`;

         ul.appendChild(li);
         li.appendChild(div);
         div.appendChild(img);
         div.appendChild(h3);
         div.appendChild(span);

         li.appendChild(div2);
         div2.appendChild(span2);
      }
   }
}
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list){
   let numOfPages = Math.ceil(list.length/9);
   const ul = document.querySelector(".link-list");
   ul.innerHTML = "";

   for(let i = 0; i < numOfPages; i++){
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = `${i +1}`;
      li.appendChild(button);
      ul.appendChild(li);
      const firstButton = document.querySelector("button");
      firstButton.className = "active";
   }

   ul.addEventListener("click", (e) => {
      const buttons = document.getElementsByTagName("BUTTON");
      let clickedButton = e.target;

      for(let i = 0; i < buttons.length; i++){
         if(buttons[i].classList.contains("active")){
            buttons[i].classList.remove("active");
         }
      }

      clickedButton.className = "active";
      const page = clickedButton.textContent;
      showPage(list,page);
   });


}

// Call functions

showPage(data, 1);
addPagination(data);
