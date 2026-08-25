function getUser(id,callback){
    setTimeout(()=>{
        console.log("User Fetched");
        const user={
            id:1,
            username:"Ramesh"
        }
        callback(null,user)
},100)
}
function getProfile(userid,callback){
    setTimeout(()=>{
        console.log("Profile Fetched");
        const profile={
            username:"Ramesh"
        }
        callback(null,profile)
},1000)
}
function getPosts(profileusername,callback)
{
    setTimeout(()=>{
        console.log("Posts fetched");
        const posts=["post1","post2","post3"]
        callback(null,posts)
    },1000)
}
getUser(1,function(error,user)){
    if(error)
    {
        console.log(error);
        return ;
    }
    getProfile(user.id,function (error,profile)){
        if(error)
        {
            console.error(error);
            return;
        }
    
    getPosts(profile.username,function(error,posts)){
        if(error)
        {
            console.error(error);
            return;
        }
        console.log(`Posts fetched ${posts}`);
}}}