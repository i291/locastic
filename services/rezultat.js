import axios from 'axios';

const dodajRezultat= async rezultat=>{
    const odg=await axios.post('http://localhost:5000/rezultat/saverezultat',rezultat)
    return odg.data
}
const dohvatiSveRezultatelong =async()=>{
    const promise= await axios.get('http://localhost:5000/rezultat/long')
    return promise

}
const dohvatiSveRezultatemedium =async()=>{
    const promise=await axios.get('http://localhost:5000/rezultat/medium')
    return promise

}
const updetajRezultat =async(id,rezultat)=>{
    
    const odgovor=await axios.post('http://localhost:5000/rezultat/update/' + id, rezultat)
    return odgovor
}

export default{
    dodajRezultat,
    dohvatiSveRezultatelong,
    dohvatiSveRezultatemedium,
    updetajRezultat
}