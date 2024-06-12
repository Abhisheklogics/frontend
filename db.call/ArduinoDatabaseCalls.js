import axios from "axios"


const getArduinoData = async (id) => {
  const response = await axios.get('/arduino/getDataArduino', { params: { exId :id} });
  console.log(response.data)
  return response.data;
};
const getRaspberryData = async (id) => {
  const response = await axios.get(`/arduino/getDataRaspberry`,{ params: { exId :id} });
 
  return response.data;
};




const getEspData = async (id) => {
  const response = await axios.get(`/arduino/getespData`,{ params: { exId :id} });
  
  return response.data;
};
 export {getEspData,getRaspberryData,getArduinoData}