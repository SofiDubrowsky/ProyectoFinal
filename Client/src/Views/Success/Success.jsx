import style from "./Success.module.css";
import { NavLink } from "react-router-dom";

const Success = () => {
  return (
    <div className={style.success}>
        <h1>Se ha resgistrado tu reserva exitosamente!</h1>
        <div className={style.image}>
        <img src="https://www.jagranimages.com/images/newimg/19052020/19_05_2020-tiding_shoe_lace_20283980.jpg" alt="Ready!" />
        <div className={style.nav}>
        <NavLink to="/home">
         Volver al inicio
        </NavLink>
        </div>
        <img src="https://www.freeiconspng.com/uploads/check-mark-ok-png-10.png" className={style.check} alt="" />
        <div className={style.nav}>
        <NavLink to="/">
         Ver mis reservas
        </NavLink>
        </div>
        </div>
    </div>
  );

  
};

export default Success;