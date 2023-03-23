function frameRendering() {
    //context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
    Vctx.drawImage(videoO, 0, 0);//, pW * 2, pH * 2, 0, 0, pW, pH); //Quad-pixel
    dataO = Vctx.getImageData(0, 0, pW, pH).data;
  }
  
  //Every image array goes like... RGBA_RGBA_RGBA... right?
  
  function invertColor() {
    console.time("invertColor");
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
    console.timeEnd("invertColor");
    setTimeout(invertColor, 3.33);
  }