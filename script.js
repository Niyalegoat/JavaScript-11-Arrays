const foods = ["Pizza", "Tacos", "Sushi", "Burgers", "Salad"]
    const list = document.getElementById("foodLISt")

    for(let i = 0; i < food.length; i++) {
        const li = document.createElement("li");
        li.textContent = foods[i];
        list.appendChild(li);
    }

const quotes = [ "Believe in yourself.", "Keep going, you're doing great!", "Never stop learning.", "Strive for progress, not perfection.", " Every day is a second chance." ]

    function showQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById("quoteDisplay").textContent = quote[randomIndex];
    }

    const mname = ["Kayla", "Chris", "Jordan", "Ava", "Miles"];
    function searchName() {
        const userInput =
        document.getElementById("searchBox").ariaValueMax.trim();
            const result = names.include(userInput);
        document.getElementById("searchResult").textCOntent = result

        ? `${userInput} is in the list.`
        : `${userInput}was not found`;
    }
    const images = [
    "https ://via.placeholder.com/200x150?text=1" , 

    "https :// via.placeholder.com/200x150?text=2" , 

    https : //via.placeholder.com/200x150?text=3];

    let index = 0 ; 

    function showImage() {
    document.getElementById(gallery).src = 
    images[index];
    }
    function showImage() {
        index = (index + 1) % images.length;
       showImage();
    }
    function prevImage (){
        index = (index - 1 + images.length ) % images. length;
        showImages(); 
    }
    showImage();
    ]

    const colors = ["lightblue", " lightgreen", "lavender", "peachpuff", "lightgray"];
    let colorIndex = 0;

    function changeColor(){
        document.body.style.backgroundColor = 
        colors[colorIndex];
        colorIndex = (colorIndex + 1 ) % colors.length;
    }