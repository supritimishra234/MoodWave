document.addEventListener("DOMContentLoaded", function () {

    let wallBox = document.querySelector(".wall-box");
    let cards = document.querySelectorAll(".card");


   function showWallpapers(list) {

    wallBox.innerHTML = "";

    list.forEach(function (img) {

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = img;

        let btn = document.createElement("button");
        btn.innerText = "Download";

        btn.onclick = function () {
            window.open(img);
        };

        div.appendChild(image);
        div.appendChild(btn);

        wallBox.appendChild(div);

    });

   

}

    if (cards.length >= 4) {

        // HAPPY

        cards[0].addEventListener("click", function () {

            window.open(
                "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC",
                "_blank"
            );

            showWallpapers([
                "https://picsum.photos/300/200?1",
                "https://picsum.photos/300/200?2",
                "https://picsum.photos/300/200?3"
            ]);

        });


        // SAD

        cards[1].addEventListener("click", function () {

            window.open(
                "https://open.spotify.com/playlist/37i9dQZF1DX7qK8ma5wgG1",
                "_blank"
            );

            showWallpapers([
                "https://picsum.photos/300/200?4",
                "https://picsum.photos/300/200?5"
            ]);

        });


        // RELAX

        cards[2].addEventListener("click", function () {

            window.open(
                "https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6",
                "_blank"
            );

            showWallpapers([
                "https://picsum.photos/300/200?6",
                "https://picsum.photos/300/200?7"
            ]);

        });


        // ENERGY

        cards[3].addEventListener("click", function () {

            window.open(
                "https://open.spotify.com/playlist/37i9dQZF1DX70RN3TfWWJh",
                "_blank"
            );

            showWallpapers([
                "https://picsum.photos/300/200?8",
                "https://picsum.photos/300/200?9"
            ]);

        });

    }

});
 function toggleMode() {

    document.body.classList.toggle("dark");

}