import { defineComponent, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import CityPicker  from '@/components/city-picker';




export default defineComponent({
    data(){
        return {
            name:11
        }
    },
   
    setup(){
        const vanForm = ref()
        const cityPicker = ref()


        const form = reactive({
            id: Date.now(),
            name:'',
            tel:''
        })

        const patterns = {
            phone:/^1[0-9]{10}$/,
            name: /^[\u4e00-\u9fa5]{2,20}$/,
            ads: /^[\u4E00-\u9FA5A-Za-z0-9_—()（）-]+$/
        }


        const message = {
            name: (value:string ,rule:any) =>{
                if(value.trim() === '') return "请输入姓名"
                return '姓名输入有误'
            },
            phone:(value:string, rule:any) =>{
                if(value === '') return "请输入手机号"
                return '手机号不正确'
            },
        
        }

        
        const Router = useRouter()
        const onClickLeft = () =>{
            Router.back()
        }

     
        const openCity = () =>{
            cityPicker.value.open()
        }
        return()=>(<div class="pd-nav">
            <van-nav-bar
                title="编辑"  
                onClick-left={onClickLeft}
                left-text="返回"
            >
            </van-nav-bar>
            <div class="mg10">
            <van-form ref={vanForm}>
                <van-field
                    v-model={form.name}
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    rules={[{ pattern:patterns.name, message:  message.name}]}
                />
                <van-field
                    v-model={form.tel}
                    name="手机号"
                    label="手机号"
                    placeholder="手机号"
                    maxlength="11"
                    rules={[{pattern:patterns.phone, message: message.phone }]}
                />
                <van-field 
                    label="选择城市" 
                    readonly 
                    placeholder="请选择城市"
                    right-icon="arrow"
                    onClick = {openCity}
                    rules={[{require:true, message:'请选择城市'}]}
                />

                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">提交</van-button>
                </div>
            </van-form>
            <CityPicker  ref={cityPicker}/>
            </div>
        </div>)
    }
})
