const initState ={
     products:[
          {id:'1', name:'مرقة جلبانة بالعلوش', decription:'Stupid ugly Burger', price:'150'},
          {id:'2', name:'Blah', decription:'Blah Blah Blah', price:'250'},
          {id:'3', name:'Burger', decription:'Stupid ugly Burger', price:'150'},
          {id:'4', name:'Blah', decription:'Blah Blah Blah', price:'250'},
          {id:'5', name:'Burger', decription:'Stupid ugly Burger', price:'150'},
          {id:'6', name:'Blah', decription:'Blah Blah Blah', price:'250'},
     ]
}

const productReducer = (state = initState,action) => {
     return state
}

export default productReducer