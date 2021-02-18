const firstName = "Danil";
const lastName = "Dickout";
const age = 19;


let str;

/* str  = "<ul>" +
       `<li> First name: ${firstName}</li>`+
       `<li> Last name: ${lastName}</li>`+
       `<li> Age: ${age}</li>`+
       "</ul>"; */ // старый формат

str = `
    <ul>
       <li>First name: ${firstName}</li>
       <li>Last name: ${lastName}</li>
       <li>Age: ${age}</li>
       <li>Math.random: ${Math.random()}</li>
       <li> 5 + 5: ${ 5 + 5 }</li>
     </ul>
`;



console.log(str);

document.body.innerHTML = str;