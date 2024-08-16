
function leetSpeak(text) {
  //write your code here
 return text.toUpperCase()
    .replace(/O/g, '0')
    .replace(/I/g, '1')
    .replace(/L/g, '1')
    .replace(/Z/g, '2')
    .replace(/E/g, '3')
    .replace(/A/g, '4')
    .replace(/S/g, '5')
    .replace(/G/g, '6')
    .replace(/T/g, '7')
    .replace(/B/g, '8');
  
}
console.log(leetSpeak("hogy vagy"))
module.exports = leetSpeak