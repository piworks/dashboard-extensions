import { editorTemplates } from 'devexpress-dashboard/model/index.metadata';
export const ONLINE_SLIDING_TEXT_EXTENSION_NAME = 'SlidingText';

export const slidingTextMeta: any = {
    bindings:[{
        propertyName: 'Text',
        dataItemType: 'Dimension',
        array: false,
        enableInteractivity: true,
        displayName: "DashboardWebCustomItemStringId.Text",
        emptyPlaceholder: 'DashboardWebCustomItemStringId.Binding.SetText',
        selectedPlaceholder: "DashboardWebCustomItemStringId.Binding.ConfigureText",
        constraints: {
            allowedTypes: ['String']
        }
    }],
    properties: [{
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
    }],
    interactivity: {
        filter: true,
        drillDown: false
    },
    icon: ONLINE_SLIDING_TEXT_EXTENSION_NAME,
    title: "DashboardWebCustomItemStringId.DefaultNameSlidingText",
    index: 1
};
