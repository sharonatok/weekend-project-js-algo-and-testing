/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */



const longestCommonPrefix = function (strs) {
      let prefix = "";
      if (strs.length === 0) return prefix;
      for (let i = 0; i < strs[0].length; i++) {
          const character = strs[0][i];
          for (let j = 0; j < strs.length; j++) {
           if (strs[j][i] !== character) return prefix;   
          }
          prefix = prefix + character
      }
      return prefix
    }

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))

module.exports = longestCommonPrefix;
