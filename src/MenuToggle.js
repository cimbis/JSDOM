class MenuToggle {
    /**
     * @param {Element} menuButton
     */
    constructor(menuButton) {
        console.log('MenuToggle | CTOR');

        this.handleKeydown = this.handleKeydown.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.menuButton = menuButton;
        this.menuButton.addEventListener('keydown', this.handleKeydown);
        this.menuButton.addEventListener('click', this.handleClick);
    }

    handleKeydown() {
        console.log("key down")
    }

    handleClick() {
        console.log("click")
    }
}

export { MenuToggle }