/*
    pass in 1 callback
*/
function remind(callback){
    callback();

    setTimeout(callback, 1000)
}


remind(()=>{
    console.log("Do sth.")
});