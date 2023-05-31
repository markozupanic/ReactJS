import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Istaknuto from "../../components/Istaknuto";

export default function LoginPage()
{
    return(
        <>
        <h1>Prijava</h1>
        <Istaknuto>
            <form>
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" name="email"/>
                </div>
                <div className="form-group">
                    <label>Lozinka</label>
                    <input type="password" name="password"/>
                </div>

                <div className="btn-container">
                    <button type="submit">Prijavi se</button>
                </div>
            </form>

        </Istaknuto>
        </>
    )
}












