const sections = document.getElementsByClassName('margin')
for(let i = 0; i < sections.length; i++){
    const section = sections[i]
    section.style.marginTop = '50px'
}

// Task 1 The Hidden Message

const hiddenMessage = document.getElementById('hidden-message'); 

hiddenMessage.style.display = 'block';

const codedText = hiddenMessage.textContent

const decodedText = codedText.split("").reverse().join("");

const decodedMessage = document.getElementById('decoded-message');

function revealMessage(){
    decodedMessage.textContent = decodedText; 
}
const btn = document.querySelector('button')
btn.addEventListener('click', revealMessage);

// Task 2 Classified Files

function classifiedFiles(){
    const docs = document.getElementsByClassName('classified');
    
    for(let i = 0; i < docs.length; i++){
        const doc = docs[i];
        doc.style.width = '150px'

        const securityLevel = doc.getAttribute('data-security');
        if(securityLevel === "high"){
            doc.style.backgroundColor = 'red'
        } else if(securityLevel === 'medium'){
            doc.style.backgroundColor = 'yellow'
        } else if (securityLevel === 'low'){
            doc.style.backgroundColor = 'green'
        }
        
        const originalTxt = doc.textContent;
        doc.textContent = "Click Here"
        doc.addEventListener('click', function(){
            doc.textContent = originalTxt;
        })
    }

}

classifiedFiles()


// Task 3 Suspect Identification

function idenfityCriminal(criminal){
    const suspects = document.getElementsByClassName('suspect');
    for(let i = 0; i < suspects.length; i++){
        const suspect = suspects[i];

        const suspectData = suspect.getAttribute('data-clue')

        if(suspectData === criminal){
            const realCriminal = suspect.classList.add('prime-suspect')
            const identifyMsg = document.createElement('p')
            identifyMsg.textContent = "IDENTIFIED!!!"
            suspect.appendChild(identifyMsg);
        }
        

    }
}
idenfityCriminal("red-hat")


// Task 4 Digital Evidence Collection

function collectEvidences(){
    const evidences = document.querySelectorAll('[data-evidence="true"]')

    const ul = document.getElementById('evidence-log')
    const countElem = document.getElementById('evidence-count')
    let count = evidences.length
    countElem.textContent =  count;

    evidences.forEach(evidence => {
        const li = document.createElement('li');
        li.textContent = evidence.textContent;
        ul.appendChild(li);
        evidence.addEventListener('click', function(){
            evidence.textContent = "Collected"
            count--
            countElem.textContent = count
        })
    });
    
}

collectEvidences()

// Task 5 The Disappearing Records

const th = document.querySelectorAll('th');

const newData = document.createElement('input')
newData.type = 'text';
newData.placeholder = 'DATA ENTRY...';

const addBtn = document.createElement('button');
addBtn.textContent = "add"

th[0].replaceWith(newData)
th[1].replaceWith(addBtn);

const td = document.querySelectorAll('td')
const auditLog = document.getElementById('audit-log')

addBtn.addEventListener('click', function () {
    let newValue = td[0];
    newValue.textContent = newData.value

    const newLi = document.createElement('li')
    newLi.textContent = `Added: ${newValue.textContent}`;
    auditLog.prepend(newLi)

})

const deleteBtn = document.querySelector('onclick="deleteEntry(this)"') 

function deleteEntry(){
    let userValue = td[0].textContent;
    td[0].textContent = ""

    const newLi2 = document.createElement('li')
    newLi2.classList.add('delete')
    newLi2.textContent = `Deleted: ${userValue}`;
    auditLog.prepend(newLi2)
    
}

deleteBtn.addEventListener('click', deleteEntry)


function recoverLast() {
    const recoverBtn = document.getElementById('recoverButton')
    const lastDeleted = document.querySelector('.delete');
    if (lastDeleted) {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = lastDeleted.textContent;       
        recoverBtn.after(newParagraph);
    }
}
recoverBtn.addEventListener('click', recoverLast)