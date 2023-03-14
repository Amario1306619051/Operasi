//Menambahkan paragraf pada suatu parents 
const paragrafBaruSectionB = document.createElement('p')
const TulisanParagrafBaruSectionB = document.createTextNode('paragraf baru')
paragrafBaruSectionB.appendChild(TulisanParagrafBaruSectionB)

const SectionB = document.getElementById('b')
SectionB.appendChild(paragrafBaruSectionB)