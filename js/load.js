
function Loadbody(){
    var svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 2000 2000"  xml:space="preserve"></svg>`;

    var target = document.getElementById("additem");

    const parser = new DOMParser();
    for (var i = 0; i<Draw[0].length;i++) {

        var svgString = Draw[0][i].g;
        var st = Draw[0][i].st;

        const svg1 = parser.parseFromString(svg, "image/svg+xml");
        var svg2 = svg1.documentElement;


        const doc = parser.parseFromString(svgString, "image/svg+xml");
        const st1 = parser.parseFromString(st, "text/xml");

        var doc1 = doc.documentElement;
        var st2 = st1.documentElement;
        doc1.setAttributeNS(null, "transform", "translate(-520 -700)");
        doc1.insertAdjacentElement("afterbegin",st2);

        svg2.insertAdjacentElement("beforeend",doc1);
        

        var a = document.createElement('a');
        if(i === 0){
        a.setAttribute('class',`chooseclass0`);    
        a.setAttribute('id',`choosed0`);    
        }else{
            a.setAttribute('class',`chooseclass0`);
        }
        a.setAttribute('onclick',`Changebody(${i},this,'#00FF00')`);
        a.insertAdjacentElement("afterbegin",svg2);
        var div1 = document.createElement('div');
        div1.setAttribute('class',`swiper-slide`);
        div1.insertAdjacentElement("afterbegin",a);
        target.insertAdjacentElement("beforeend",div1);

        

}


}

function Loadhead(){
    var svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" xml:space="preserve"></svg>`;
 
    var target = document.getElementById("additem1");
    const parser = new DOMParser();
    for (var i = 0; i<Draw[1].length;i++) {

        var svgString = Draw[1][i].g;
        var st = Draw[1][i].st;

        const svg1 = parser.parseFromString(svg, "image/svg+xml");
        var svg2 = svg1.documentElement;

        const doc = parser.parseFromString(svgString, "image/svg+xml");
        const st1 = parser.parseFromString(st, "text/xml");

        var doc1 = doc.documentElement;
        var st2 = st1.documentElement;
        doc1.setAttributeNS(null, "transform", "translate(-800 -500)");
        doc1.insertAdjacentElement("afterbegin",st2);

        svg2.insertAdjacentElement("beforeend",doc1);


        var a = document.createElement('a');
        if(i === 0){
        a.setAttribute('class',`chooseclass1`);    
        a.setAttribute('id',`choosed1`);    
        }else{
            a.setAttribute('class',`chooseclass1`);
        }
        a.setAttribute('onclick',`changehead(${i},this,'#00FF00')`);
        a.insertAdjacentElement("afterbegin",svg2);
        var div1 = document.createElement('div');
        div1.setAttribute('class',`swiper-slide`);
        div1.insertAdjacentElement("afterbegin",a);
        target.insertAdjacentElement("beforeend",div1);
}

}


function Loadface(){
    var svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" xml:space="preserve"></svg>`;
    var target = document.getElementById("additem2");
    const parser = new DOMParser();
    for (var i = 0; i<Draw[2].length;i++) {

        var svgString = Draw[2][i].g;
        var st = Draw[2][i].st;

        const svg1 = parser.parseFromString(svg, "image/svg+xml");
        var svg2 = svg1.documentElement;

        const doc = parser.parseFromString(svgString, "image/svg+xml");
        const st1 = parser.parseFromString(st, "text/xml");

        var doc1 = doc.documentElement;
        var st2 = st1.documentElement;
          doc1.setAttributeNS(null, "transform", "translate(-1300 -900)");
    
        doc1.insertAdjacentElement("afterbegin",st2);

        svg2.insertAdjacentElement("beforeend",doc1);


        var a = document.createElement('a');
        if(i === 0){
        a.setAttribute('class',`chooseclass2`);    
        a.setAttribute('id',`choosed2`);    
        }else{
            a.setAttribute('class',`chooseclass2`);
        }
        a.setAttribute('onclick',`changeface(${i},this,'#00FF00')`);
        a.insertAdjacentElement("afterbegin",svg2);
        var div1 = document.createElement('div');
        div1.setAttribute('class',`swiper-slide`);
        div1.insertAdjacentElement("afterbegin",a);
        target.insertAdjacentElement("beforeend",div1);

}

}


