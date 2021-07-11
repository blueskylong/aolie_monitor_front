
import {RegHomeBlock} from "aolie_core/src/decorator/decorator";
import {MonitorService} from "../services/MonitorService";
import {EchartsTools} from "./EchartsTools";
import { PageWidget } from "aolie_core/src/home/homepage/PageWidget";


@RegHomeBlock("ControllerLastTimeBlock")
export class ControllerLastTimeBlock extends PageWidget {
    protected createUI(): HTMLElement {
        return $("<div class='full-display '><div class='chart full-display'></div></div>").get(0);
    }

    getHorSpan(): number {
        return 6;
    }

    getOrder(): number {
        return 160;
    }

    refresh(): void {
        MonitorService.getControllerServiceTimeData((data) => {
            EchartsTools.showBarChart(this.$element.find(".chart").get(0),
                "URL服务累计时间TOP10",
                "URL", EchartsTools.toArray(data));
        });
    }

    afterComponentAssemble(): void {
        this.refresh();
    }


}
