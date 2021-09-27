import { getCurrentInstance } from "vue"

function useExpose(apis:Record<string,any>):void{
  const instance = getCurrentInstance()
  
   if(instance){
    Object.assign(instance.proxy,apis)
  }
}

export default useExpose


