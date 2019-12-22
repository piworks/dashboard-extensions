import { CustomItemViewer } from 'devexpress-dashboard/common';
import { dxElement } from 'devextreme/core/element';

export class SlidingTextItem extends CustomItemViewer {
    private textViewer: any;
    private $marquee: any;
    private settings;

    constructor(model:any, container, options) {
        super(model, container, options);
        this.textViewer = null;
        this.$marquee = undefined;
        this.settings = undefined;
        this._subscribeProperties();
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

    _subscribeProperties() {
        this.subscribe('Behavior', (behavior) => this._update({ behavior: behavior }));
        this.subscribe('Direction', (direction) => this._update({ direction: direction }));
    };

    private _updateSelection() {
    }

    private _update(options?) {
        this._ensureSettings();
        this.$marquee.empty();
        if(!!options){
            this.$marquee.attr('behavior', options.behavior);
            this.$marquee.attr('direction', options.direction);
        }
        let self = this;
        this.iterateData(function(rowDataObject) {
            var valueTexts = rowDataObject.getDisplayText('Text');
            self.$marquee.html(self.$marquee.html() + valueTexts.join('\n'));
        });
    }

    private _ensureSettings() {
        if(!this.settings) {
            this.settings = {
                behavior: this.getPropertyValue('Behavior'),
                direction: this.getPropertyValue('Direction')
            }
        }
    }
}