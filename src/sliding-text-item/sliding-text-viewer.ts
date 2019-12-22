import { CustomItemViewer } from 'devexpress-dashboard/common';
import { dxElement } from 'devextreme/core/element';

export class SlidingTextItem extends CustomItemViewer {
    private textViewer: any;
    private $marquee: any;

    constructor(model:any, container, options) {
        super(model, container, options);
        this.textViewer = null;
        this.$marquee = undefined;
    }

    setSize(width: any, height: any) {
        super.setSize(width, height);
    };

    setSelection(values: Array<Array<any>>) {
        super.setSelection(values);
        this._updateSelection();
    };

    clearSelection() {
        super.clearSelection();
        this._updateSelection();
    };

    renderContent(element: dxElement, changeExisting: boolean, afterRenderCallback?) {
        // The changeExisting flag indicates whether to update a custom item content or 
        // render it from scratch when any changes exist (true to update content; otherwise, false).
        let $element = $(element);
        if (!changeExisting) {
            $element.empty();
            $element.css('overflow', 'auto');
            this.$marquee = $('<marquee/>', { direction: 'left' });
            $element.append(this.$marquee);
        }
        this._update();
    }

    private _updateSelection() {
    }

    private _update() {
        let self = this;
        this.iterateData(function(rowDataObject) {
            var valueTexts = rowDataObject.getDisplayText('Text');
            self.$marquee.html(self.$marquee.html() + valueTexts.join('\n'));
        });
    }
}