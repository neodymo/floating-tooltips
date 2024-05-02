document.querySelectorAll("[data-tooltip]").forEach(function(el) {
    el.addEventListener("mouseover", event => tooltipManager(event));
    el.addEventListener("mousemove", event => tooltipManager(event));
    el.addEventListener("mouseleave", event => tooltipManager(event));
});

const tooltipManager = (event) => {
    let n = document.getElementById("tooltip");
    if(event.type === "mouseleave") {
        n.style.opacity = 0;
        setTimeout(() => { n.remove() }, 50); // the same interval of opacity css transition
    } else {
        const attr = JSON.parse(event.currentTarget.dataset.tooltip);
        if(n === null) {
            n = document.createElement("div");
            document.body.insertBefore(n, document.body.firstChild);
            n.id = "tooltip";
            n.textContent = attr.text;
            n.style.opacity = 1;
            n.addEventListener("mouseover", document.getElementById(""))
        }
        let posX = event.pageX - (n.offsetWidth * (event.pageX / document.documentElement.clientWidth));
        n.style.left = posX + "px";
        n.style.top = (event.pageY - n.offsetHeight - window.scrollY) + "px";
    }
}
