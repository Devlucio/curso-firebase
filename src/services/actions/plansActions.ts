import { addPlansAcess, setPlansAcess } from "../dataAcess/PlanAcess";

export async function addPlansAtion(body: any) {
  const response = await addPlansAcess(body);
  return response.id;
}

export async function setPlansAtion(body: any) {
  const response = await setPlansAcess(body);
  return response;
}
