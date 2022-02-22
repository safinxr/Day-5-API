const lodeBady =() => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res =>res.json())
    .then(badys =>allFriend(badys))
}
const allFriend =(b)=>{
    const badys =b.results;
    const badysdiv =document.getElementById("bady")
    for(const bady of badys){
        const p =document.createElement("p");
        p.innerText =`Email: ${bady.email} Age: ${bady.dob.age}`;
        badysdiv.appendChild(p);
    }
}   