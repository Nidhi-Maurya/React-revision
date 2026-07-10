
import { sum } from "../utils/sum";
test("sum function should calculate the sum of two number",()=>{

const result =sum(2,6);

expect(result).toBe(8);   // this line known as assertion 

})


