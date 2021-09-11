/*var response = require('./method.js');
console.log(response.update());
console.log(response.add(1,1));
console.log(response.pi);
response.data.deleteUser();*/

/*var fs=require('fs');
var readMe=fs.readFileSync('code.txt','utf8');
console.log(readMe);
fs.mkdir('Project',function(){
  fs.writeFileSync('./Project/Readme.txt',readMe);
});*/

//var buf=new Buffer("123456");
//console.log(buf);
//console.log(buf.toString());

//var buf=new Buffer.alloc(26);
//len=buf.write("123567");
//console.log(len.toString());
//console.log(buf.toString());

/*for(var i=0;i<26;i++){
  buf[i]=i+97;
}
//var json=buf.toJSON(buf);
console.log(json);*/
//console.log(buf.toString('ascii'));

/*var buf1=new Buffer("Jira");
var buf2=new Buffer("Chin");
var buf3=Buffer.concat([buf1,buf2]);
console.log(buf3.toString());*/

var fs=require('fs');
var data='';
var readStream=fs.createReadStream('code.txt');
readStream.setEncoding('utf8');
readStream.on('data',function(txt){
  data+=txt;
});
readStream.on('end',function(){
  console.log(data);
});
readStream.on('error',function(err){
  console.log(err.stack);
});
