function frameRendering() {
    //context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
    Vctx.drawImage(videoO, 0, 0);//, pW * 2, pH * 2, 0, 0, pW, pH); //Quad-pixel
    dataO = Vctx.getImageData(0, 0, pW, pH).data;
  }
  
  //Every image array goes like... RGBA_RGBA_RGBA... right?

  function whereIam(){
    console.time("whereIam");
    
    
    
    console.timeEnd("whereIam");
    setTimeout(whereIam, 500);
  }
  
  function takePhotoSaveData(){
    let dataM = dataO.slice();  //The data we will manipulate
    console.log(typeof dataM);

    console.log(dataM);
    for (let i = 1; i <= dataM.length/4; i++) {
      dataM.splice(i, 1); //Takes out from i element, just 1 element.
    }
    console.log(dataM.length);

    //Algo más desarrollado que un prompt... darle la opción de contribuir con varias fotos a un mismo lugar... seleccionando el lugar si ya está disponible (y agregar rutina para organizar los lugares  :')
    let msgImage = prompt("Introduzca una breve descripción del lugar que ve", "Aquí se puede ver...");
    if(msgImage != null) localStorage.setItem(msgImage, JSON.stringify(dataM));
  }

  function exportData(){
    for(let i=0; i<localStorage.length; i++){
      alert(localStorage.key(i));
    }
  }
  //.getItem, key, setItem, length, removeItem
  
  function invertColor() {
    //console.time("invertColor");
    dataI = dataO.slice();  //The data we will manipulate
    let iDisplay = Ictx.createImageData(pW, pH);
    iData = iDisplay.data; //The array that will revive the data
        
    for (let i = 0; i < dataI.length; i++) {
      if(i%4 == 3){
        iData[i] = dataI[i];
      }else{
        iData[i] = 255 - dataI[i];
      }
    }
        
    Ictx.putImageData(iDisplay, 0, 0);
    //console.timeEnd("invertColor");
    //setTimeout(invertColor, 3.33);
  }
