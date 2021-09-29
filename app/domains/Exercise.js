import React from "react";
import CommonUtil from "../utils/CommonUtil";

export default class Exercise {

    id;
    name;
    timers;

    constructor(name, timers) {
        this.id = CommonUtil.getCurrentTime();
        this.name = name;
        this.timers = timers;
    }
}
