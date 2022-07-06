function getNonce() {
  const possibleCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let text = "";

  for (let i = 0; i < 32; i++) {
    text += possibleCharacters.charAt(
      Math.floor(Math.random() * possibleCharacters.length),
    );
  }

  return text;
}

export default getNonce;
