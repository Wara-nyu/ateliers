function findLongest(str) {
  
  const spl = str.split(" ");
  let longest = 0
  
  for (let i = 0; i < spl.length; i++) (
    if (spl[i].length > longest) {
      longest = spl[i].length;
      console.log("ici if");
    }
    console.log("ici for");
  }
  return longest
}

console.log(findLongest("le confinement ça vous gagne! x_x"))
