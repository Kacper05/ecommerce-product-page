 counter = 0
      a = 0
      document.querySelector('.descrese').addEventListener('click',()=>{
        if(counter > 0){
          counter -=1
          document.querySelector(".value").innerHTML = counter
        }
      })
      document.querySelector('.inscrese').addEventListener('click',()=>{
        counter +=1
        document.querySelector(".value").innerHTML = counter
      })
      let presented_image = document.getElementById('image');
      const thumbnails = document.getElementsByClassName('thumbnail');
      thumbnails[0].style = "border: 0.15rem solid hsl(26, 100%, 55%);";
      const ChangePicture = (e)=>{
        picture_to_change = e.target.attributes.src.value.replace("-thumbnail","")
        presented_image.src = picture_to_change;
        for (let thumbnail of thumbnails) {
          thumbnail.style = "width: 20%; border-radius: 0.5vw;";
        }
        e.target.style = "border: 0.15rem solid hsl(26, 100%, 55%);"
      }
      for (let thumbnail of thumbnails) {
        thumbnail.addEventListener('click',ChangePicture)
      }
      document.querySelector('.hamburger').addEventListener('click',()=>{
        if(a%2==0){
            document.querySelector('.dropdown').style = "display:contents;"
            a+=1
        }
        else{
          document.querySelector('.dropdown').style = "display:none;"
          a+=1
        }
      })
