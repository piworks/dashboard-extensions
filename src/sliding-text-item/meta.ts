import { editorTemplates } from 'devexpress-dashboard/model/index.metadata';
export const ONLINE_SLIDING_TEXT_EXTENSION_NAME = 'SlidingText';

export const slidingTextMeta: any = {
    bindings:[{
        propertyName: 'Text',
        dataItemType: 'Dimension',
        array: true,
        enableInteractivity: true,
        displayName: "DashboardWebCustomItemStringId.Text",
        emptyPlaceholder: 'DashboardWebCustomItemStringId.Binding.SetText',
        selectedPlaceholder: "DashboardWebCustomItemStringId.Binding.ConfigureText",
        constraints: {
            allowedTypes: ['Text']
        }
    }],
    properties: [{
        propertyName: 'Text',
        editor: editorTemplates.textFile,
        displayName: "DashboardWebCustomItemStringId.BehaviorText",
        defaultVal: ''
    },{
        propertyName: 'Behavior',
        editor: editorTemplates.buttonGroup,
        displayName: "DashboardWebCustomItemStringId.Behavior",
        sectionName: 'DashboardWebCustomItemStringId.SectionName',
        values: {
            Scroll: "DashboardWebCustomItemStringId.BehaviorScroll",
            Slide: "DashboardWebCustomItemStringId.BehaviorSlide",
            Alternate: "DashboardWebCustomItemStringId.BehaviorAlternate"
        },
        defaultVal: 'Scroll'
    },{
        propertyName: 'Direction',
        editor: editorTemplates.buttonGroup,
        displayName: "DashboardWebCustomItemStringId.Direction",
        sectionName: 'DashboardWebCustomItemStringId.SectionName',
        values: {
            Left: "DashboardWebCustomItemStringId.DirectionLeft",
            Right: "DashboardWebCustomItemStringId.DirectionRight",
            Up: "DashboardWebCustomItemStringId.DirectionUp",
            Down: "DashboardWebCustomItemStringId.DirectionDown",
        },
        defaultVal: 'Left'
    },{
        propertyName: 'ScrollDelay',
        editor: editorTemplates.toggleNumeric,
        displayName: "DashboardWebCustomItemStringId.ScrollDelay",
        sectionName: 'DashboardWebCustomItemStringId.SectionName',
        defaultVal: 85
    },{
        propertyName: 'BackgroundColor',
        editor: editorTemplates.text,
        displayName: "DashboardWebCustomItemStringId.BackgroundColor",
        sectionName: 'DashboardWebCustomItemStringId.SectionName',
        defaultVal: '#ffffff'
    },{
        propertyName: 'FontFamily',
        editor: editorTemplates.list,
        values: {
            'Arial': 'DashboardWebCustomItemStringId.Font.Family.Arial',
            'Segoe UI': 'DashboardWebCustomItemStringId.Font.Family.SegoeUI',
            'Helvetica Neue': 'DashboardWebCustomItemStringId.Font.Family.HelveticaNeue',
            'Verdana': 'DashboardWebCustomItemStringId.Font.Family.Verdana',
            'sans-serif': 'DashboardWebCustomItemStringId.Font.Family.SansSerif',
        },
        displayName: "DashboardWebCustomItemStringId.Font.Family",
        sectionName: 'DashboardWebCustomItemStringId.SectionName',
        defaultVal: 'Arial'
    },{
        propertyName: 'FontColor',
        editor: editorTemplates.text,
        displayName: "DashboardWebCustomItemStringId.FontColor",
        sectionName: 'DashboardWebCustomItemStringId.SectionName',
        defaultVal: '#000000'
    },{
        propertyName: 'FontStyle',
        editor: editorTemplates.buttonGroup,
        values: {
            Normal: "DashboardWebCustomItemStringId.Font.Style.Normal",
            Bold: "DashboardWebCustomItemStringId.Font.Style.Bold",
            Italic: "DashboardWebCustomItemStringId.Font.Style.Italic",
        },
        displayName: "DashboardWebCustomItemStringId.FontColor",
        sectionName: 'DashboardWebCustomItemStringId.SectionName',
        defaultVal: 'Normal'
    },{
        propertyName: 'FontSize',
        editor: editorTemplates.numeric,
        displayName: "DashboardWebCustomItemStringId.FontSize",
        sectionName: 'DashboardWebCustomItemStringId.SectionName',
        defaultVal: 14
    },{
        propertyName: 'Flash',
        editor: editorTemplates.buttonGroup,
        values: {
            On: 'DashboardWebCustomItemStringId.Flash.On',
            Off: 'DashboardWebCustomItemStringId.Flash.Off'
        },
        displayName: "DashboardWebCustomItemStringId.Flash",
        sectionName: 'DashboardWebCustomItemStringId.SectionNameFlash',
        defaultVal: 'Off'
    },{
        propertyName: 'FlashStartColor',
        editor: editorTemplates.text,
        displayName: "DashboardWebCustomItemStringId.Flash.StartColor",
        sectionName: 'DashboardWebCustomItemStringId.SectionNameFlash',
        defaultVal: '#337ab7'
    },{
        propertyName: 'FlashEndColor',
        editor: editorTemplates.text,
        displayName: "DashboardWebCustomItemStringId.Flash.EndColor",
        sectionName: 'DashboardWebCustomItemStringId.SectionNameFlash',
        defaultVal: '#ffffff'
    },{
        propertyName: 'FlashDuration',
        editor: editorTemplates.numeric,
        displayName: "DashboardWebCustomItemStringId.Flash.Duration",
        sectionName: 'DashboardWebCustomItemStringId.SectionNameFlash',
        defaultVal: 3
    }],
    interactivity: {
        filter: true,
        drillDown: false
    },
    icon: ONLINE_SLIDING_TEXT_EXTENSION_NAME,
    title: "DashboardWebCustomItemStringId.DefaultNameSlidingText",
    index: 1
};
