import { ResourceManager } from 'devexpress-dashboard'

function getDefaultCustomLocalization() {
    return {
        // Binding Panel
        'DashboardWebCustomItemStringId.DefaultNameSlidingText': "Sliding Text",

        'DashboardWebCustomItemStringId.Text': "Text",
        'DashboardWebCustomItemStringId.Binding.SetText': "Set Text",
        'DashboardWebCustomItemStringId.Binding.ConfigureText': "Configure Text",
    };
}
ResourceManager.setLocalizationMessages(getDefaultCustomLocalization());

