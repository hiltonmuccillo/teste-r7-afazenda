// your code
var section = document.querySelector('section');
  var requestURL = 'fazenda.json';
  var request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function () {
    var membros = request.response;
    showMembros(membros);
  }

  function showMembros(jsonObj) {
    var participantes = jsonObj['members'];

    participantes.sort((a, b) => {
      return b.positive - a.positive
    })

    for (var i = 0; i < participantes.length; i++) {

      var myArticle = document.createElement('article');

      var myImg = document.createElement('img');
      myImg.src = participantes[i].picture;
      myArticle.appendChild(myImg);

      var myH2 = document.createElement('h2');
      myH2.textContent = participantes[i].name;
      myArticle.appendChild(myH2);

      var myDescr = document.createElement('h3');
      myDescr.textContent = participantes[i].description;
      myArticle.appendChild(myDescr);

      var votosTotal = document.createElement('h3');
      votosTotal.textContent = ((participantes[i].positive + participantes[i].negative).toLocaleString() + " votos");
      myArticle.appendChild(votosTotal);

      var myPara11 = document.createElement('h4');
      myPara11.textContent =  + ((participantes[i].positive / (participantes[i].negative + participantes[i].positive)) * 100).toFixed() + "%";
      myArticle.appendChild(myPara11);

      var myPara10 = document.createElement('h4');
      myPara10.textContent =  + ((participantes[i].negative / (participantes[i].negative + participantes[i].positive)) * 100).toFixed() + "%";
      myArticle.appendChild(myPara10);

      var myPara12 = document.createElement('br');
      myPara12.textContent = "";
      myArticle.appendChild(myPara12);

      section.appendChild(myArticle);
    }

    (function(){
      var participante1 =document.querySelector("body > section > article:nth-child(11)");
      var participante2 =document.querySelector("body > section > article:nth-child(12)");
      var participante3 =document.querySelector("body > section > article:nth-child(13)");
      var participante4 =document.querySelector("body > section > article:nth-child(14)");
      var participante5 =document.querySelector("body > section > article:nth-child(15)");

      participante1.addEventListener('click', function(){
        var r1 = document.querySelector(".resultado1");
        var g1 = document.querySelector("body > section > article:nth-child(11) > h4:nth-child(5)");
        var ng1 = document.querySelector("body > section > article:nth-child(11) > h4:nth-child(6)");
        var nome = document.querySelector("body > section > article:nth-child(11) > h2");
        var bio = document.querySelector("body > section > article:nth-child(11) > h3");
        var votos = document.querySelector("body > section > article:nth-child(11) > h3:nth-child(4)");
        var bordaImg = document.querySelector("body > section > article:nth-child(11) > img");

        if (r1.className == "resultado1 esconde") {
            participante1.style.cssText = "background-color: #ba3638";
            nome.style.cssText = "color: #fff";
            bio.style.cssText = "color: #000";
            votos.style.cssText = "color: #000";
            bordaImg.style.cssText = "border: 4px solid #fff";
            r1.className = "resultado1 mostra";
            g1.className = "mostra";
            ng1.className = "mostra";
            participante2.style.cssText = "pointer-events: none";
            participante2.disabled = true;
            participante3.style.cssText = "pointer-events: none";
            participante3.disabled = true;
            participante4.style.cssText = "pointer-events: none";
            participante4.disabled = true;
            participante5.style.cssText = "pointer-events: none";
            participante5.disabled = true;
        } else if ("resultado1 mostra") {
          participante1.style.cssText = "background-color: #fff";
          nome.style.cssText = "color: #ba3638";
          bio.style.cssText = "color: #999";
          votos.style.cssText = "color: #999";
          bordaImg.style.cssText = "border: 4px solid #ba3638";
          r1.className = "resultado1 esconde";
          g1.className = "esconde";
          ng1.className = "esconde";
          participante2.style.cssText = "pointer-events: auto";
          participante2.disabled = false;
          participante3.style.cssText = "pointer-events: auto";
          participante3.disabled = false;
          participante4.style.cssText = "pointer-events: auto";
          participante4.disabled = false;
          participante5.style.cssText = "pointer-events: auto";
          participante5.disabled = false;
        }
      })

      participante2.addEventListener('click', function(){
        var r2 = document.querySelector(".resultado2");
        var g2 = document.querySelector("body > section > article:nth-child(12) > h4:nth-child(5)");
        var ng2 = document.querySelector("body > section > article:nth-child(12) > h4:nth-child(6)");
        var nome = document.querySelector("body > section > article:nth-child(12) > h2");
        var bio = document.querySelector("body > section > article:nth-child(12) > h3");
        var votos = document.querySelector("body > section > article:nth-child(12) > h3:nth-child(4)");
        var bordaImg = document.querySelector("body > section > article:nth-child(12) > img");

        if (r2.className == "resultado2 esconde") {
            participante2.style.cssText = "background-color: #ba3638";
            nome.style.cssText = "color: #fff";
            bio.style.cssText = "color: #000";
            votos.style.cssText = "color: #000";
            bordaImg.style.cssText = "border: 4px solid #fff";
            r2.className = "resultado2 mostra";
            g2.className = "mostra";
            ng2.className = "mostra";
            participante1.style.cssText = "pointer-events: none";
            participante1.disabled = true;
            participante3.style.cssText = "pointer-events: none";
            participante3.disabled = true;
            participante4.style.cssText = "pointer-events: none";
            participante4.disabled = true;
            participante5.style.cssText = "pointer-events: none";
            participante5.disabled = true;
        } else if ("resultado2 mostra") {
          participante2.style.cssText = "background-color: #fff";
          nome.style.cssText = "color: #ba3638";
          bio.style.cssText = "color: #999";
          votos.style.cssText = "color: #999";
          bordaImg.style.cssText = "border: 4px solid #ba3638";
          r2.className = "resultado2 esconde";
          g2.className = "esconde";
          ng2.className = "esconde";
          participante1.style.cssText = "pointer-events: auto";
          participante1.disabled = false;
          participante3.style.cssText = "pointer-events: auto";
          participante3.disabled = false;
          participante4.style.cssText = "pointer-events: auto";
          participante4.disabled = false;
          participante5.style.cssText = "pointer-events: auto";
          participante5.disabled = false;
        }
      })


      participante3.addEventListener('click', function(){
        var r3 = document.querySelector(".resultado3");
        var g3 = document.querySelector("body > section > article:nth-child(13) > h4:nth-child(5)");
        var ng3 = document.querySelector("body > section > article:nth-child(13) > h4:nth-child(6)");
        var nome = document.querySelector("body > section > article:nth-child(13) > h2");
        var bio = document.querySelector("body > section > article:nth-child(13) > h3");
        var votos = document.querySelector("body > section > article:nth-child(13) > h3:nth-child(4)");
        var bordaImg = document.querySelector("body > section > article:nth-child(13) > img");

        if (r3.className == "resultado3 esconde") {
            participante3.style.cssText = "background-color: #ba3638";
            nome.style.cssText = "color: #fff";
            bio.style.cssText = "color: #000";
            votos.style.cssText = "color: #000";
            bordaImg.style.cssText = "border: 4px solid #fff";
            r3.className = "resultado3 mostra";
            g3.className = "mostra";
            ng3.className = "mostra";
            participante1.style.cssText = "pointer-events: none";
            participante1.disabled = true;
            participante2.style.cssText = "pointer-events: none";
            participante2.disabled = true;
            participante4.style.cssText = "pointer-events: none";
            participante4.disabled = true;
            participante5.style.cssText = "pointer-events: none";
            participante5.disabled = true;
        } else if ("resultado3 mostra") {
          participante3.style.cssText = "background-color: #fff";
          nome.style.cssText = "color: #ba3638";
          bio.style.cssText = "color: #999";
          votos.style.cssText = "color: #999";
          bordaImg.style.cssText = "border: 4px solid #ba3638";
          r3.className = "resultado3 esconde";
          g3.className = "esconde";
          ng3.className = "esconde";
          participante1.style.cssText = "pointer-events: auto";
          participante1.disabled = false;
          participante2.style.cssText = "pointer-events: auto";
          participante2.disabled = false;
          participante4.style.cssText = "pointer-events: auto";
          participante4.disabled = false;
          participante5.style.cssText = "pointer-events: auto";
          participante5.disabled = false;
        }
      })

      participante4.addEventListener('click', function(){
        var r4 = document.querySelector(".resultado4");
        var g4 = document.querySelector("body > section > article:nth-child(14) > h4:nth-child(5)");
        var ng4 = document.querySelector("body > section > article:nth-child(14) > h4:nth-child(6)");
        var nome = document.querySelector("body > section > article:nth-child(14) > h2");
        var bio = document.querySelector("body > section > article:nth-child(14) > h3");
        var votos = document.querySelector("body > section > article:nth-child(14) > h3:nth-child(4)");
        var bordaImg = document.querySelector("body > section > article:nth-child(14) > img");

        if (r4.className == "resultado4 esconde") {
            participante4.style.cssText = "background-color: #ba3638";
            nome.style.cssText = "color: #fff";
            bio.style.cssText = "color: #000";
            votos.style.cssText = "color: #000";
            bordaImg.style.cssText = "border: 4px solid #fff";
            r4.className = "resultado4 mostra";
            g4.className = "mostra";
            ng4.className = "mostra";
            participante1.style.cssText = "pointer-events: none";
            participante1.disabled = true;
            participante2.style.cssText = "pointer-events: none";
            participante2.disabled = true;
            participante3.style.cssText = "pointer-events: none";
            participante3.disabled = true;
            participante5.style.cssText = "pointer-events: none";
            participante5.disabled = true;
        } else if ("resultado4 mostra") {
          participante4.style.cssText = "background-color: #fff";
          nome.style.cssText = "color: #ba3638";
          bio.style.cssText = "color: #999";
          votos.style.cssText = "color: #999";
          bordaImg.style.cssText = "border: 4px solid #ba3638";
          r4.className = "resultado4 esconde";
          g4.className = "esconde";
          ng4.className = "esconde";
          participante1.style.cssText = "pointer-events: auto";
          participante1.disabled = false;
          participante2.style.cssText = "pointer-events: auto";
          participante2.disabled = false;
          participante3.style.cssText = "pointer-events: auto";
          participante3.disabled = false;
          participante5.style.cssText = "pointer-events: auto";
          participante5.disabled = false;
        }
      })

      participante5.addEventListener('click', function(){
        var r5 = document.querySelector(".resultado5");
        var g5 = document.querySelector("body > section > article:nth-child(15) > h4:nth-child(5)");
        var ng5 = document.querySelector("body > section > article:nth-child(15) > h4:nth-child(6)");
        var nome = document.querySelector("body > section > article:nth-child(15) > h2");
        var bio = document.querySelector("body > section > article:nth-child(15) > h3");
        var votos = document.querySelector("body > section > article:nth-child(15) > h3:nth-child(4)");
        var bordaImg = document.querySelector("body > section > article:nth-child(15) > img");

        if (r5.className == "resultado5 esconde") {
            participante5.style.cssText = "background-color: #ba3638";
            nome.style.cssText = "color: #fff";
            bio.style.cssText = "color: #000";
            votos.style.cssText = "color: #000";
            bordaImg.style.cssText = "border: 5px solid #fff";
            r5.className = "resultado5 mostra";
            g5.className = "mostra";
            ng5.className = "mostra";
            participante1.style.cssText = "pointer-events: none";
            participante1.disabled = true;
            participante2.style.cssText = "pointer-events: none";
            participante2.disabled = true;
            participante3.style.cssText = "pointer-events: none";
            participante3.disabled = true;
            participante4.style.cssText = "pointer-events: none";
            participante4.disabled = true;
        } else if ("resultado5 mostra") {
          participante5.style.cssText = "background-color: #fff";
          nome.style.cssText = "color: #ba3638";
          bio.style.cssText = "color: #999";
          votos.style.cssText = "color: #999";
          bordaImg.style.cssText = "border: 5px solid #ba3638";
          r5.className = "resultado5 esconde";
          g5.className = "esconde";
          ng5.className = "esconde";
          participante1.style.cssText = "pointer-events: auto";
          participante1.disabled = false;
          participante2.style.cssText = "pointer-events: auto";
          participante2.disabled = false;
          participante3.style.cssText = "pointer-events: auto";
          participante3.disabled = false;
          participante4.style.cssText = "pointer-events: auto";
          participante4.disabled = false;
        }
      })
    })();
  }