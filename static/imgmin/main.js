'use strict';
const getImgSize = (dataURL,callback)=>{
  let img = new Image();
  img.onload =()=>{
    callback(...[
      img.naturalWidth,
      img.naturalHeight
    ]);
  };
  img.src=dataURL;
};
const resizeImage=(img,w,h)=>{
  let canvas=document.createElement("canvas");
  canvas.width=w;
  canvas.height=h;
  canvas.getContext("2d").drawImage(img, 0, 0, w, h);
  let png=canvas.toDataURL();
  let jpg=canvas.toDataURL("image/jpeg");
  if(png.length>jpg.length){
    return jpg;
  }else{
    return png;
  }
};
$(()=>{
  $('#fl').on('change',(e)=>{
    $('#prtxt').text('');
    let file = $('#fl').prop('files')[0];
    let reader = new FileReader();
    reader.onload = ()=>{
      $('#rs').attr('src',reader.result);
    }
    reader.readAsDataURL(file);
  });
  $('#igf').on('submit',(e)=>{
    e.preventDefault();
    
    $('#rs').attr('src','');
    $('#prtxt').text('処理中…');
    let file = $('#fl').prop('files')[0];
    let reader = new FileReader();
    reader.onload = ()=>{
      let durl = reader.result;
      getImgSize(durl,(w,h)=>{
        //長い方1280にする
        let rimg;
        let img=new Image();
        img.src=durl;
        //console.log(durl);
        if(w > h){
          //横長
          rimg=resizeImage(img,1280,h*(1280/w));
        }else{
          //縦長
          rimg=resizeImage(img,w*(1280/h),1280);
        }
        //console.log(rimg);
        $('#rs').attr('src',rimg);
      });
        $('#prtxt').text('完了');
    };
    reader.readAsDataURL(file);
  });
});

