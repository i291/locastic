import axios from 'axios';

const dodajUtrku= async utrka=>{
    const odg=await axios.post('http://localhost:5000/utrka/saveutrka',utrka)
    return odg
}

export default{
    dodajUtrku,
}