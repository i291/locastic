
import React, { Component, useEffect, useState } from 'react';

const Rezultat = props => {
    console.log("PROPS: ", props)
    return (
        <tr>
            <td>{props.rezultat.fullName}</td>
            <td>{props.rezultat.raceTime}</td>
            <td>{props.rezultat.distance}</td>

            <td>
                <a href={"/edit/" + props.rezultat._id}>edit </a>
            </td>
        </tr>

    )
}

export default Rezultat