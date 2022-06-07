// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(typeof b); //object


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i=0;i<a.length;i++){
	a[i]=a[i]*2;
}
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
for(var i=0;i<colors.length;i++){
	if(Str!=null){
	var Str=Str+colors[i]+" ";
	}else{
		Str=colors[i]+" ";
	}
}
console.log(Str);

for(var i=0;i<colors.length;i++){
	if(Str2!=null){
	var Str2=Str2+"+"+colors[i];
	}else{
		Str2=colors[i];
	}
}
console.log(Str2);

for(var i=0;i<colors.length;i++){
	if(Str3!=null){
	var Str3=Str3+","+colors[i];
	}else{
		Str3=colors[i];
	}
}
console.log(Str3);


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function my(a,b){return a-b;});
console.log(a);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var obj =[];
var key =[];
 for(var i=0;i<a.length;i++){
	 var index = obj.indexOf(a[i]);
	 if(index==-1){
		 obj.push(a[i]);
		 key.push(1);
	 }else{
		 key[index]++;
	 }
 }
 console.log(obj);
 console.log(key);
 
 var max=0;
 var s;
 for(var i=0;i<key.length;i++){
	 if(key[i]>max){
		 max=key[i];
		 s = obj[i];
	 }
 }
 console.log(s);
 
 
 
 
 