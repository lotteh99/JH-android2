import React from "react";

function Home() {
    const refreshPage = ()=>{
        wimdow.location.reload(); //페이지 새로고침
    }

    return (
        <div>
            <h1>
                {Math.random()}
            </h1>
            <button onClick={refreshPage}>refresh</button>
        </div>
    );
};