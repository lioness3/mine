import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage >
      <IonHeader color='primary'>
        <IonToolbar>
          <IonTitle>Weather</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>

          </IonToolbar>
        </IonHeader>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
