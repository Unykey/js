function upDate(previewPic){
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.innerHTML = previewPic.alt;
      }
  
      function unDo(){
       let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "none";
    imageDiv.innerHTML = "Hover over an image below to display here.";
          
      }