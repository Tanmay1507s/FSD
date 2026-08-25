const fetchUserData = new Promise((resolve,reject)=>{
    let success=true;
    setTimeout(()=>{
        if(success){
        resolve({id:101,username:"Suresh"});
        }else{
            reject("failed to fetch the user data");
        }
    },1000);
});
fetchUserData.then((user)=>{
    console.log(user);
})
.catch((err=>{
    console.log(err);
}))
const promise1=new Promise((resolve,reject)=>{
    let success=true
    if(success)
    {
        resolve({
            id:124589,
            username:"Tanmay"
        })
    }
    else{
        reject({
            message:"Data not fetched",
            success: false
        })
    }
})
const promise2=new Promise((resolve,reject)=>{
    let success=false
    if(success)
    {
        resolve({
            id:65789,
            username:"Suresh",
            location:"Ghaziabad"
        })
    }
    else{
        reject({
            message:"Data not fetched",
            success:false
        })
    }
})
function fetchUserData(){
Promise.all([promise1,promise2])
.then((response)=>{
    console.log(response.message);
})
.catch((error)=>{
    console.log(error);
})
Promise.allSettled([promise1,promise2])
.then((response)=>{
    console.log((response));
})
.catch((error)=>{
    console.log(error);
})
Promise.any([promise1,promise2])
.then((response)=>{
    console.log("Response from 1st .then");
    return response
})
.then((response2)=>{
    console.log("Response from 2nd .then");
    console.log(response2);
})
.catch((error)=>{
    console.log(error);
});
}
async function getUser()
{
    try{
        const user=await fetchUserData()
        console.log(user);
    } catch(error){
        console.log(error);
    }
}
getUser()
