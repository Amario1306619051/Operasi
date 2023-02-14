function terjemahKataSandi(kataSandi) {
    kataSandi = kataSandi.split("")
    for (let i = 0; i < kataSandi.length; i ++){
      if(kataSandi[i] == "&" || kataSandi[i] == "%" || kataSandi[i] == "^"){
        kataSandi[i] = '';
      }
      else if (kataSandi[i] == "#"){
        kataSandi[i] = " "
      }
      else if(kataSandi[i] == "]"){
        kataSandi[i] = ","
      }
      else if(kataSandi[i] == "+"){
        kataSandi[i] = "A"
      }
      else if(kataSandi[i] == " "){
        kataSandi[i] = "E"
      }
    }
    kataSandi = kataSandi.join("")
    return(kataSandi)
  }
  
  console.log(terjemahKataSandi("&P%&+^S&^U&K+%N#1]#M&^+J^%%U#K #+^R&& +#2]#J+M#3#S^%%O&^R #"));