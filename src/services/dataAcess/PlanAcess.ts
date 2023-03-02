import { db } from "../../FirebaseConfig";

const plansReference = db.collection('plans');

export function addPlansAcess(){
    plansReference.add({text: 'Mensal', value: 37}).then((res) => {
        console.log(res.id);
    })
}