//Menambahkan paragraf pada suatu parents 
const paragrafBaruSectionB = document.createElement('p')
const TulisanParagrafBaruSectionB = document.createTextNode('paragraf baru')
paragrafBaruSectionB.appendChild(TulisanParagrafBaruSectionB)

const SectionB = document.getElementById('b')
SectionB.appendChild(paragrafBaruSectionB)

const ParagrafLamaSectionB = SectionB.querySelector('p')

const ParagrafBaru = document.createElement('h2')
const TulisanParagrafBaru = document.createTextNode('Judul baru')
ParagrafBaru.appendChild(TulisanParagrafBaru)

SectionB.replaceChild(ParagrafBaru, ParagrafLamaSectionB)