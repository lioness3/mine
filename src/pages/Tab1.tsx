import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';


import './Tab1.css';

const Tab1: React.FC = () => {

  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();
  return (
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Enter items needed below</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>



            <IonItem>

              <IonInput value={text}
              placeholder="new item"
             onIonChange={e => setText(e.detail.value!)} clearInput ></IonInput>
            </IonItem>





            <IonItemDivider/>

            <IonItem>
                {text}
            </IonItem>



          </IonList>
        </IonContent>
      </IonPage>
    );
  };

export default Tab1;
