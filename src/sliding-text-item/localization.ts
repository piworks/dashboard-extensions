import { ResourceManager } from 'devexpress-dashboard'

function getDefaultCustomLocalization() {
    return {
        // Binding Panel
        'DashboardWebCustomItemStringId.DefaultNameSlidingText': "Sliding Text",

        'DashboardWebCustomItemStringId.Text': "Text",
        'DashboardWebCustomItemStringId.Behavior': "Behavior",
        'DashboardWebCustomItemStringId.Binding.SetText': "Set Text",
        'DashboardWebCustomItemStringId.Binding.ConfigureText': "Configure Text",
        'DashboardWebCustomItemStringId.SectionName': 'Settings',
        'DashboardWebCustomItemStringId.BehaviorToRight': 'Left to Right',
        'DashboardWebCustomItemStringId.BehaviorToLeft': 'Right to Left',
        'DashboardWebCustomItemStringId.BehaviorScroll': 'Scroll',
        'DashboardWebCustomItemStringId.BehaviorSlide': 'Slide',
        'DashboardWebCustomItemStringId.BehaviorAlternate': 'Alternate',
        'DashboardWebCustomItemStringId.Direction': 'Direction',
        'DashboardWebCustomItemStringId.DirectionLeft': 'Left',
        'DashboardWebCustomItemStringId.DirectionRight': 'Right',
        'DashboardWebCustomItemStringId.DirectionUp': 'Up',
        'DashboardWebCustomItemStringId.DirectionDown': 'Down'
    };
}
ResourceManager.setLocalizationMessages(getDefaultCustomLocalization());

