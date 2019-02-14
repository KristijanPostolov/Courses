import React from "react";
import {navigate} from "@reach/router";

function pom(props) {

    navigate(`/courses/${props.courseId}`);

    return (
        <div>
            <h1>hi</h1>
        </div>
    )
}
export default pom