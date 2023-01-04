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
            })
    }
    getData();

    function coffeeMenu() {
        
    }


    // end of DOMContentLoaded
})
