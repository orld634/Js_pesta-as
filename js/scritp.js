const targets= document.querySelectorAll('[data-target]')
const content= document.querySelectorAll('[data-content]')

targets.forEach(target=>{
target.addEventListener('click',() => {
 
      content.forEach(c =>{
                c.classList.remove('active') /*remover al dar clic la clase que tengo activa en el menu */


      })
                      
                        const t=document.querySelector(target.dataset.target) /* aqui selecciono un unico elemento  del target*/
                        t.classList.add('active')


})
})