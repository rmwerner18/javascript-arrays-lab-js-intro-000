var kittens = ["Milo", "Otis", "Garfield"]
var destructivelyAppendKitten = (name) => {return kittens.push(name)}
var destructivelyPrependKitten = (name) => {return kittens.unshift(name)}
var destructivelyRemoveLastKitten = () => {return kittens.pop()}
var destructivelyRemoveFirstKitten = () => {return kittens.shift()}
var appendKitten = (name) => {return [...kittens, name]}
var prependKitten = (name) => {return [name, ...kittens]}
var removeLastKitten = (name) => {kittens.slice(0, kittens.length - 1)}; return kittens}





 //define your array here

// Add your functions and code here
