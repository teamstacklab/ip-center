// Icones
import {
    Person
  } from 'react-bootstrap-icons';

function AuthNavigationUser() {
    return (
        <div className="menu__actions">
            <Person className="menu__link__icon" />
            <p className="m-0 p-0 actions__text">Aparecido Ribeiro</p>
            <button className="actions__btn actions__register menu__link px-3 py-0 text-decoration-none" onClick={logOut}>Logout</button>
        </div>
    )
}

export default AuthNavigationUser