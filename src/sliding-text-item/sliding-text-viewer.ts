import { CustomItemViewer } from 'devexpress-dashboard/common';
import { dxElement } from 'devextreme/core/element';

const getCustomizedFlashStyle = (backgroundStartColor: string, backgroundEndColor: string, duration: number) => {
    return `
.quadrat {
    width: inherit;
    height: inherit;
    -webkit-animation: FLASH ${duration}s infinite; /* Safari 4+ */
    -moz-animation:    FLASH ${duration}s infinite; /* Fx 5+ */
    -o-animation:      FLASH ${duration}s infinite; /* Opera 12+ */
    animation:         FLASH ${duration}s infinite; /* IE 10+, Fx 29+ */
}
  
@-webkit-keyframes FLASH {
    0%, 49% {
        background-color: ${backgroundStartColor};
    }
    50%, 100% {
        background-color: ${backgroundEndColor};
    }
}`
};

const getCustomizedFontStyle = (fontFamily: string) => {
    return `
.fontFamilyCustom {
    font-family: '${fontFamily}';
}`
};

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
        this.subscribe('Text', () => {
            this._update();
        });
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
        this.subscribe('FontFamily', (fontFamily) => {
            this.settings.fontFamily = fontFamily;
            this._update();
        });
        this.subscribe('FontColor', (fontColor) => {
            this.settings.fontColor = fontColor;
            this._update();
        });
        this.subscribe('FontStyle', (fontStyle) => {
            this.settings.fontStyle = fontStyle;
            this._update();
        });
        this.subscribe('FontSize', (fontSize) => {
            this.settings.fontSize = fontSize;
            this._update();
        });
        this.subscribe('ScrollDelay', (scrollDelay) => {
            this.settings.scrollDelay = scrollDelay;
            this._update();
        });
        this.subscribe('Flash', (flash) => {
            this.settings.flash = flash;
            this._update();
        });
        this.subscribe('FlashStartColor', (flashStartColor) => {
            this.settings.flashStartColor = flashStartColor;
            this._update();
        });
        this.subscribe('FlashEndColor', (flashEndColor) => {
            this.settings.flashEndColor = flashEndColor;
            this._update();
        });
        this.subscribe('FlashDuration', (flashDuration) => {
            this.settings.flashDuration = flashDuration;
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
        $marquee = $('<marquee/>', { id:'slidingTextContainer', direction: 'left', scrolldelay: scrollDelay });
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
        if(this.settings.fontFamily) {
            $('#fontFamilyStyle').remove();
            $(`<style id="fontFamilyStyle" type='text/css'>${getCustomizedFontStyle(this.settings.fontFamily)}</style>`).appendTo("head");
            $marquee.addClass('fontFamilyCustom');
        }
        if(this.settings.fontColor) {
            $marquee.css('color', this.settings.fontColor);
        }
        if(this.settings.fontSize) {
            $marquee.css('font-size', this.settings.fontSize + 'px');
        }
        if(this.settings.flash) {
            $('#flashStyle').remove();
            let startColor = this.settings.flashStartColor || '#337ab7';
            let endColor = this.settings.flashEndColor || '#000000';
            let duration = this.settings.flashDuration || 4;
            $(`<style id="flashStyle" type='text/css'>${getCustomizedFlashStyle(startColor, endColor, duration)}</style>`).appendTo("head");
            $marquee.addClass('quadrat');
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
                fontFamily: this.getPropertyValue('FontFamily'),
                fontColor: this.getPropertyValue('FontColor'),
                fontStyle: this.getPropertyValue('FontStyle'),
                fontSize: this.getPropertyValue('FontSize'),
                scrollDelay: this.getPropertyValue('ScrollDelay'),
                flash: this.getPropertyValue('Flash'),
                flashStartColor: this.getPropertyValue('FlashStartColor'),
                flashEndColor: this.getPropertyValue('FlashEndColor'),
                flashDuration: this.getPropertyValue('FlashDuration')
            }
        }
    }
}