function LoadFh(){
    var svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" xml:space="preserve"></svg>`;
     var target = document.getElementById("additem3");

    const parser = new DOMParser();
    for (var i = 0; i<Draw[3].length;i++) {

        var svgString = Draw[3][i].g;
        var st = Draw[3][i].st;

        const svg1 = parser.parseFromString(svg, "image/svg+xml");
        var svg2 = svg1.documentElement;
        
        const doc = parser.parseFromString(svgString, "image/svg+xml");
        const st1 = parser.parseFromString(st, "text/xml");

        var doc1 = doc.documentElement;
        var st2 = st1.documentElement;
          doc1.setAttributeNS(null, "transform", "translate(-1270 -980)");
        // g2.insertAdjacentElement("afterbegin",doc1);
        doc1.insertAdjacentElement("afterbegin",st2);

        svg2.insertAdjacentElement("beforeend",doc1);


        var a = document.createElement('a');
        if(i === 0){
        a.setAttribute('class',`chooseclass3`);    
        a.setAttribute('id',`choosed3`);    
        }else{
            a.setAttribute('class',`chooseclass3`);
        }
        a.setAttribute('onclick',`changefh(${i},this,'#00FF00')`);
        a.insertAdjacentElement("afterbegin",svg2);
        var div1 = document.createElement('div');
        div1.setAttribute('class',`swiper-slide`);
        div1.insertAdjacentElement("afterbegin",a);
        target.insertAdjacentElement("beforeend",div1);
}

}


function Loadacc(){
    var svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" xml:space="preserve"></svg>`;
    var target = document.getElementById("additem4");

    const parser = new DOMParser();
    for (var i = 0; i<Draw[4].length;i++) {

        var svgString = Draw[4][i].g;
        var st = Draw[4][i].st;

        const svg1 = parser.parseFromString(svg, "image/svg+xml");
        var svg2 = svg1.documentElement;
        const doc = parser.parseFromString(svgString, "image/svg+xml");
        const st1 = parser.parseFromString(st, "text/xml");
        var doc1 = doc.documentElement;
        var st2 = st1.documentElement;
        doc1.setAttributeNS(null, "transform", "translate(-1200 -800)");
        doc1.insertAdjacentElement("afterbegin",st2);
        svg2.insertAdjacentElement("beforeend",doc1);


        var a = document.createElement('a');
        if(i === 0){
        a.setAttribute('class',`chooseclass4`);    
        a.setAttribute('id',`choosed4`);    
        }else{
            a.setAttribute('class',`chooseclass4`);
        }
        a.setAttribute('onclick',`changeacc(${i},this,'#00FF00')`);
        a.insertAdjacentElement("afterbegin",svg2);
        var div1 = document.createElement('div');
        div1.setAttribute('class',`swiper-slide`);
        div1.insertAdjacentElement("afterbegin",a);
        target.insertAdjacentElement("beforeend",div1);
}

}

// change head function



function Changebody(p,element,color){
    var target = document.getElementById("svgOne");
    const parser = new DOMParser();
    var svgString = Draw[0][p].g;
    var st = Draw[0][p].st;
        const doc = parser.parseFromString(svgString, "image/svg+xml");
        const st1 = parser.parseFromString(st, "text/xml");
        var doc1 = doc.documentElement;
        var st2 = st1.documentElement;
        doc1.insertAdjacentElement("afterbegin",st2);
        changeclass = document.getElementsByClassName("chooseclass0");
    for (i = 0; i < changeclass.length; i++) {
            changeclass[i].style.backgroundColor = "transparent";
            }
        target.replaceChild(doc1,target.childNodes[2]);
       element.style.backgroundColor = color;
       var id = Draw[0][p].id;
        cls = 'c'+1;
       document.getElementById(cls).value=id;
      
}


