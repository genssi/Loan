class Download {
    constructor(btns) {
        this.btns = document.querySelectorAll(btns);
        this.path = 'assets/img/mainbg.jpg';
    }

    downloadItem(path) {
        const element = document.createElement('a');
        element.setAttribute('href', path);
        element.setAttribute('download', 'nice-picture');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener("mouseenter", () => {
                btn.style.cursor = 'pointer';
            });

            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                this.downloadItem(this.path);
            });
        });
    }
}

export default Download;