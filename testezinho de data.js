var data1 = new Date();
//data1 = data atual
var data2 = new Date("September 31, 2000 23:59:59");
//data2 = 31 de Setembro de 2000, às 23:59
var data3 = new Date(7890787445);
//data3 = baseada nos milisegundos passados a partir de 1 de Janeiro de 1970
var data4 = new Date(2004, 4, 17, 17, 0, 0);
//data4 = 17 de Maio de 2004, às 20:00
var data5 = new Date(2014,11,8,13,10,30,0);
        document.write(data + "<br/>");
        document.write(data.toUTCString()+ "<br/>");
        document.write(data.toDateString());
console.log(data1);
console.log(data2);
console.log(data3);
console.log(data4);