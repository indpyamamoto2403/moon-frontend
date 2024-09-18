<script setup>
import OpenAiResponder from '../organisms/OpenAiResponder.vue';
import GyoshuStankuRadio from '../organisms/GyoshuStankuRadio.vue';
import { ref } from 'vue';
import axios from 'axios';
const selected_categories = ref(null);
const response_status = ref("not_answered"); //not_answered, is_loading, answered, error
const answer = ref("");
const error = ref("");
const generateResponse = async () => {
try {
     const apiEndpoint = 'http://127.0.0.1:8000/'; // Replace with your actual endpoint
     const params = { text: inputText.value }; // Parameters to send in the GET request

     const res = await axios.get(apiEndpoint, { params });
    
     console.log('Response:', res.data);
    
     answer.value = res.data.response; // Adjust according to your API response structure
     error.value = ''; // Clear previous error message
   } catch (err) {
     console.error('Error fetching response:', err);
     answer.value = '';
   }
};
const send_message = () => {
    response_status.value = "is_loading";
    
    setTimeout(() => {
        response_status.value = "answered";
    }, 4000);
}
</script>
<template>
    <div>
        <h1>生成AIレスポンダー</h1>
        <div class="radio-container">
            <GyoshuStankuRadio v-model="selected_categories"/>
        </div>
        <div class="send-container">
            <OpenAiResponder @send="send_message"/>
        </div>

        <div class="output-container">
            <div class="output-card">
                <h1 @click="send_message">生成AIの回答</h1>
                <div v-if="response_status === 'is_loading'">
                    <div>
                        生成AIの回答を生成しています...
                    </div>
                </div>
                <div v-if="response_status === 'answered'">
                    <div>
                        ここに生成AIの回答が入ります。
                        ここに生成AIの回答が入ります。
                        ここに生成AIの回答が入ります。
                        ここに生成AIの回答が入ります。
                    </div>
                </div>
        </div>
        </div>
    </div>
</template>
<style scoped>
.radio-container{
    margin-top:50px;
    display:flex;
    justify-content: center;
    align-items:center;
    width:100%;
}

.send-container{
    padding-top:50px;
    display:flex;
    justify-content: center;
}

.output-container{
    padding-top:50px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width:100%;


}

.output-card{
    min-height:200px;
    color:black;
    background-color:white;
    border-radius: 15px;
    width:1200px;
}
</style>
