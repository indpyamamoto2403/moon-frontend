<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['send']);
const inputText1 = ref('');
const inputText2= ref('');
const inputText3 = ref('');

const generateResponse = () => {
  // Emit 'send' event with input values
  emit('send', {
    input1: inputText1.value,
    input2: inputText2.value,
    input3: inputText3.value
  });

  // Clear input fields
  inputText1.value = '';
  inputText2.value = '';
  inputText3.value = '';
}
// const generateResponse = async () => {
//   try {
//     const apiEndpoint = 'http://127.0.0.1:8000/'; // Replace with your actual endpoint
//     const params = { text: inputText.value }; // Parameters to send in the GET request

//     const res = await axios.get(apiEndpoint, { params });
    
//     console.log('Response:', res.data);
    
//     response.value = res.data.response; // Adjust according to your API response structure
//     error.value = ''; // Clear previous error message
//   } catch (err) {
//     console.error('Error fetching response:', err);
//     response.value = '';
//     error.value = 'Error occurred while fetching response.';
//   }
// };
</script>

<template>
    <div class="open-ai-responder">
      <div class="textbox-wrapper">
        <input type="text" v-model="inputText1" placeholder="会社名・URL" class="info-input"/>
        <input type="text" v-model="inputText2" placeholder="会社名・URL" class="info-input"/>
        <input type="text" v-model="inputText3" placeholder="会社名・URL" class="info-input"/>
        <button class="send-button" @click="generateResponse">Send</button>
      </div>
    </div>
  </template>
  <style>
.open-ai-responder {
  padding-top:50px;
  padding-bottom:30px;
  width:1200px;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#C1E5F5;
  border-radius: 15px;
}

textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 1em;
}

button {
  display: block;
  margin: 1em 0;
}

.error {
  color: red;
}

.textbox-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  width:400px;
}

.send-button {
  background-color: #FFD343;
  border: none;
  padding: 0.5em 1em;
  font-size: 1em;
  color: black;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  width:100%;
}

.send-button:hover {
  background-color: #FFC107;
  transform: scale(1.05);
}

.send-button:active {
  background-color: #FFA000;
  transform: scale(0.95);
}

.info-input {
  width: 100%;
  height: 30px;
  border-radius: 7px;
  border: none;
  padding-left: 10px;
}
</style>
