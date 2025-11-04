import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
// import nommé depuis CardList.js
import { CardList } from './components/CardList';

export default function App() {
  return (
    // conteneur principal de l’écran
    <View style={styles.screen}>
      {/* barre de statut (heure, réseau, batterie…) contrôlée par React Native */}
      <StatusBar />
      {/* affichage de la liste de cartes */}
      <CardList />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,                   // occupe tout l’espace disponible verticalement
    backgroundColor: '#f6f7fb' // couleur de fond de l’écran
  }
});
