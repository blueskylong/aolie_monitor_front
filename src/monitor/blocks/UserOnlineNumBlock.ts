import {PageWidget} from 'aolie_core/src/home/homepage/PageWidget';
import {RegHomeBlock} from 'aolie_core/src/decorator/decorator';
import {MonitorService} from '../services/MonitorService';
import {EchartsTools} from './EchartsTools';

@RegHomeBlock('UserOnlineNumBlock')
export class UserOnlineNumBlock extends PageWidget {
    protected createUI(): HTMLElement {
        return $('<div class=\'full-display user-activity-time\'><div class=\'chart full-display\'></div></div>').get(0);
    }

    getHorSpan(): number {
        return 6;
    }

    getOrder(): number {
        return 140;
    }

    refresh(): void {
        MonitorService.getSessionCount((num) => {
            EchartsTools.showDashChart(this.$element.find('.chart').get(0),
                '在线人数',
                num);
        });
    }

    afterComponentAssemble(): void {
        this.refresh();
    }

}
