setTimeout(function(){
      document.getElementById('wel').style.display=" none";
      document.getElementById('mae').style.display="flex";
      document.body.style="min-height:100vh;background-image: url('/70314397883674638-10884426570576108.jpg'); background-size: cover;background-repeat: no-repeat;min-height: 100vh;background-attachment: fixed";
    },3000);
      setTimeout(function() {
        document.getElementById('falsebox').style.display = "none";
        document.getElementById('sec').style.display="block";
        document.getElementById('caixas').style.display = "flex"; // Flex para centralização
      }, 6100);
const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }
    else {
      entry.target.classList.remove('show')
    }
  })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element)=>myObserver.observe(element))