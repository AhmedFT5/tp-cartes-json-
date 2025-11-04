import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CardItem from './CardItem';  // On importe le composant “carte” qui sera utilisé pour chacun des items

// import du JSON local
import cards from '../data/cards.json';  // On récupère les données depuis un fichier JSON local

// export nommé du composant “liste de cartes”
export function CardList() {
  // Fonction qui va dire comment rendre chaque élément dans la liste
  const renderItem = ({ item }) => (
    <CardItem
      title={item.title}             // On passe la prop “title” à CardItem
      description={item.description} // On passe la prop “description”
      image={item.image}             // On passe la prop “image”
    />
  );

  return (
    // Conteneur principal du composant
    <View style={styles.container}>
      <FlatList
        data={cards}                   // On fournit le tableau de données “cards” à FlatList
        keyExtractor={(item) => item.id} // On définit comment obtenir une clé unique pour chaque élément (importante pour React Native)  
        renderItem={renderItem}        // On fournit la fonction qui rend chaque item  
        contentContainerStyle={{ padding: 16 }} // Ajoute un padding interne de 16 autour de la liste  
        showsVerticalScrollIndicator={false}    // On désactive l’indicateur de défilement vertical pour un rendu plus propre  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 } // Le conteneur prend toute la hauteur disponible
});
