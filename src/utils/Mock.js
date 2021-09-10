const productos = [
    { id: '001',
      title: 'Hoddie',
      price: '$5.500',
      pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9wOnrE1UL7zVE1vd8XPaXpjZghY9rMvI_FA&usqp=CAU'
    },
    { id: '002',
      title: 'Remeron',
      price: '$3.500',
      pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsLCQ1ibo_KJtEC8JMC4EVpcpa0dKDfstBOXNlcZJm-PsFj3KBejxueVrHJrG3uVQGCcI&usqp=CAU'
    },
    { id: '003',
      title: 'Jogging',
      price: '$7.500',
      pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPHPd5WjN1wkXf14NCA2o49UYjBLNlVlN0alDmutF4FVAq-HysAijfJ3rYl2XJLklJnOs&usqp=CAU'
    },
    { id: '004',
      title: 'Gorra',
      price: '$2.500',
      pictureUrl: 'https://images-v2.rappi.com/products/2092161348-1593636106986.png?d=240x240'
    },
] 

export const getFetch = new Promise((resolve)=>{
    //aca tareas asincronicas   
        setTimeout(()=>{
            resolve(productos)
        }, 2000)  
    
})