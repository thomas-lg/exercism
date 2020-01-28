export class Triangle {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  isTriangle() {
    return (
      this.x + this.y > this.z &&
      this.x + this.z > this.y &&
      this.y + this.z > this.x
    );
  }

  isEquilateral() {
    return this.isTriangle() && this.x === this.y && this.x === this.z;
  }

  isIsosceles() {
    return (
      this.isTriangle() &&
      (this.x === this.y || this.x === this.z || this.y === this.z)
    );
  }

  isScalene() {
    return this.isTriangle() && !this.isIsosceles();
  }
}
