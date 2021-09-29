import React from "react";
import CommonUtil from "../utils/CommonUtil";

export default class Timer {
    id;
    type;
    title;
    sec;
    order;

    constructor(type) {
        this.id = CommonUtil.getCurrentTime();
        this.type = type;
        this.title = this.getTitle(type);
        this.sec = "30";
    }

    getTitle(type) {
        if(type == "EXERCISE") {
            return '운동';
        }else if(type == "REST") {
            return '휴식';
        }else if(type == "START") {
            return '시작';
        }
    }
}
