import { CustomItemViewer } from 'devexpress-dashboard/common';
import { dxElement } from 'devextreme/core/element';

export class SlidingTextItem extends CustomItemViewer {
    private textViewer: any;
    private $element: any;
    private settings: any;

    constructor(model:any, container, options) {
        super(model, container, options);
        this.textViewer = null;
        this.$element = null;
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
        let $marquee = null;
        if (!changeExisting) {
            $element.empty();
            $element.css('overflow', 'auto');
            $marquee = $('<marquee/>', { direction: 'left' });
            $element.append($marquee);
        }
        this.$element = $element;
        this._update();
    }

    _subscribeProperties() {
        this.subscribe('Behavior', (behavior) => {
            this.settings.behavior = behavior;
            this._update();
        });
        this.subscribe('Direction', (direction) => {
            this.settings.direction = direction;
            this._update();
        });
        this.subscribe('BackgroundColor', (backgroundColor) => {
            this.settings.backgroundColor = backgroundColor;
            this._update();
        });
        this.subscribe('FontColor', (fontColor) => {
            this.settings.fontColor = fontColor;
            this._update();
        });
        this.subscribe('ScrollDelay', (scrollDelay) => {
            this.settings.scrollDelay = scrollDelay;
            this._update();
        });
        this.subscribe('FontStyle', (fontStyle) => {
            this.settings.fontStyle = fontStyle;
            this._update();
        });
    };

    private _updateSelection() {
    }

    private _update() {
        this._ensureSettings();
        let $marquee = null;
        
        this.$element.empty();
        this.$element.css('overflow', 'hidden');
        let scrollDelay = this.settings.scrollDelay || 85;
        $marquee = $('<marquee/>', { direction: 'left', scrolldelay: scrollDelay });
        $marquee.css('height', 'inherit');
        if(this.settings.behavior) {
            $marquee.attr('behavior', this.settings.behavior.toLowerCase());
        } 
        if(this.settings.direction) {
            $marquee.attr('direction', this.settings.direction.toLowerCase());
        }
        if(this.settings.backgroundColor) {
            $marquee.css('background-color', this.settings.backgroundColor);
        }
        if(this.settings.fontColor) {
            $marquee.css('color', this.settings.fontColor);
        }

        let fontStyleTagName = this.getFontStyleTagName(this.settings.fontStyle);

        this.$element.append($marquee);
        let textProperty = this.getPropertyValue('Text');
        if(textProperty){
            $marquee.html(`<${fontStyleTagName}>${textProperty}</${fontStyleTagName}>`);
        } else {
            this.iterateData(function(rowDataObject) {
                var valueTexts = rowDataObject.getDisplayText('Text');
                $marquee.html($marquee.html() + valueTexts.join('<span>&#9;</span>') + '<span>&#9;</span>');
            });
            $marquee.html(`<${fontStyleTagName}>${$marquee.html()}</${fontStyleTagName}>`);
        }

    }

    private getFontStyleTagName (fontStyle: string) {
        switch (fontStyle) {
            case 'Bold':
                return 'b';
            case 'Italic':
                return 'i';
            case 'Normal':
            default:
                return 'span';
        }
    }

    private _ensureSettings() {
        if(!this.settings) {
            this.settings = {
                behavior: this.getPropertyValue('Behavior'),
                direction: this.getPropertyValue('Direction'),
                backgroundColor: this.getPropertyValue('BackgroundColor'),
                fontColor: this.getPropertyValue('FontColor'),
                fontStyle: this.getPropertyValue('FontStyle'),
                scrollDelay: this.getPropertyValue('ScrollDelay'),
            }
        }
    }
}