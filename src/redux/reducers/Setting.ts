import {Setting} from '@app/models';
import {
  ROUTE_CHANGE,
  SET_INITIAL_PATH,
  SettingsActionTypes,
  TOGGLE_NAV_COLLAPSED,
} from '@app/types/actions/Settings.action';

const initialSettings: Setting = {
  navCollapsed: false,
  initialPath: '/',
};

const Settings = (state = initialSettings, action: SettingsActionTypes) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default Settings;
