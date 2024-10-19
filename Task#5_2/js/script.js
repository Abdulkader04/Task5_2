class Converter {
  constructor(
    numberToConvert,
    unitOfNumber,
    unitToConvert,
    buttonConvert,
    result
  ) {
    this.numberToConvert = numberToConvert;
    this.unitOfNumber = unitOfNumber;
    this.unitToConvert = unitToConvert;
    this.result = result;
    this.buttonConvert = buttonConvert;
  }

  convert() {
    const number = parseFloat(this.numberToConvert.value);

    if (isNaN(number) || this.numberToConvert.value == "") {
      this.result.textContent = "Please enter a valid number.";
      this.result.style.display = "block";
      return;
    }

    let convertedValue = number;

    switch (this.unitOfNumber.value) {
      case "m":
        convertedValue = number;
        break;
      case "km":
        convertedValue = number * 1000;
        break;
      case "cm":
        convertedValue = number / 100;
        break;
      default:
        this.result.textContent = "Invalid from unit.";
        return;
    }

    switch (this.unitToConvert.value) {
      case "m":
        break;
      case "km":
        convertedValue = convertedValue / 1000;
        break;
      case "cm":
        convertedValue = convertedValue * 100;
        break;
      default:
        this.result.textContent = "Invalid to unit.";
        return;
    }

    this.result.textContent = `${this.numberToConvert.value} ${
      this.unitOfNumber.value
    } equals ${convertedValue.toFixed(5)} ${this.unitToConvert.value}`;

    this.result.style.display = "block";
  }

  clear() {
    this.result.style.display = "none";
    this.numberToConvert.value = "";
  }

  addConvertListener() {
    this.buttonConvert.addEventListener("click", () => this.convert());
    this.numberToConvert.addEventListener("focus", () => this.clear());
  }
}

const numberToConvert = document.querySelector("[data-number]");
const unitOfNumber = document.querySelector("[data-from]");
const unitToConvert = document.querySelector("[data-to]");
const buttonConvert = document.querySelector("[data-conv]");
const result = document.querySelector("[data-result]");

const conver = new Converter(
  numberToConvert,
  unitOfNumber,
  unitToConvert,
  buttonConvert,
  result
);
conver.addConvertListener();
