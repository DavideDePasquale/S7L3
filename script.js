const fetchEs = () => {
    fetch("https://striveschool-api.herokuapp.com/books")



        .then(respObj => {
            console.log(respObj)

            if (respObj.ok) {
                return respObj.json();
            }
        })
        .then(oggettiBook => {
            const card = document.getElementById("card-container");
            console.log(oggettiBook);
            oggettiBook.forEach(element => {
                const col = document.createElement("div");
                col.className = "col-12 col-sm-4 my-2 border bg-dark-subtle text-dark-emphasis";
                const img = document.createElement("img");
                const h5 = document.createElement("h5");
                const btnRemove = document.createElement("button");
                const btnBuy = document.createElement("Button");
                const cite = document.createElement("p");
                cite.class

                btnBuy.classList = "btn btn-success mx-3";
                btnRemove.className = "btn btn-danger";
                img.style.width = "50%";
                img.src = element.img;
                cite.innerText = "€" + element.price;
                h5.innerText = element.title;
                btnBuy.innerText = "Acquista";
                btnRemove.innerText = "Scarta";

                col.appendChild(img);
                card.appendChild(col);
                col.appendChild(h5);
                col.appendChild(btnBuy);
                col.appendChild(btnRemove);
                h5.appendChild(cite);


                btnRemove.addEventListener("click", function () {
                    card.removeChild(col);
                })

            });

        })
        .catch(err => console.log(err));
};





window.onload = () => {
    fetchEs();
}