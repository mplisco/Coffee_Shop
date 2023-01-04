document.addEventListener("DOMContentLoaded", () => {


    const url = "https://api.sampleapis.com/coffee/hot"

    let globalCoffee;

    const getData = () => {
        fetch(url)
            .then(res => res.json())
            .then(coffeeDrinks => {
                coffeeDrinks.map(coffee => {
                    globalCoffee = coffee;
                    coffeeMenu(globalCoffee);
                })

                coffeeDescription(coffeeDrinks[0]);
            })
    }

    getData();

    const coffeeMenuDiv = document.querySelector("div#coffee-menu");

    function coffeeMenu(coffee) {
     const coffeeImg = document.createElement("img");
     coffeeImg.src = coffee.image;

     coffeeImg.addEventListener("mouseover", (e) => {
         e.target.style.height = "75px"
          e.target.style.width = "75px"

          setTimeout(() => {
          e.target.style.height = ""
          e.target.style.width = ""
          }, 500)
     })

     coffeeImg.addEventListener("click", () => {
        globalCoffee = coffee
        coffeeDescription(globalCoffee);
     })

     coffeeMenuDiv.append(coffeeImg)
    }

    const descriptionImg = document.querySelector("img.coffee-img")
    const coffeeName = document.querySelector("h2.name")
    const description = document.querySelector("h3.description")
    const ingredients = document.querySelector("div#coffee-ingredients")
    const price = document.querySelector("h4#coffee-cost");

     const ingredientList = document.createElement("ul")
     ingredients.append(ingredientList);

    function coffeeDescription(coffee) {
      descriptionImg.src = coffee.image;
      coffeeName.textContent = coffee.title;
      description.textContent = coffee.description;

      if(coffee.ingredients.length === 1) {
        price.textContent = "$1.25";
      } else if(coffee.ingredients.length === 2) {
        price.textContent = "$2.00"
      } else if(coffee.ingredients.length >= 3) {
        price.textContent = "$3.50"
      }

        ingredientList.replaceChildren()
     coffee.ingredients.forEach(ingredient => {
        const coffeeIngredient = document.createElement("li");
        coffeeIngredient.innerText = ingredient;


        ingredientList.append(coffeeIngredient);
    })
    }






    // END OF DOMCONTENTLOADED
})
