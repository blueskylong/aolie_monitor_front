import {PageWidget} from 'aolie_core/src/home/homepage/PageWidget';
import {RegHomeBlock} from 'aolie_core/src/decorator/decorator';
import {MonitorService} from '../services/MonitorService';
import {EchartsTools} from './EchartsTools';

@RegHomeBlock("LastTimeTopBlock")
export class LastTimeTopBlock extends PageWidget {
    protected createUI(): HTMLElement {
        return $("<div class='full-display user-activity-time'><div class='chart full-display'></div></div>").get(0);
    }

    getHorSpan(): number {
        return 6;
    }

    getOrder(): number {
        return 120;
    }

    refresh(): void {
        MonitorService.getOptLastTimeQueryData((data) => {
            EchartsTools.showBarChart(this.$element.find(".chart").get(0),
                "表访问时间累计TOP10",
                "服务", EchartsTools.toArray(data));
        });
    }

    afterComponentAssemble(): void {
        this.refresh();
    }


}
