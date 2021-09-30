var wrapperEle = document.body.querySelector(".wrapper")

var warriors = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    }
]

for(var i=0; i<warriors.length; i++){
    if(warriors[i].damage<2) {
        continue;
    }
    if(warriors[i].health<10) {
        continue;
    }
    if(warriors[i].warrior===false) {
        continue;
    }
    var ele = document.createElement("div");
    var nameEle=document.createElement("h2");
    var damageEle=document.createElement("h4");
    var healthEle=document.createElement("h4");
    var warriorEle=document.createElement("h4");
    nameEle.innerHTML="Name: "+warriors[i].name;
    healthEle.innerHTML="Health: "+warriors[i].health;
    damageEle.innerHTML="Damage: "+warriors[i].damage;
    if(warriors[i].warrior===true){
        warriorEle.innerHTML="Warrior"
    }else if(warriors[i].warrior===false){
        warriorEle.innerHTML="Is not a warrior"
    }
    if(warriors[i].name.includes("a")){
        nameEle.style.color = '#FF0000';
        healthEle.style.color = '#FF0000';
        damageEle.style.color = '#FF0000';
        warriorEle.style.color = '#FF0000';
    }
    ele.appendChild(nameEle);
    ele.appendChild(healthEle);
    ele.appendChild(damageEle);
    ele.appendChild(warriorEle);
    wrapperEle.appendChild(ele);
}