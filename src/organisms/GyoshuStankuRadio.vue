<script setup>
import { ref, defineModel } from 'vue';

const selected_states = {
  kyogotasha: ref(false),
  sankokigyo: ref(false),
  igyoshu: ref(false),
  torihikisaki: ref(false),
  kokunaidoko: ref(false),
  kaigaidoko: ref(false)
};

const toggle_selected = (key) => {
  if (selected_states[key]) {
    selected_states[key].value = !selected_states[key].value;
  }
};

const model = defineModel();
model.value = selected_states.kyogotasha.value;
</script>
<template>
    <div class="radio-wrapper">
        <div class="circle-button" 
             :class="{ selected: selected_states.kyogotasha.value }" 
             @click="toggle_selected('kyogotasha')">
            競合他社
        </div>
        <div class="circle-button" 
             :class="{ selected: selected_states.sankokigyo.value }" 
             @click="toggle_selected('sankokigyo')">
            参考企業
        </div>
        <div class="circle-button" 
             :class="{ selected: selected_states.igyoshu.value }" 
             @click="toggle_selected('igyoshu')">
            異業種
        </div>
        <div class="circle-button" 
             :class="{ selected: selected_states.torihikisaki.value }" 
             @click="toggle_selected('torihikisaki')">
            取引先
        </div>
        <div class="circle-button" 
             :class="{ selected: selected_states.kokunaidoko.value }" 
             @click="toggle_selected('kokunaidoko')">
            国内動向
        </div>
        <div class="circle-button" 
             :class="{ selected: selected_states.kaigaidoko.value }" 
             @click="toggle_selected('kaigaidoko')">
            海外動向
        </div>
    </div>
</template>

<style scoped>
.radio-wrapper{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    height:200px;
    background-color:#C1E5F5;
    width:1200px;
    color:black;
    border-radius:20px;
}

.circle-button{
    display:flex;
    justify-content:center;
    align-items:center;
    width:100px;
    height:100px;
    border-radius:50%;
    background-color:#156082
    ;
    color:white;
}

.circle-button:hover{
    background-color:#83CBEB;
    transition:all 0.5s;
    cursor:pointer;

}

.selected{
    background-color:#83CBEB;
    transition:all 0.5s;
}
</style>