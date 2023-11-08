class npcs {
  constructor(seat, width, height, iconSrc) {
    this.seat = seat;

    this.width = width;
    this.height = height;
    this.element = document.createElement("img");
    this.element.src = iconSrc;

    if (this.seat) {
      this.seat.appendChild(this.element);
    }
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.seat.appendChild(this.element);
  }
}
