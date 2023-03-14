//Menambahkan paragraf pada suatu parents 
const paragrafBaruSectionB = document.createElement('p')
const TulisanParagrafBaruSectionB = document.createTextNode('paragraf baru')
paragrafBaruSectionB.appendChild(TulisanParagrafBaruSectionB)

const SectionB = document.getElementById('b')//section B
SectionB.appendChild(paragrafBaruSectionB)

const ParagrafLamaSectionB = SectionB.querySelector('p')

const ParagrafBaru = document.createElement('h2')
const TulisanParagrafBaru = document.createTextNode('Judul baru')
ParagrafBaru.appendChild(TulisanParagrafBaru)

SectionB.replaceChild(ParagrafBaru, ParagrafLamaSectionB)

//insertbefore
const item = document.createElement('li')
const tulisanItem = document.createTextNode('item baru')
item.appendChild(tulisanItem)

//cari item sebelumnya
const calonNomorTiga = SectionB.querySelector('ul li:nth-child(2)')
const ulSectionB = SectionB.querySelector('ul')
ulSectionB.insertBefore(item, calonNomorTiga)


//insert before part 2
const paragrafDuaKomaLima = document.createElement('p')
const isiParagrafDuaKomaLima = document.createTextNode('Paragraf 2.5')
paragrafDuaKomaLima.appendChild(isiParagrafDuaKomaLima)

const p3 = document.getElementsByClassName('p3')[0]
const sectionA = document.getElementById('a')
sectionA.insertBefore(paragrafDuaKomaLima, p3)