
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

    function coffeeDescription(coffee) {
      descriptionImg.src = coffee.image;
      coffeeName.textContent = coffee.title;
      description.textContent = coffee.description;

      const ingredientList = document.createElement("ul")
      ingredients.append(ingredientList);

      coffee.ingredients.forEach(ingredient => {
        const coffeeIngredient = document.createElement("li");
        coffeeIngredient.textContent = ingredient;

        ingredientList.append(coffeeIngredient);
      })
    }
