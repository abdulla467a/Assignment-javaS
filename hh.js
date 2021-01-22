var friends = ['ajad','labib','khalil','evanexpo','siam','rana','sohan'];
var maxWord =friends[0];
var biggestName = megaFriend(friends);
function megaFriend(friends)
{
for(var i=1; i<friends.length; i++){
    var element = friends[i];

   
if(element.length>maxWord.length){
    maxWord = element;
}
}
return maxWord;
}
console.log(biggestName);