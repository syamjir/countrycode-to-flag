# CountryFlagEmoji Package

A JavaScript package to convert country codes to flag emojis and validate them.

## Overview

This package provides a class, `CountryFlagEmoji`, that allows you to convert country codes into their corresponding flag emojis. It also includes a function, `convertToFlag`, to easily instantiate the `CountryFlagEmoji` class.

## Features

- Convert a country code to its flag emoji.
- Validate if a given country code corresponds to a valid flag emoji.

## Installation

To install this package, use npm:

```bash
npm install country-code-flag-emojis
```

## Usage

```javascript
import convertToFlag from "./path-to-your-package";

// Convert country code to flag emoji
const flagEmoji = convertToFlag("US");
console.log(flagEmoji.getFlag()); // Output: 🇺🇸

// Check if the country code is valid
console.log(flagEmoji.checkCodeValid()); // Output: This is a valid country code
```