function changehead(p,element,color){

    var target = document.getElementById("svgOne");
    const parser = new DOMParser();
    var svgString = Draw[1][p].g;
    var st = Draw[1][p].st;
    const doc = parser.parseFromString(svgString, "image/svg+xml");
    const st1 = parser.parseFromString(st, "text/xml");
    var doc1 = doc.documentElement;
    var st2 = st1.documentElement;
    doc1.insertAdjacentElement("afterbegin",st2);
    changeclass = document.getElementsByClassName("chooseclass1");
for (i = 0; i < changeclass.length; i++) {
    changeclass[i].style.backgroundColor = "transparent";
    }
    target.replaceChild(doc1,target.childNodes[3]);
    element.style.backgroundColor = color;
       var id = Draw[1][p].id;
        cls = 'c'+2;
       document.getElementById(cls).value=id;

}

function changeface(p,element,color){

    var target = document.getElementById("svgOne");
    const parser = new DOMParser();
    var svgString = Draw[2][p].g;
    var st = Draw[2][p].st;
    const doc = parser.parseFromString(svgString, "image/svg+xml");
    const st1 = parser.parseFromString(st, "text/xml");
    var doc1 = doc.documentElement;
    var st2 = st1.documentElement;
    doc1.insertAdjacentElement("afterbegin",st2);
    changeclass = document.getElementsByClassName("chooseclass2");
for (i = 0; i < changeclass.length; i++) {
    changeclass[i].style.backgroundColor = "transparent";
    }
    target.replaceChild(doc1,target.childNodes[4]);
    element.style.backgroundColor = color;
       var id = Draw[2][p].id;
        cls = 'c'+3;
  document.getElementById(cls).value=id;


}

function changefh(p,element,color){

    var target = document.getElementById("svgOne");
    const parser = new DOMParser();
    var svgString = Draw[3][p].g;
    var st = Draw[3][p].st;
    const doc = parser.parseFromString(svgString, "image/svg+xml");
    const st1 = parser.parseFromString(st, "text/xml");
    var doc1 = doc.documentElement;
    var st2 = st1.documentElement;
    doc1.insertAdjacentElement("afterbegin",st2);
    changeclass = document.getElementsByClassName("chooseclass3");
for (i = 0; i < changeclass.length; i++) {
    changeclass[i].style.backgroundColor = "transparent";
    }
    target.replaceChild(doc1,target.childNodes[5]);
    element.style.backgroundColor = color;
       var id = Draw[3][p].id;
        cls = 'c'+4;
       document.getElementById(cls).value=id;

}


function changeacc(p,element,color){

    var target = document.getElementById("svgOne");
    const parser = new DOMParser();
    var svgString = Draw[4][p].g;
    var st = Draw[4][p].st;
    const doc = parser.parseFromString(svgString, "image/svg+xml");
    const st1 = parser.parseFromString(st, "text/xml");
    var doc1 = doc.documentElement;
    var st2 = st1.documentElement;
    doc1.setAttributeNS(null, "transform", "translate(0 0)");
    doc1.insertAdjacentElement("afterbegin",st2);
    changeclass = document.getElementsByClassName("chooseclass4");
for (i = 0; i < changeclass.length; i++) {
    changeclass[i].style.backgroundColor = "transparent";
    }
    target.replaceChild(doc1,target.childNodes[6]);
    element.style.backgroundColor = color;
       var id = Draw[4][p].id;
        cls = 'c'+5;
       document.getElementById(cls).value=id;

}


function shuffle(){
    for (var k = 0; k < 5; k++) {
    var el = document.querySelectorAll(`.chooseclass${k}`);
    var num = el.length;
    min = Math.ceil(0);
    max = Math.floor(num);
    var elload = Math.floor(Math.random() * (max - min) + min);
    el[elload].click();
}
}

function shuffleanddownload(){
    var repeattime = document.getElementById("repeatitions").value;


for (var j = 0; j < repeattime; j++) {

  
    shuffle();
    svgDatapng();
    // svgDataURL();



    
}

}

