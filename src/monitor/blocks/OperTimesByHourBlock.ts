import {PageWidget} from 'aolie_core/src/home/homepage/PageWidget';
import {RegHomeBlock} from 'aolie_core/src/decorator/decorator';
import {MonitorService} from '../services/MonitorService';
import {EchartsTools} from './EchartsTools';

@RegHomeBlock("OperTimesByHourBlock")
export class OperTimesByHourBlock extends PageWidget {
    protected createUI(): HTMLElement {
        return $("<div class='full-display user-activity-time'><div class='chart full-display'></div></div>").get(0);
    }

    getHorSpan(): number {
        return 6;
    }

    getOrder(): number {
        return 113;
    }

    refresh(): void {
        MonitorService.getOptTimesByHourData((data) => {
            EchartsTools.showLineChart(this.$element.find(".chart").get(0),
                "操作频率按小时分布",
                "服务", EchartsTools.toArray(data));
        });
    }

    afterComponentAssemble(): void {
        this.refresh();
    }


}
