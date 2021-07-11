import {PageWidget} from "aolie_core/src/home/homepage/PageWidget";
import {RegHomeBlock} from "aolie_core/src/decorator/decorator";
import {EchartsTools} from "./EchartsTools";
import {MonitorService} from "../services/MonitorService";

@RegHomeBlock("HotDataBlock")
export class HotDataBlock extends PageWidget {
    protected createUI(): HTMLElement {
        return $("<div class='full-display hot-data-block'><div class='chart full-display'></div></div>").get(0);
    }

    getHorSpan(): number {
        return 6;
    }

    getOrder(): number {
        return 100;
    }

    refresh(): void {
        MonitorService.getHotTableData((data) => {
            EchartsTools.showBarChart(this.$element.find(".chart").get(0),
                "数据访问次数TOP10", "数据表", EchartsTools.toArray(data));
        });

    }

    afterComponentAssemble(): void {
        this.refresh();
    }


}
