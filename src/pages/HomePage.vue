<script setup>
import OpenAiResponder from '../organisms/OpenAiResponder.vue';
import GyoshuStankuRadio from '../organisms/GyoshuStankuRadio.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
const selected_categories = ref(null);
const response_status = ref("not_answered"); //not_answered, is_loading, answered, error
const answer = ref("");
const error = ref("");


const generateResponse = async (queryString) => {
try {
     response_status.value = "is_loading";
     const apiEndpoint = 'http://127.0.0.1:8000/' + queryString.input1 // Replace with your actual endpoint
     const params = { text: queryString.input1 + "の企業概要および競合他社について教えて" }; // Parameters to send in the GET request
     console.log("質問:" + params.text);
     const res = await axios.get(apiEndpoint, { params });
     console.log("回答:" + res.data["answer"]);
     answer.value = res.data["answer"];
     error.value = ''; 
     response_status.value = "answered";
   } catch (err) {
     console.error('Error fetching response:', err);
     response_status.value = "error";
     answer.value = '';
   }
};

onMounted(() => {
    document.title="生成AIレスポンダー";
});
</script>
<template>
    <div>
        <h1>生成AIレスポンダー</h1>
        <div class="radio-container">
            <GyoshuStankuRadio v-model="selected_categories"/>
        </div>
        <div class="send-container">
            <OpenAiResponder 
            @send="generateResponse"/>
        </div>

        <div class="output-container">
            <div class="output-card">
                <h2 @click="send_message">生成AIの回答</h2>
                <div v-if="response_status === 'is_loading'">
                    <div>
                        生成AIの回答を生成しています...
                    </div>
                </div>
                <div v-if="response_status === 'answered'">
                    <div>
                        {{ answer }}
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
    margin-bottom:60px;
    min-height:200px;
    color:black;
    background-color:white;
    border-radius: 15px;
    width:1200px;
    padding-right:15px;
    padding-left:15px;
}
</style>
