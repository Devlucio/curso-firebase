import { db } from "../../FirebaseConfig";

const plansReference = db.collection("plans");

export async function addPlansAcess(body: any) {
  const response = await plansReference.add(body);
  return response;
}

export async function setPlansAcess(body: any) {
  const response = await plansReference.doc().set(body);
  return response;
}
