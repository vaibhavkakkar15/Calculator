let inp = document.querySelector("input");

let btn = document.querySelectorAll("button");

for (let buttons of btn) {
  buttons.addEventListener("click", function (e) {
    let btnText = e.target.innerText;
    if (btnText === "AC") {
      //   inp.innerText = "";
      inp.value = ""; //remove everything in input box
    } else if (btnText === "=") {
      try {
        inp.value = eval(inp.value);
      } catch {
        inp.value = "Error  ha bhai";
      }
    } else {
      //jb bhi click kro btn pe input box mei  show ho
      inp.value = inp.value + btnText;
    }
  });
}
