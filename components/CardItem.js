import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// export par défaut du composant « CardItem »
export default function CardItem({ title, description, image }) {
  return (
    // Le conteneur principal de la « carte »
    <View style={styles.card}>
      {/* Affiche l’image → on utilise la prop "image" passée depuis le parent */}
      <Image source={{ uri: image }} style={styles.cover} />
      {/* Le corps texte de la carte (titre + description) */}
      <View style={styles.body}>
        {/* Le titre de l’élément */}
        <Text style={styles.title}>{title}</Text>
        {/* La description de l’élément */}
        <Text style={styles.desc}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',                 // prend toute la largeur de son parent
    backgroundColor: '#fff',       // fond blanc — permet de faire « ressortir » la carte
    borderRadius: 12,              // arrondir les coins : joli effet design
    overflow: 'hidden',            // nécessaire pour que l’image ou contenu ne « dépasse » pas les coins arrondis
    marginBottom: 16,              // espacement sous chaque carte (utile s’il y en a plusieurs)
    elevation: 3,                  // donne une ombre / profondeur à la vue sur Android :contentReference[oaicite:0]{index=0}
  },
  cover: {
    width: '100%',                 // l’image prend toute la largeur de la carte
    height: 150,                   // hauteur fixe de 150 px — adapte selon besoin
  },
  body: {
    padding: 12,                   // espacement intérieur autour du titre + description
  },
  title: {
    fontSize: 16,                  // taille de police 16 px
    fontWeight: 'bold',            // texte en gras pour marquer le titre
    marginBottom: 6,               // espacement sous le titre avant la description
  },
  desc: {
    color: '#555',                 // couleur gris foncé pour la description — moins forte que le noir
  }
});
