function truncateString(str, l) {
  return str.length > l ? str.substring(0, l) + "..." : str;
}

export default truncateString;
