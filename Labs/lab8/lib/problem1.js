const img = document.querySelector("img");
img.src="https://upload.wikimedia.org/wikipedia/th/thumb/7/78/ENG_KKU_Symbol.svg/1280px-ENG_KKU_Symbol.svg.png?utm_source=th.wikipedia.org&utm_campaign=index&utm_content=thumbnail";

const link = document.createElement("a");
link.href = "https://www.en.kku.ac.th";
link.appendChild(img);
document.querySelector("section").insertBefore(link, document.querySelector("p"));
document.querySelector("p").style.textAlign = "center";

const newP = document.createElement("p");
newP.textContent = "We hope you enjoy learning";
document.querySelector("section").appendChild(newP);
newP.style.color = "white";
newP.style.fontSize = "24px";
newP.style.backgroundColor = "black";
newP.style.padding = "10px";
newP.style.textAlign = "center";

document.title = "KKU Engineering";