// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const year = 1985;
const holidays = [
  '01/01',
  '01/06',
  '02/02',
  '02/17',
  '02/28',
  '06/03',
  '12/06',
  '12/25',
]; // format MM/DD

function countHours(year, holidays) {
  let count = 0;
  const lastDay = `31/12/${year}`;
  const firstDay = `01/01/${year}`;
  holidays.map((day) => {
    const completeDay = day.concat(`/${year}`);
    const date = new Date(completeDay);
    //Comienzo y fin de año estan dentro del array
    if (completeDay === lastDay && (date.getDay() !== 0 || date.getDay() !== 6))
      count += 2;
    if (
      completeDay === firstDay &&
      (date.getDay() !== 0 || date.getDay() !== 6)
    )
      count += 2;
    if (date.getDay() === 0 || date.getDay() === 6) count += 2;
  });
  count += 2;

  return count;
}

console.log(countHours(year, holidays));

// switch (date.getDay()) {
//   case 0:
//     console.log("Dia: ",date.getDay()," Domingo","/ Contador: ", count)
//     break;
//   case 1:
//     console.log("Dia: ",date.getDay(),"Lunes","/ Contador: ", count)
//     break;
//   case 2:
//     console.log("Dia: ",date.getDay(),"Martes","/ Contador: ", count)
//     break;
//   case 3:
//     console.log("Dia: ",date.getDay(),"Miercoles","/ Contador: ", count)
//     break;
//   case 4:
//     console.log("Dia: ",date.getDay(),"Jueves","/ Contador: ", count)
//     break;
//   case 5:
//     console.log("Dia: ",date.getDay(),"Viernes","/ Contador: ", count)
//     break;
//   default:
//     console.log("Dia: ",date.getDay(),"Sabado","/ Contador: ", count)
//     break;
// }
