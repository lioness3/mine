import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { carSport, bed, refresh, cloudyNight } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Tab5 from './pages/Tab5';
import Paper from './md-paper.svg'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/items" component={Tab1} exact={true} />
          <Route path="/gas" component={Tab2} exact={true} />
          <Route path="/hotels" component={Tab3} />
            <Route path="/weather" component={Tab4} />
              <Route path="/dial" component={Tab5} />
          <Route path="/" render={() => <Redirect to="/items" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/items">
            <IonIcon icon={Paper} />
            <IonLabel>Needed Items</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/gas">
            <IonIcon icon={carSport} />
            <IonLabel>Top Tier Gas</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/hotels">
            <IonIcon icon={bed} />
            <IonLabel>Hotels</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/weather">
            <IonIcon icon={cloudyNight} />
            <IonLabel>Weather</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab5" href="/dial">
            <IonIcon icon={refresh} />
            <IonLabel>dial</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
