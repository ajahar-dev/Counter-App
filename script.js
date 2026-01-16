  let btn = document.querySelector("#btn");
        let rst = document.querySelector("#rst");
        let int = document.querySelector(".input");

        let i = 1;
        btn.addEventListener("click", () => {
            int.value = i++;
        })
        rst.addEventListener("click", () => {
            int.value = "0";
            i = 1;
        })