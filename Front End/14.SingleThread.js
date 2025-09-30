//Java is a singlethreaded language meaning it can only do one thing at a time. But many times we cannot wait for each task to be completed before
//executing another task. So when we use setTimeout it is actually our browser which is doing the multithreading.
//Because of this waiting we have now made javascript asynchronous

setTimeout(()=>{
    console.log('Hello');
},2000);

setTimeout(()=>{
    console.log('Good Morning');
},2000);

console.log('Umar');