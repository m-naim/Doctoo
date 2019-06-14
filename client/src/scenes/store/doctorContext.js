import { createContext } from "react"; 

export const DoctorContext = createContext({
  doctorSelected: "doov",
  selectDoctor: () => {},
});
