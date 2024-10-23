//concatenate
let str1 = "suri";
let str2 = "babu";
let concate = str1 + str2;
console.log(concate)
console.log(str1 + ' ' + str2)
console.log(`${str1} ${str2}`)

//length
console.log(concate.length)
console.log(str1.length)


//charAt
console.log(str1[1])
console.log(str1.charAt(0))


//LowerCase and Uppercase
console.log(str1.toLowerCase())
console.log(str1.toUpperCase())


//Index //includes //startswith //endswith
console.log(str1.indexOf('s'))
console.log(str1.includes('uri'))
console.log(str1.startsWith('su'))
console.log(str1.endsWith('ri'))


//Slice
console.log(str1.slice(1,2))
console.log(str1.slice(1,4))

//substring and substr
console.log(str1.substring(1,4))
console.log(str1.substr(1,3))


//replacing substring
let str3 = "hello world";
console.log(str3)
console.log(str3.replace('world' ,'suri'))



//split
let text = "this is suri from vijayawada";
console.log(text)
let splittext = text.split()
console.log(splittext)
let spacesplit = text.split(' ')
console.log(spacesplit)
console.log(spacesplit[2])
console.log(spacesplit[4])



//trim
let trimtext = "  Hello   ";
console.log(trimtext)
let trim = trimtext.trim();
console.log(trim)
console.log(trimtext.trimStart())
console.log(trimtext.trimEnd())



let text10 = "uuihy";
let text12 = "World";
let text03 = text10.concat(" ", text12);
console.log(text03)
