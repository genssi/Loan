class AccordionMini {
    constructor(btns) {
        this.btns = document.querySelectorAll(btns);
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener("click", () => {
                const sibling = btn.closest(".module__info-show").nextElementSibling;

                sibling.classList.toggle("msg");
                sibling.style.marginTop = "20px";
                sibling.classList.add("animated", "fadeInUp");
            });
        });
    }
}

export default AccordionMini;