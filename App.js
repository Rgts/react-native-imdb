import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  Platform,
} from "react-native";
import Constants from "expo-constants";

// --Import familles d'icônes
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function App() {
  // console.log(Constants.statusBarHeight);

  // -- Pour mieux visualiser l'object
  // console.log(JSON.stringify(Constants, null, 2));

  console.log(Platform.OS);

  return (
    // -- UNIQUEMENT SUR IOS => Ce composant décale le contenu sous la status bar
    // <SafeAreaView>
    <ScrollView
      // -- Pour un scroll horizontal
      // horizontal

      // -- Style pour le blaco principale de la scrollview
      style={styles.scrollView}
      // -- Style pour le sous-bloc de la ScrollView (le parent direct des enfants scrollables)
      contentContainerStyle={styles.container}
    >
      <View
        style={[
          styles.wrapper,
          styles.banner,
          styles.flexRowStartStart,
          styles.width100percent,
        ]}
      >
        <Image
          source={{
            uri: "https://res.cloudinary.com/lereacteur-apollo/image/upload/v1684153265/apollo/lereacteur/React%20Native/logo-imdb_tj4n8g.png",
          }}
          style={[styles.logo]}
        />
        {/* -- Image enregistré en local */}
        {/* <Image source={require("./assets/test.jpg")} /> */}
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.movieTitle}>Interstellar</Text>

        <View style={[styles.flexRowStartStart]}>
          <Text style={styles.movieInfo}>2014</Text>
          <Text style={styles.movieInfo}>PG-13</Text>
          <Text style={styles.movieInfo}>2h 49min</Text>
          <Text style={styles.movieInfo}>Adventure, Drama, Sci-Fi</Text>
        </View>

        <View
          style={[
            styles.movieDescription,
            styles.flexRowStartStart,
            styles.marginTop30,
          ]}
        >
          <View style={[styles.movieLeft]}>
            <Image
              source={require("./assets/film.jpg")}
              style={styles.movieImg}
            />
          </View>

          <View style={[styles.movieRight]}>
            <Text style={[styles.movieSynopsis]}>
              A team of explorers travel throught a wormhole in space in an
              attempt to ensure humanity's survival.
            </Text>
            <Button
              title="+ ADD TO WATCHLIST"
              color={"#0277BD"}
              onPress={() => {
                console.log("pressed");
              }}
            />
          </View>
        </View>
        <View style={[styles.flexRowBetweenEvenly, styles.marginTop30]}>
          <View style={styles.rateBox}>
            <MaterialIcons name="star" size={30} color="#E6B91E" />
            <Text
              style={{
                fontSize: 30,
                color: "white",
                lineHeight: 40,
              }}
            >
              8,6
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                /10
              </Text>
            </Text>
            <Text style={styles.movieInfo}>1,1M</Text>
          </View>
          <View style={styles.rateBox}>
            <MaterialIcons name="star-outline" size={30} color="white" />

            <Text
              style={{
                fontSize: 17,
                color: "white",
                lineHeight: 40,
              }}
            >
              RATE THIS
            </Text>
          </View>
          <View style={styles.rateBox}>
            <MaterialIcons name="crop-square" size={30} color="green" />
            <Text
              style={{
                fontSize: 17,
                color: "white",
                lineHeight: 40,
              }}
            >
              Metascore
            </Text>
            <Text style={styles.movieInfo}>46 critic reviews</Text>
          </View>
        </View>
      </View>

      <View style={[styles.wrapper, styles.marginTop13]}>
        <Text style={styles.movieCasting}>Top Billed Cast</Text>

        <View>
          <ScrollView
            contentContainerStyle={[
              styles.flexRowStartStartWrap,
              styles.width100percent,
              styles.wrapper,
            ]}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            <Image
              style={styles.imgActor}
              source={require("./assets/matthew.jpg")}
            />
            <Image
              style={styles.imgActor}
              source={require("./assets/anne.jpg")}
            />
            <Image
              style={styles.imgActor}
              source={require("./assets/jessica.jpg")}
            />
            <Image
              style={styles.imgActor}
              source={require("./assets/mackenzie.jpg")}
            />

            {/* -- Image enregistré en local */}
            {/* <Image source={require("./assets/test.jpg")} /> */}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#191919",
    color: "white",
    // borderWidth: 4,
    // borderColor: "green",
  },
  container: {
    alignItems: "flex-start",
  },

  wrapper: {
    paddingLeft: 13,
    paddingRight: 13,
    backgroundColor: "#212121",
    width: "100%",
  },

  width100percent: {
    width: "100%",
  },

  img: {
    width: "100%",
    height: 600,
    resizeMode: "contain",
  },

  banner: {
    backgroundColor: "#393939",
    height: 75,
  },

  movieDescription: {
    marginTop: 0,
  },

  imgActor: {
    width: 128,
    height: 195,
  },

  flexRowStartStart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 13,
  },

  flexRowStartStartWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "nowrap",
    gap: 13,
  },

  flexRowBetweenEvenly: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    gap: 13,
  },

  rateBox: {
    justifyContent: "flex-start",
    alignItems: "center",
  },

  marginTop30: {
    marginTop: 30,
  },

  marginTop13: {
    marginTop: 13,
  },

  logo: {
    height: 29,
    width: "auto",
    aspectRatio: 2.102425876,
    resizeMode: "contain",
    marginTop: "auto",
    marginBottom: "auto",
  },

  movieTitle: {
    // Style conditionné semon l'OS sur lequel on est
    fontSize: 45,
    color: "white",
  },

  movieCasting: {
    // Style conditionné semon l'OS sur lequel on est
    fontSize: 32,
    color: "white",
  },

  movieInfo: {
    // Style conditionné semon l'OS sur lequel on est
    fontSize: 13,
    color: "white",
  },

  movieLeft: {
    width: 95,
  },

  movieRight: {
    flex: 1,
  },

  movieImg: {
    width: 95,
    height: 135,
    // aspectRatio: 0.137,
    // resizeMode: "cover",
  },
  movieSynopsis: {
    // Style conditionné semon l'OS sur lequel on est
    fontSize: 13,
    color: "white",
    marginBottom: 13,
  },

  btn: {
    marginVertical: 20,
  },
  bgcBlue: {
    backgroundColor: "blue",
  },
  bgcGreen: { backgroundColor: "green" },
  textWhite: {
    color: "white",
  },
  text: {
    // Style conditionné semon l'OS sur lequel on est
    color: Platform.OS === "android" ? "blue" : "green",
  },
});
