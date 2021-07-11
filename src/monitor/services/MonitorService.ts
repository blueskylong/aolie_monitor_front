import {CommonUtils} from "aolie_core/src/common/CommonUtils";
import {NetRequest} from "aolie_core/src/common/NetRequest";

/**
 * 监控服务
 */
export class MonitorService {
    static getSessionCount(callback: (sessionCount: number) => void) {
        CommonUtils.handleResponse(NetRequest.axios.get("/monitor/getSessionCount"), (result => {
            callback(result);
        }));
    }

    static getHotTableData(callback: (sessionCount) => void) {
        CommonUtils.handleResponse(NetRequest.axios.get("/monitor/getHotTableData"), (result => {
            callback(result);
        }));
    }

    static getHotSchemaData(callback: (sessionCount) => void) {
        CommonUtils.handleResponse(NetRequest.axios.get("/monitor/getHotSchemaData"), (result => {
            callback(result);
        }));
    }

    static getOptLastTimeQueryData(callback: (sessionCount) => void) {
        CommonUtils.handleResponse(NetRequest.axios.get("/monitor/getOptLastTimeQueryData"), (result => {
            callback(result);
        }));
    }

    static getOptLastTimeUpdateData(callback: (sessionCount) => void) {
        CommonUtils.handleResponse(NetRequest.axios.get("/monitor/getOptLastTimeUpdateData"), (result => {
            callback(result);
        }));
    }

    static getOptTimesUpdateData(callback: (sessionCount) => void) {
        CommonUtils.handleResponse(NetRequest.axios.get("/monitor/getOptTimesUpdateData"), (result => {
            callback(result);
        }));
    }

    static getOptTimesQueryData(callback: (sessionCount) => void) {
        CommonUtils.handleResponse(NetRequest.axios.get("/monitor/getOptTimesQueryData"), (result => {
            callback(result);
        }));
    }

    static getOptTimesByHourData(callback: (sessionCount) => void) {
        CommonUtils.handleResponse(NetRequest.axios.get("/monitor/getOptTimesByHourData"), (result => {
            callback(result);
        }));
    }

    static getControllerServiceTimeData(callback: (sessionCount) => void) {
        CommonUtils.handleResponse(NetRequest.axios.get("/monitor/getControllerServiceTimeData"), (result => {
            callback(result);
        }));
    }
}
