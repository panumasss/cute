const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// เมื่อคลิกปุ่ม Yes
yesBtn.addEventListener("click", () => {
    question.innerHTML = "kiss kiss";
    gif.src = "https://i.pinimg.com/originals/b4/9d/20/b49d20d0df6421ac97215064a9c694e5.gif";
});

// เมื่อเมาส์เคลื่อนที่เหนือปุ่ม No
noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // ใช้ `style` แทน `Style`
    noBtn.style.position = "absolute"; // เพิ่มการตั้งค่าตำแหน่ง
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

