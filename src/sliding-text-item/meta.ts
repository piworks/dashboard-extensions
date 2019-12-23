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
        defaultVal: 'Right'
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
    }],
    interactivity: {
        filter: true,
        drillDown: false
    },
    icon: ONLINE_SLIDING_TEXT_EXTENSION_NAME,
    title: "DashboardWebCustomItemStringId.DefaultNameSlidingText",
    index: 1
};
