import React from "react";
import Istaknuto from "../../components/Istaknuto";

export default function LoginPage()
{
    return(
        <>
        <h1>Registriraj se</h1>
        <Istaknuto>
            <form>
                <div className="form-group">
                    <label>Ime i Prezime</label>
                    <input type="text" name="text"/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email"/>
                </div>

                <div className="form-group">
                    <label>Lozinka</label>
                    <input type="password" name="password"/>
                </div>

                <div className="form-group">
                    <label>Ponovi lozinku!</label>
                    <input type="password" name="password"/>
                </div>

                <div className="btn-container">
                    <button type="submit">Registriraj se</button>
                </div>
            </form>

        </Istaknuto>
        </>
    )
}


















