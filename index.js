document.querySelector('.button').addEventListener('input', function () {
  
  var printError = function(error, explicit) {
}
  const urlname = document.getElementById('poke').value;  
  console.log(urlname);
    fetch('https://pokeapi.co/api/v2/pokemon/'+urlname)
    
      .then((response) => {
        return response.json();
      })
      .catch(function (err) {
      printError(err, false);
      return false
      })
      
      .then((myContent) => {
        const myContentHP = JSON.stringify(myContent.stats["0"].base_stat, null, '<br>');
        const myContentAttack = JSON.stringify(myContent.stats["1"].base_stat, null, '<br>');
        const myContentDefense = JSON.stringify(myContent.stats["2"].base_stat, null, '<br>');
        const myContentSpeAttk = JSON.stringify(myContent.stats["3"].base_stat, null, '<br>');
        const myContentSpeDefe = JSON.stringify(myContent.stats["4"].base_stat, null, '<br>');
        const myContentSpeed = JSON.stringify(myContent.stats["5"].base_stat, null, '<br>');
        const myContentName = JSON.stringify(myContent.species.name, null, '<br>');
        const myContentPhoto = JSON.stringify(myContent.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default, null, '<br>');
        console.log(myContent);
        document.querySelector('.par').innerHTML = 'Name: '+ myContentName +'<br> HP: '+ myContentHP +'<br> Attack: '+ myContentAttack +'<br> Defense: '+ myContentDefense +'<br> Special Attack: '+ myContentSpeAttk +'<br> Special Defense: '+ myContentSpeDefe +'<br> Speed: '+ myContentSpeed +'<br>'+ myContentPhoto;
      })
      .catch(function (err) {
        printError(err, false);
        return false
        });
  
  }, false);