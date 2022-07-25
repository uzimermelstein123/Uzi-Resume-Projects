console.log("extension loaded");


let keyword = (localStorage.getItem("keyword")) ? localStorage.getItem("keyword") : undefined;

document.addEventListener("keypress", (event) => {
    if (event.ctrlKey && event.key === 'k') {
        keyword = prompt("Enter keyword you wish to not see");
        localStorage.setItem("keyword", keyword);
    }
});


// works like a charm!
walk(document.body);
function walk(node) {
    let children = node.childNodes;
    for (let i = 0; i < children.length; i++) { // Children are siblings to each other
        walk(children[i]);
    }
    if (node.textContent.toLowerCase().includes(keyword)) { // after we go deep, then check
        node.textContent = " ";
    }
}