const mainText = "Hi, my name is Alletah Maaroganye, an aspiring ";
const smallText = "Software Developer | Graphic Designer | Freelancer";
let index = 0;
let isMainTextDone = false;

function type() {
    if (!isMainTextDone && index < mainText.length) {
        document.getElementById("typing-text").innerHTML += mainText.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust speed here
    } else if (!isMainTextDone) {
        isMainTextDone = true;
        index = 0;
        document.getElementById("typing-text").innerHTML += `<br><small class="small-text"></small>`;
        setTimeout(type, 500); // Small pause before typing the small text
    } else if (index < smallText.length) {
        document.querySelector(".small-text").innerHTML += smallText.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust speed here
    }
}

// Start the typing effect when the page loads
window.onload = type;