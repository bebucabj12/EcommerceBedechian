const producto =
    { id: '001',
      title: 'Hoddie',
      price: '$5.500',
      category: 'hoodie',
      pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9wOnrE1UL7zVE1vd8XPaXpjZghY9rMvI_FA&usqp=CAU'
    }


export const getFetch = new Promise((resolve)=>{
    //aca tareas asincronicas   
        setTimeout(()=>{
            resolve(producto)
        }, 2000)      
})