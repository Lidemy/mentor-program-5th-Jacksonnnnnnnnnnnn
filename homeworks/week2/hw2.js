function capitalize(str) {
  if ((/[a-zA-Z]/).test(str[0]) == true) {
      str2 = str[0].toUpperCase() + str.slice(1)
      return str2;
  } else {
      return str;
  }
}

console.log(capitalize(',hello'));
