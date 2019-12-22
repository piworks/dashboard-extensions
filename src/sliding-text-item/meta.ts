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
    interactivity: {
        filter: true,
        drillDown: false
    },
    icon: ONLINE_SLIDING_TEXT_EXTENSION_NAME,
    title: "DashboardWebCustomItemStringId.DefaultNameSlidingText",
    index: 1
};
