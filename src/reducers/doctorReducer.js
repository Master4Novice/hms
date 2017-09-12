export const doctorReducer=(state={},action)=>{
    
        switch(action.type){
         case "GET_RECORD":
                 state=action.payload;
                break;
        case "DELETE_RECORD":
                state=action.payload;
                break;
        case "SAVE_RECORD":
                state=action.payload;
                break;
    
        case "UPDATE_RECORD":
               state=action.payload;
               break;
               default:break;

        }

    
        return state;
}