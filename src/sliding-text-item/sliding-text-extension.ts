import { ONLINE_SLIDING_TEXT_EXTENSION_NAME, slidingTextMeta } from "./meta";
import { ICustomItemExtension } from 'devexpress-dashboard/common';
import { SlidingTextItem } from './sliding-text-viewer';
import { SLIDING_TEXT_ICON } from './icon';
import { dxElement } from 'devextreme/core/element';
import './localization';

export class SlidingTextItemExtension implements ICustomItemExtension {
    name = ONLINE_SLIDING_TEXT_EXTENSION_NAME;
    metaData = slidingTextMeta;

    constructor(dashboardControl: any) {
        dashboardControl.registerIcon(SLIDING_TEXT_ICON);
    }

    createViewerItem(model: any, element: dxElement, content: any) {
        return new SlidingTextItem(model, element, content);
    };
}