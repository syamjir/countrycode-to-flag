class CountryFlagEmoji {
  // Private fields
  #code;
  #codePoints;
  // Private regular expression to check if the result is a valid flag emoji
  #flagRegex = /^(\uD83C[\uDDE6-\uDDFF]){2}$/;

  constructor(code) {
    this.#code = code.toUpperCase();
    this.#codePoints = this.#code
      .split("")
      .slice(0, 2) // Take only the first two characters
      .map((char) => char.charCodeAt(0) + 0x1f1e6 - "A".charCodeAt(0));
  }

  getFlag() {
    // get flag emoji
    return String.fromCodePoint(...this.#codePoints);
  }

  checkCodeValid() {
    // check whether code is valid or not
    const flag = this.getFlag();
    if (this.#flagRegex.test(flag)) {
      return "This is a valid country code";
    } else {
      return "Invalid country code";
    }
  }
}

function convertToFlag(code) {
  return new CountryFlagEmoji(code);
}

export default convertToFlag;
