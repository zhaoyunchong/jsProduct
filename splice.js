var arr=[1,2,3,4];
var str='zhao yunchong';
//splice(index,count,newItem1)  开始删除元素下标 删除几个元素 往数组中添加元素 返回删除的元素以数组形式返回  影响原来的数组
var newArr=arr.splice(1,2,5);
// console.log(newArr);
// console.log(arr);
//slice(start,end) start开始下标  end结束下标 但不包括结束下标所对应的元素 责怪知识截取原来的数组 但并不影响原来的数组 原数组不变  slice 不写第二个参数的话 直接截取到最后  可以写负数  表示从后面 开始截取
var arr1=[1,2,3,4,5,6,7,8];
console.log(arr1.slice(1,2),arr1);
//substring(start,end) 开始下标和结束下标  不包括结束下标的元素 如果是负数的话  直接转换成0表示 从头到尾都截取出来
// console.log(str.substring(0,2),str);
// substr(start,count)
// console.log(str.substr(-2),str);
