
module.exports = function check(str, bracketsConfig) {

  bracketsConfig = bracketsConfig.flat()

  let stack = []
  let bracketsIndex;

  for (let bracket of str) {
    bracketsIndex = bracketsConfig.indexOf(bracket);

    if (bracketsConfig[bracketsIndex] === bracketsConfig[stack[stack.length - 1]]) {
      stack.pop()
    }
    else {
      stack.push(bracketsIndex + 1)
    }
  }

  return stack.length === 0
}


