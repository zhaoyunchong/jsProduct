
return new Promise(function(resolve,reject){
	setTimeout(function(){
	console.log('111!');
	resolve();
	},3000);
}).then(()=>{
	return new Promise(function(resolve,reject){
		setTimeout(function(){
		console.log('222!');
		resolve();
		},3000);
	})
}).then(()=>{
	setTimeout(function(){
		console.log('333!');
	},3000);
})