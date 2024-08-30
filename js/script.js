// Add custom JavaScript here


const navbar = document.getElementsByClassName('navbar');

window.addEventListener("scroll", function (e) {
       if(this.scrollY > 50){
           navbar.item(0).classList.add('bg-dark')
           navbar.item(0).classList.add('opacity-9');
           navbar.item(0).classList.add('transation')
       }else{
           navbar.item(0).classList.remove('bg-dark');
           navbar.item(0).classList.remove('opacity-9');
           navbar.item(0).classList.remove('transation')
       }
})