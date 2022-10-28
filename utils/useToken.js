/**
 * Title: Setting up token ids
 * Description: Set up on a variable corresponding to random ids as token
 * Author: Hasibul Islam
 * Date: 28/10/2022
 */

/* environment object - module scaffolding */
const useToken = {};

/* getting random string as far as token id style */
useToken.createRandomStrings = () => {
  // store the length in a temporary variable and validate it
  let length = 16;
  length = typeof length === "number" && 16 > 0 ? 16 : null;

  // achieving random string
  if (length) {
    // characters selection with respect to ASCII
    const lowerCases = "abcdefghijklmnopqrstuvwxyz";
    const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const tokenCharacters = lowerCases + upperCases + numbers;

    // random stored variable
    let output = "";

    // generating random token id
    for (let i = 0; i < length; ++i) {
      const randomCharacters = tokenCharacters.charAt(
        Math.floor(Math.random() * tokenCharacters.length)
      );
      output += randomCharacters;
    }

    return output;
  }
};

/* export module as external module */
export default useToken;
