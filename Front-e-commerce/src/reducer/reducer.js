export const inicialState = {
    productos: [],   
    user:null,
    filterProducto:[], 
    cityContinente:[]

}

export const actionType={
    PRODUCTOS: "PRODUCTOS",    
    USER:"USER",
    FILTER:"FILTER",
    CITYCONTINENTE:"CITYCONTINENTE"
    
}

const reducer=(state, action)=>{
   
    switch(action.type){
        case "PRODUCTOS": 
        return{
            ...state,
            productos:action.productos, 
            filterProducto:action.productos
        }
       
        case "USER":
            return{
                ...state,
                user: action.user
            }
        
        case "FILTER":
            const filterCity=[] 
            if(action.value.filterBy === "Filter by City"){
              filterCity.push(...state.productos.filter(city=> city.name.toLowerCase().startsWith(action.value.value.toLowerCase().trim())))
            }else{
              filterCity.push(...state.productos.filter(city=> city.continents.toLowerCase().startsWith(action.value.value.toLowerCase().trim())))
            }
            return{
                ...state,                
                filterCity:filterCity,
                
            } 
        case "CITYCONTINENTE":
            const cityContinente = state.productos.filter(city => city.continents.includes(action.value))            
            return{
                ...state,
                cityContinente:cityContinente,
                filterCity:cityContinente
            }      


        default:return state
    }
    
}

export default reducer;