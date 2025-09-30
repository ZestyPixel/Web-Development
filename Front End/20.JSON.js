let jsonData = '{"fact":"Like humans, cats tend to favor one paw over another","length":52}';

let parse = JSON.parse(jsonData); //String to JS object

console.log(parse.fact);

let student = {
    name: 'student',
    marks: 95,
};

let jsD = JSON.stringify(student); //JS object to string

console.log(jsD);

//AJAX - ASYNCHRONOUS JAVASCRIPT AND XML
//AJAJ - ASYNCHRONOUS JAVASCRIPT AND JSON