import {PageWidget} from 'aolie_core/src//home/homepage/PageWidget';
import {RegHomeBlock} from 'aolie_core/src//decorator/decorator';
import {MonitorService} from '../services/MonitorService';
import {EchartsTools} from './EchartsTools';

@RegHomeBlock("HotSchemaBlock")
export class HotSchemaBlock extends PageWidget {
    protected createUI(): HTMLElement {
        return $("<div class='full-display hot-schema'><div class='chart full-display'></div></div>").get(0);
    }

    getHorSpan(): number {
        return 6;
    }

    getOrder(): number {
        return 110;
    }

    refresh(): void {
        MonitorService.getHotSchemaData((data) => {
            EchartsTools.showPieChart(this.$element.find(".chart").get(0),
                "方案使用排名",
                "方案", EchartsTools.toPieData(data));
        });
    }

    afterComponentAssemble(): void {
        this.refresh();
    }


}
