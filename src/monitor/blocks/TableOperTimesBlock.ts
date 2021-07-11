import {PageWidget} from 'aolie_core/src/home/homepage/PageWidget';
import {RegHomeBlock} from 'aolie_core/src/decorator/decorator';
import {MonitorService} from '../services/MonitorService';
import {EchartsTools} from './EchartsTools';


@RegHomeBlock("TableOperTimesBlock")
export class TableOperTimesBlock extends PageWidget {
    protected createUI(): HTMLElement {
        return $("<div class='full-display '><div class='chart full-display'></div></div>").get(0);
    }

    getHorSpan(): number {
        return 6;
    }

    getOrder(): number {
        return 130;
    }

    refresh(): void {
        MonitorService.getOptTimesUpdateData((data) => {
            EchartsTools.showBarChart(this.$element.find(".chart").get(0),
                "表数据更新操作累计次数TOP10",
                "更新次数", EchartsTools.toArray(data));
        });
    }

    afterComponentAssemble(): void {
        this.refresh();
    }


}
