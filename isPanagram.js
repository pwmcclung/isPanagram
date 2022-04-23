function isPangram(string){
  let letters = ['a','b', 'c','d','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let str = string.toLowerCase();
  let arr = Array.from(str)
  if (letters.every( r => arr.includes(r))){
    return true
  }else{
    return false
  }
}
