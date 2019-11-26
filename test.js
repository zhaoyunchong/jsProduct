class Test2{
	q1(){
		let array=[{
			name:'1',
			children:[{
				name:1
			},{
				name:2
			}]
		},{
			name:'2',
			children:[{
				name:3,
			},{
				name:4
			}]
		}]
		return array.map(v=>v.children.map(s=>s.name))
	}
	q2(){
		let array=[[1,5],[8,12],[5,8]];
		return [...new Set(array.flat())].sort();
	}
	q3(){
		let array=['a','b','d','g','g'];
		let results={}
		array.reduce((prev,curr)=>{
			if(curr in prev){
				prev[curr]++;
			}else{
				prev[curr]=1;
			}
			return prev;
		},results)
		return results;
	}
}
const arrayTest=new Test2();
console.log(arrayTest.q1());
console.log(arrayTest.q2());
console.log(arrayTest.q3());
