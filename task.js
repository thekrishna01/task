function solution(dict){
var days={'mon':0,'tue':1,'wed':2,'thu':3,'fri':4,'sat':5,'sun':6};
let o=['mon','tue','wed','thu','fri','sat','sun'];
let order=[];
let arr=[];
let ar=[];
let ans=[];
for (var key in dict){
var value=key;
let a= key.slice(0,4);
let b=key.slice(5,7);
let c=key.slice(8,10);
const date= new Date(a,b+1,c);
const day=date.getDay();
for (var s in days){
  let val = days[s];
  if(val==day){
    arr.push(s);
  }else{
    continue;
  }
}
}
for (var z in dict){
    var w=z;
    var ww=dict[w];
    ar.push(ww);
}
for (var y in arr){
  let sum=0;
  let i=arr[y]; 
  for (var yy in arr){
    let ii=arr[yy];
    if(i==ii){
      sum=sum+ar[yy];
    }else{
      continue;
    }
  }
  ans.push(sum);
}
for (let t in arr){
  let ct=0;
  let rep=arr[t];
  for (let tt in arr){
    if(arr[tt]==rep){
      ct=ct+1;
    }else{
      continue;
    }
  }
  if(ct>1){
    delete arr[t];
  }
}

for(let p in o){
  for (pp in arr){
    if(o[p]==arr[pp]){
      order.push(ans[pp]);
    }
  }
}
var di={};
di['mon']=order[0];
di['tue']=order[1];
di['wed']=order[2];
di['thu']=order[3];
di['fri']=order[4];
di['sat']=order[5];
di['sun']=order[6];
console.log(di);
}
solution(dict= {'2020-01-01':4,'2020-01-02':4,'2020-01-03':6,'2020-01-04':8,'2020-01-05':2,'2020-01-06':-6,'2020-01-07':2,'2020-01-08':-2})
solution(dict= {'2021-02-01':4,'2021-02-02':4,'2021-02-03':6,'2021-02-04':8,'2021-02-05':2,'2021-02-06':-6,'2021-02-07':2,'2021-02-08':-2}) 