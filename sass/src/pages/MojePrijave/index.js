import React from "react";
import {Button, Table } from "reactstrap";


export default function MojePrijave()
{
    return(
        <>
        <h1 className="page-title">Moje prijave</h1>
        <Table hover>
            <thead>
                <tr>
                    <th>R.Br</th>
                    <th>Naziv</th>
                    <th>Datum</th>
                    <th></th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Auotnomna vožnja</td>
                        <td>29.11.2023</td>
                        <td className="text-right">
                            <Button color="danger" size="sm">Kreni</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Auotnomna vožnja</td>
                        <td>29.11.2023</td>
                        <td className="text-right">
                            <Button color="danger" size="sm">Kreni</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Auotnomna vožnja</td>
                        <td>29.11.2023</td>
                        <td className="text-right">
                            <Button color="danger" size="sm">Kreni</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Auotnomna vožnja</td>
                        <td>29.11.2023</td>
                        <td className="text-right">
                            <Button color="danger" size="sm">Kreni</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Auotnomna vožnja</td>
                        <td>29.11.2023</td>
                        <td className="text-right">
                            <Button color="danger" size="sm">Kreni</Button>
                        </td>
                    </tr>
                </tbody>
                

        </Table>
        </>
    )


}












