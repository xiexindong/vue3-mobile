import {defineComponent, reactive,ref} from 'vue';
import { AddressList } from 'vant';
import { useRouter } from 'vue-router';
import { getLocalStorage } from '@/utils/storage';
import { AddressInfo } from './address';


export default defineComponent(()=>{
    const localAddress = getLocalStorage('addressList')
    const router = useRouter()
    const chosenAddressId = ref(1)

    const list:Array<AddressInfo> = reactive(localAddress || [
        {
            id: 1,
            name: '张三',
            tel: '13012345678',
            address: '浙江省杭州市西湖区文三路138号东方通信大厦7楼501室',
            ads: "文三路 138 号东方通信大厦7楼501室",
            city: ["浙江省", "杭州市", "西湖区"],
            isDefault: true,
          },
          {
            id: 2,
            name: '李四',
            tel: '13112345678',
            address: '浙江省杭州市拱墅区莫干山路50号',
            ads: "莫干山路 50 号",
            city: ["浙江省", "杭州市", "拱墅区"],
            isDefault: false,
          },
          {
            id: 3,
            name: '王五',
            tel: '13212345678',
            address: '浙江省杭州市滨江区江南大道15号',
            ads: "江南大道 15 号",
            city: ["浙江省", "杭州市", "滨江区"],
            isDefault: false,
          }
    ])
    const onClickLeft = () =>{
        router.back()
    }

    const onAdd = () =>{
        router.push('/address/edit')
    }

    const onEdit = ()=>{
        console.log(1111)
    }
    
    return()=>(<div class="pd-nav" style="background:#f7f8fa;min-height:100vh">
        <van-nav-bar title="标题" left-text="返回" left-arrow  onClick-left={onClickLeft}></van-nav-bar>
        <AddressList 
            v-model = {chosenAddressId.value}
            list={ list }
            onAdd={onAdd}
            onEdit={onEdit}
        />
    </div>)
        
})